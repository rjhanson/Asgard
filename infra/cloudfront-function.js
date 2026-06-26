// CloudFront Function (viewer-request). Two jobs:
//   1. Redirect www.<domain> -> apex with a 301.
//   2. Rewrite "pretty" URLs to the underlying S3 object:
//        /            -> /index.html
//        /about/      -> /about/index.html
//        /about       -> /about/index.html
//      Requests that already target a file (have a "." in the last segment)
//      are left alone.
//
// The apex host is injected by Terraform via templatefile() as APEX_HOST.
function handler(event) {
  var request = event.request;
  var host = request.headers.host.value;

  // 1. www -> apex redirect
  if (host === 'www.${APEX_HOST}') {
    return {
      statusCode: 301,
      statusDescription: 'Moved Permanently',
      headers: {
        location: { value: 'https://${APEX_HOST}' + request.uri },
      },
    };
  }

  // 2. directory-index rewrite
  var uri = request.uri;
  if (uri.endsWith('/')) {
    request.uri = uri + 'index.html';
  } else if (!uri.split('/').pop().includes('.')) {
    request.uri = uri + '/index.html';
  }

  return request;
}
