import { Axios } from "axios";
import { ClientBase } from "./client.js";
import { TellerIdentity } from "../interfaces/identity.js";
import { TellerOptionsBase } from "../common/types.js";

export default class TellerIdentityModule extends ClientBase {
  constructor(axios: Axios) {
    super(axios);
  }

  public async get(options?: TellerOptionsBase): Promise<TellerIdentity[]> {
    const response = await this.axios.get("/identity", {
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
