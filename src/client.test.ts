import { describe, expect, test } from "bun:test";
import { EnsembleDataClient } from "./client";
import { EnsembleDataError } from "./errors";
import type { EnsembleDataFetch } from "./http";

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function mockFetch(handler: () => Response) {
  const requests: Request[] = [];
  const fetch: EnsembleDataFetch = async (request) => {
    requests.push(request.clone());
    return handler();
  };
  return { fetch, requests };
}

describe("EnsembleDataClient", () => {
  test("sends the token and the query to the endpoint's path", async () => {
    const mock = mockFetch(() => json({ data: [{ id: 1 }] }));
    const client = new EnsembleDataClient({
      token: "abc123",
      fetch: mock.fetch,
    });

    const result = await client.tiktok.hashtagSearch(
      // @ts-expect-error The client sends the token, so a call cannot pass one.
      { name: "magic", cursor: 20, token: "other" },
    );

    expect(result.data).toEqual([{ id: 1 }]);
    const url = new URL(mock.requests[0].url);
    expect(mock.requests[0].method).toBe("GET");
    expect(url.origin + url.pathname).toBe(
      "https://ensembledata.com/apis/tt/hashtag/posts",
    );
    expect(Object.fromEntries(url.searchParams)).toEqual({
      name: "magic",
      cursor: "20",
      token: "abc123",
    });
  });

  test("throws EnsembleDataError with the API's own words", async () => {
    const mock = mockFetch(() => json({ detail: "All daily units used" }, 495));
    const client = new EnsembleDataClient({
      token: "abc123",
      fetch: mock.fetch,
    });

    const error = await client.snapchat
      .userInfo({ name: "x" })
      .catch((caught) => caught);

    expect(error).toBeInstanceOf(EnsembleDataError);
    expect(error.status).toBe(495);
    expect(error.message).toBe("All daily units used");
  });

  test("names the field when the API rejects a request (422)", async () => {
    const body = {
      detail: [
        { loc: ["query", "name"], msg: "field required", type: "missing" },
      ],
    };
    const mock = mockFetch(() => json(body, 422));
    const client = new EnsembleDataClient({
      token: "abc123",
      fetch: mock.fetch,
    });

    const error = await client.snapchat
      .userInfo({ name: "" })
      .catch((caught) => caught);

    expect(error.message).toBe("query.name: field required");
  });

  test("rejects a 200 that is not { data }", async () => {
    const mock = mockFetch(() => json(["nope"]));
    const client = new EnsembleDataClient({
      token: "abc123",
      fetch: mock.fetch,
    });

    const error = await client.snapchat
      .userInfo({ name: "x" })
      .catch((caught) => caught);

    expect(error).toBeInstanceOf(EnsembleDataError);
    expect(error.message).toBe(
      "EnsembleData answered with something that is not { data }.",
    );
  });
});
