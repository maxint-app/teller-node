import { ClientBase } from "./client.js";
import type { TellerOptionsPagination } from "../common/types.js";
import type { TellerTransaction } from "../interfaces/transaction.js";

export default class TellerTransactionModule extends ClientBase {
  async list(
    accountId: string,
    options?: TellerOptionsPagination
  ): Promise<TellerTransaction[]> {
    const params = Object.entries({
      count: options?.count?.toString(),
      from_id: options?.from_id,
    }).filter((entry): entry is [string, string] => entry[1] != null);

    const searchParams = new URLSearchParams(params);

    const response = await this.axios.get(
      `/accounts/${accountId}/transactions?${searchParams}`,
      {
        auth: options?.accessToken
          ? { username: options.accessToken, password: "" }
          : undefined,
        responseType: "json",
      }
    );

    if (typeof response.data === "string") {
      return JSON.parse(response.data);
    }

    return response.data;
  }

  async get(
    { accountId, id }: { id: string; accountId: string },
    options?: TellerOptionsPagination
  ): Promise<TellerTransaction> {
    const response = await this.axios.get(
      `/accounts/${accountId}/transactions/${id}`,
      {
        auth: options?.accessToken
          ? { username: options.accessToken, password: "" }
          : undefined,
        responseType: "json",
      }
    );

    if (typeof response.data === "string") {
      return JSON.parse(response.data);
    }

    return response.data;
  }
}
