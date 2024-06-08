import { Axios } from "axios";
import { ClientBase } from "./client.js";
import { TellerOptionsBase } from "../common/types.js";
import { TellerAccount, TellerAccountBalances, TellerAccountDetails } from "../interfaces/account.js";

export default class TellerAccountModule extends ClientBase {
  constructor(axios: Axios) {
    super(axios);
  }

  async list(options?: TellerOptionsBase): Promise<TellerAccount[]> {
    const response = await this.axios.get("/account", {
      auth: options?.accessToken
        ? { username: options.accessToken, password: "" }
        : undefined,
    });

    return response.data;
  }

  async get(id: string, options?: TellerOptionsBase): Promise<TellerAccount> {
    const response = await this.axios.get(`/accounts/${id}`, {
      auth: options?.accessToken
        ? { username: options.accessToken, password: "" }
        : undefined,
    });

    return response.data;
  }

  async remove(id: string, options?: TellerOptionsBase): Promise<void> {
    await this.axios.delete(`/accounts/${id}`, {
      auth: options?.accessToken
        ? { username: options.accessToken, password: "" }
        : undefined,
    });
  }

  async details(id: string, options?: TellerOptionsBase): Promise<TellerAccountDetails> {
    const response = await this.axios.get(`/accounts/${id}/details`, {
      auth: options?.accessToken
        ? { username: options.accessToken, password: "" }
        : undefined,
    });

    return response.data;
  }

  async balances(id: string, options?: TellerOptionsBase): Promise<TellerAccountBalances> {
    const response = await this.axios.get(`/accounts/${id}/balances`, {
      auth: options?.accessToken
        ? { username: options.accessToken, password: "" }
        : undefined,
    });

    return response.data;
  }
}