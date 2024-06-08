import { Axios } from "axios";
import { ClientBase } from "./client";
import { TellerOptionsPagination } from "../common/types";
import { TellerTransaction } from "../interfaces/transaction";

export default class TellerTransactionModule extends ClientBase {
  constructor(axios: Axios) {
    super(axios);
  }

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
      },
    );

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
      },
    );

    return response.data;
  }
}
