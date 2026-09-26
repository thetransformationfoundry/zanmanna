export default {
  async fetch(request, env) {

    if (request.method === 'OPTIONS') {
      return corsResponse();
    }
    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }

    const body = await request.text();

    // Long polishes have to stream. On a non-streaming call this Worker sits
    // silent while the model generates, and past Cloudflare's ~100s idle limit
    // the request is killed with a 524 before the response ever arrives.
    //
    // Streaming is opt-in per client: only a body carrying stream:true gets the
    // SSE passthrough, so clients still on the buffered JSON path keep working
    // unchanged and can migrate one at a time.
    let wantsStream = false;
    try {
      wantsStream = JSON.parse(body).stream === true;
    } catch {
      // Malformed JSON — forward as-is and let the API report the error.
    }

    let anthropicResp;
    for (let attempt = 0; attempt < 3; attempt++) {
      if (attempt > 0) await new Promise(r => setTimeout(r, 2000));
      anthropicResp = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type':      'application/json',
          'x-api-key':         env.ANTHROPIC_API_KEY,
          'anthropic-version': '2023-06-01',
        },
        body,
      });
      if (anthropicResp.status !== 529) break;
    }

    // Pipe the SSE body straight through without buffering it. Errors come back
    // as JSON even when a stream was requested, so only pipe on success.
    if (wantsStream && anthropicResp.ok && anthropicResp.body) {
      return new Response(anthropicResp.body, {
        status: anthropicResp.status,
        headers: {
          'Content-Type':                'text/event-stream; charset=utf-8',
          'Cache-Control':               'no-cache, no-transform',
          'Access-Control-Allow-Origin': '*',
        },
      });
    }

    const data = await anthropicResp.text();

    return new Response(data, {
      status: anthropicResp.status,
      headers: {
        'Content-Type':                'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  }
};

function corsResponse() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin':  '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
