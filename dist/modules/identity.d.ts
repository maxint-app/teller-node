import { Axios } from "axios";
import { ClientBase } from "./client.js";
import { TellerIdentity } from "../interfaces/identity.js";
import { TellerOptionsBase } from "../common/types.js";
export default class TellerIdentityModule extends ClientBase {
    constructor(axios: Axios);
    get(options?: TellerOptionsBase): Promise<TellerIdentity[]>;
}
//# sourceMappingURL=identity.d.ts.map