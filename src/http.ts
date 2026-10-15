import createClient from "openapi-fetch";
import type { Client } from "openapi-fetch";
import { EnsembleDataError, isRecord } from "./errors";
import type { paths } from "./schema";

export type EnsembleDataFetch = (request: Request) => Promise<Response>;

export interface EnsembleDataConfig {
  /** The 16-character token from your EnsembleData dashboard. */
  token: string;
  baseUrl?: string;
  fetch?: EnsembleDataFetch;
}

/** Pass `AbortSignal.timeout(30_000)` to stop waiting after 30 seconds. */
export interface CallOptions {
  signal?: AbortSignal;
}

/** The query string of one endpoint, without the token. */
export type Query<P extends keyof paths> =
  paths[P]["get"]["parameters"]["query"];

/**
 * What every endpoint answers. EnsembleData publishes no schema for `data`, so it is `unknown`:
 * check its shape before you use it.
 */
export interface EnsembleDataResponse {
  data: unknown;
  [key: string]: unknown;
}

function isResponse(value: unknown): value is EnsembleDataResponse {
  return isRecord(value) && "data" in value;
}

export function createApi(config: EnsembleDataConfig): Client<paths> {
  const api = createClient<paths>({
    baseUrl: (config.baseUrl ?? "https://ensembledata.com/apis").replace(
      /\/+$/,
      "",
    ),
    fetch: config.fetch,
    headers: { Accept: "application/json" },
  });
  api.use({
    onRequest({ request }) {
      const url = new URL(request.url);
      url.searchParams.set("token", config.token);
      return new Request(url, request);
    },
  });
  return api;
}

export async function unwrap(
  result: Promise<{ data?: unknown; error?: unknown; response: Response }>,
): Promise<EnsembleDataResponse> {
  const { data, error, response } = await result;
  if (!response.ok) throw new EnsembleDataError(response.status, error);
  if (!isResponse(data)) throw new EnsembleDataError(response.status, data);
  return data;
}
