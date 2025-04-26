import { ClientBase } from "./client.js";
import type { TellerOptionsBase } from "../common/types.js";
import type { TellerAccount, TellerAccountBalances, TellerAccountDetails } from "../interfaces/account.js";

export default class TellerAccountModule extends ClientBase {
	async list(options?: TellerOptionsBase): Promise<TellerAccount[]> {
		const response = await this.axios.get("/account", {
			auth: options?.accessToken
				? { username: options.accessToken, password: "" }
				: undefined,
			responseType: "json",
		});

		if (typeof response.data === "string") {
			return JSON.parse(response.data);
		}

		return response.data;
	}

	async get(id: string, options?: TellerOptionsBase): Promise<TellerAccount> {
		const response = await this.axios.get(`/accounts/${id}`, {
			auth: options?.accessToken
				? { username: options.accessToken, password: "" }
				: undefined,
			responseType: "json",
		});

		if (typeof response.data === "string") {
			return JSON.parse(response.data);
		}

		return response.data;
	}

	async remove(id: string, options?: TellerOptionsBase): Promise<void> {
		await this.axios.delete(`/accounts/${id}`, {
			auth: options?.accessToken
				? { username: options.accessToken, password: "" }
				: undefined,
			responseType: "json",
		});
	}

	async removeAll(options?: TellerOptionsBase): Promise<void> {
		await this.axios.delete("/accounts", {
			responseType: "json",
			auth: options?.accessToken
				? { username: options.accessToken, password: "" }
				: undefined,
		});
	}

	async details(
		id: string,
		options?: TellerOptionsBase,
	): Promise<TellerAccountDetails> {
		const response = await this.axios.get(`/accounts/${id}/details`, {
			auth: options?.accessToken
				? { username: options.accessToken, password: "" }
				: undefined,
			responseType: "json",
		});

		if (typeof response.data === "string") {
			return JSON.parse(response.data);
		}

		return response.data;
	}

  async balances(id: string, options?: TellerOptionsBase): Promise<TellerAccountBalances> {
		const response = await this.axios.get(`/accounts/${id}/balances`, {
			auth: options?.accessToken
				? { username: options.accessToken, password: "" }
				: undefined,
			responseType: "json",
		});

		if (typeof response.data === "string") {
			return JSON.parse(response.data);
		}

		return response.data;
	}
}
