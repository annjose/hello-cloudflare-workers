```
npm install
npm run dev
```

```
npm run deploy
```

This worker is deployed to https://hello-cloudflare-workers.annjose.workers.dev/

## Endpoints
1. http://<host:port>/message
Output: `Hello Hono!`

2. http://<host:port>/api
Output: `{"name":"Cloud!"}`

3. http://<host:port>/hello
Output: `Hello World!`

4. http://<host:port>/hello?name=abc
Output: `Hello abc!`
