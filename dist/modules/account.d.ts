import { ClientBase } from "./client.js";
import type { TellerOptionsBase } from "../common/types.js";
import type { TellerAccount, TellerAccountBalances, TellerAccountDetails } from "../interfaces/account.js";
export default class TellerAccountModule extends ClientBase {
    list(options?: TellerOptionsBase): Promise<TellerAccount[]>;
    get(id: string, options?: TellerOptionsBase): Promise<TellerAccount>;
    remove(id: string, options?: TellerOptionsBase): Promise<void>;
    removeAll(options?: TellerOptionsBase): Promise<void>;
    details(id: string, options?: TellerOptionsBase): Promise<TellerAccountDetails>;
    balances(id: string, options?: TellerOptionsBase): Promise<TellerAccountBalances>;
}
//# sourceMappingURL=account.d.ts.map