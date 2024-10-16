import { ClientBase } from "./client.js";
import type { TellerIdentity } from "../interfaces/identity.js";
import type { TellerOptionsBase } from "../common/types.js";
export default class TellerIdentityModule extends ClientBase {
    get(options?: TellerOptionsBase): Promise<TellerIdentity[]>;
}
//# sourceMappingURL=identity.d.ts.map