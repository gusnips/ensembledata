# @gusnips/ensembledata

TypeScript client for the [EnsembleData](https://ensembledata.com) API: public data from TikTok, YouTube, Instagram, Threads, Reddit, Twitter, Twitch and Snapchat. Unofficial, not made by EnsembleData.

```bash
npm install @gusnips/ensembledata
# or
bun add @gusnips/ensembledata
```

## First call

```ts
import { EnsembleDataClient } from "@gusnips/ensembledata";

const ensembledata = new EnsembleDataClient("YOUR_TOKEN");

const { data } = await ensembledata.tiktok.hashtagSearch({ name: "magic" });
```

Get a token on the [EnsembleData dashboard](https://dashboard.ensembledata.com/register). It has 16 characters. Keep it on your server and out of the browser.

The client sends the token for you. You never pass it to a method.

## What you get back

Every method returns an object with a `data` field:

```ts
const { data } = await ensembledata.customer.getUsage({ date: "2026-10-01" });
```

EnsembleData does not publish a schema for `data`, so its type is `unknown`. Check its shape before you read it, with a library like zod, or read only the fields you need.

Some endpoints add more fields next to `data`. They are typed `unknown` too.

## Finding the method you need

Each endpoint is one method. It sits in a group named after the platform, and its name is EnsembleData's own operation name in camelCase:

| EnsembleData endpoint          | In the SDK                                   |
| ------------------------------ | -------------------------------------------- |
| `GET /tt/hashtag/posts`        | `ensembledata.tiktok.hashtagSearch()`        |
| `GET /tt/user/info`            | `ensembledata.tiktok.userInfoFromUsername()` |
| `GET /youtube/channel/videos`  | `ensembledata.youtube.channelVideos()`       |
| `GET /instagram/user/posts`    | `ensembledata.instagram.userPosts()`         |
| `GET /customer/get-used-units` | `ensembledata.customer.getUsage()`           |

Groups: `tiktok` (20 methods), `youtube` (13), `instagram` (11), `threads` (5), `reddit` (3), `twitter` (3), `customer` (2), `twitch` (2) and `snapchat` (1).

Hover a method in your editor to read what it does and what it costs. The parameters are typed from EnsembleData's OpenAPI file, so your editor lists them and marks the required ones.

## Units

EnsembleData charges in units. A call can cost 0 units, 1 unit or more, depending on the endpoint and its parameters. The doc on each method says which. `customer.getUsage` and `customer.getUsageHistory` cost 0 units, so you can check your balance for free.

## More pages

EnsembleData pages with a cursor. A response that has more results carries a `nextCursor`. Send it back as `cursor` to get the next page. When there is no `nextCursor`, there is nothing more.

```ts
// Posts 21 to 40 of the hashtag (cursor 0 is posts 1 to 20):
await ensembledata.tiktok.hashtagSearch({ name: "magic", cursor: 20 });
```

Where `nextCursor` sits in the response can change from one endpoint to the next, so print one response before you write the loop.

## Errors

A failed call throws `EnsembleDataError`. It has the HTTP `status`, the raw `body`, and a `message` in EnsembleData's own words:

```ts
import { EnsembleDataError } from "@gusnips/ensembledata";

try {
  await ensembledata.tiktok.userInfoFromUsername({ username: "nobody-here" });
} catch (error) {
  if (error instanceof EnsembleDataError && error.status === 495) {
    // All your units for today are used.
  }
  throw error;
}
```

EnsembleData uses these statuses:

| Status | Meaning                                                |
| ------ | ------------------------------------------------------ |
| 422    | The request is not valid. The message names the field. |
| 462    | The URL is not valid.                                  |
| 463    | The username or user id is not valid.                  |
| 464    | Too many post ids in one request.                      |
| 465    | The YouTube URL is not valid.                          |
| 466    | The country code is not valid.                         |
| 469    | The topic is restricted.                               |
| 471    | The user is restricted.                                |
| 472    | The user is private.                                   |
| 473    | The user was not found.                                |
| 474    | The profile is not available in the region.            |
| 491    | The token was not found.                               |
| 492    | The email is not verified.                             |
| 493    | The subscription expired.                              |
| 495    | All the daily units are used.                          |
| 500    | Something went wrong at EnsembleData.                  |

Network failures, like a lost connection, throw the error `fetch` gives you.

## Timeouts and retries

A call waits as long as `fetch` waits. To stop after 30 seconds, pass a signal as the second argument:

```ts
await ensembledata.tiktok.hashtagSearch(
  { name: "magic" },
  { signal: AbortSignal.timeout(30_000) },
);
```

The client never retries. A retry can cost units again, so you decide when to do it.

## Options

```ts
new EnsembleDataClient({
  token: "YOUR_TOKEN",
  baseUrl: "https://ensembledata.com/apis", // the default
  fetch: myFetch, // takes a Request, returns a Response
});
```

`ensembledata.api` is the typed [openapi-fetch](https://openapi-ts.dev/openapi-fetch/) client underneath. Use it when you need the raw `Response`, such as its headers. It sends the token too.

EnsembleData also publishes its own client, [`ensembledata`](https://www.npmjs.com/package/ensembledata). This one is generated from EnsembleData's OpenAPI file, so every parameter is typed.

## Keeping it current

The methods are written by a script from `openapi.json`. To update after EnsembleData changes its API, replace that file and run:

```bash
bun run generate
```

Do not edit `src/schema.d.ts`, `src/client.ts` or `src/modules/`. The script rewrites them.

## License

MIT. Not affiliated with EnsembleData.
