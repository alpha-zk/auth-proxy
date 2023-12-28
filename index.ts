import * as http from "http";
import * as httpProxy from "http-proxy";

const ALPHAZK_API_ENDPOINT = process.env.ALPHAZK_API_ENDPOINT
const ALPHAZK_API_KEY= process.env.ALPHAZK_API_KEY

// Create a proxy server instance
const proxy = httpProxy.createProxyServer({});

// Create a basic HTTP server
const server = http.createServer((req, res) => {
  // Log the incoming request
  console.log('Received request for:', req.url);

  // Proxy the request to the target server
  proxy.web(req, res, {
    target: {
      protocol: "https:",
      host: ALPHAZK_API_ENDPOINT!,
      port: 443
    },
    headers: {"apikey": ALPHAZK_API_KEY!},
    secure: true,
    changeOrigin: true
  });
});

// Handle errors in the proxy
proxy.on('error', (err, req, res) => {
  console.error('Proxy error:', err);
  // @ts-ignore
  res.writeHead(500, {
    'Content-Type': 'application/json'
  });
  res.end('Something went wrong with the proxy.');
});

// Listen on port 3033 for incoming requests
server.listen(3033, () => {
  console.log('Reverse proxy server listening on port 3033');
});