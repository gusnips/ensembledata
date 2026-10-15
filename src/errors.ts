export function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

// EnsembleData answers errors with { detail }. A string is the reason in its own words.
// A bad request (422) sends a list of { loc, msg }, one per field.
function detailText(body: unknown): string | undefined {
  if (typeof body === "string") return body || undefined;
  if (!isRecord(body)) return undefined;
  const { detail } = body;
  if (typeof detail === "string") return detail;
  if (!Array.isArray(detail)) return undefined;
  const fields = detail.filter(isRecord).map((item) => {
    const where = Array.isArray(item.loc) ? item.loc.join(".") : "request";
    return `${where}: ${String(item.msg)}`;
  });
  return fields.join("; ") || undefined;
}

export class EnsembleDataError extends Error {
  readonly status: number;
  readonly body: unknown;

  constructor(status: number, body: unknown) {
    super(
      detailText(body) ??
        `EnsembleData request failed (HTTP ${status}). Check the request and your token.`,
    );
    this.name = "EnsembleDataError";
    this.status = status;
    this.body = body;
  }
}
