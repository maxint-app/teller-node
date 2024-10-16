import { ClientBase } from "./client.js";
import type { TellerOptionsPagination } from "../common/types.js";
import type { TellerTransaction } from "../interfaces/transaction.js";

export default class TellerTransactionModule extends ClientBase {
  async list(
    accountId: string,
    options?: TellerOptionsPagination,
  ): Promise<TellerTransaction[]> {
    const searchParams =
      options?.cursor && typeof options?.limit === "number"
        ? new URLSearchParams({
            from_id: options?.cursor,
            count: options?.limit?.toString(),
          }).toString()
        : null;

    const response = await this.axios.get(
      `/accounts/${accountId}/transactions?${searchParams}`,
      {
        auth: options?.accessToken
          ? { username: options.accessToken, password: "" }
          : undefined,
        responseType: "json",
      },
    );

    if (typeof response.data === "string") {
      return JSON.parse(response.data);
    }

    return response.data;
  }

  async get(
    { accountId, id }: { id: string; accountId: string },
    options?: TellerOptionsPagination,
  ): Promise<TellerTransaction> {
    const response = await this.axios.get(
      `/accounts/${accountId}/transactions/${id}`,
      {
        auth: options?.accessToken
          ? { username: options.accessToken, password: "" }
          : undefined,
        responseType: "json",
      },
    );

    if (typeof response.data === "string") {
      return JSON.parse(response.data);
    }

    return response.data;
  }
}
