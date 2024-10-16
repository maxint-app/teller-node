import type { TellerInstitution } from "../interfaces/institutions.js";
import { ClientBase } from "./client.js";

export default class TellerInstitutionsModule extends ClientBase {
	async list(): Promise<TellerInstitution[]> {
		const response = await this.axios.get("/institutions", {
			responseType: "json",
		});

		if (typeof response.data === "string") {
			return JSON.parse(response.data);
		}

		return response.data;
	}
}
