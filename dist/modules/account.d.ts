import { Axios } from "axios";
import { ClientBase } from "./client";
import { TellerOptionsBase } from "../common/types";
import { TellerAccount, TellerAccountBalances, TellerAccountDetails } from "../interfaces/account";
export default class TellerAccountModule extends ClientBase {
    constructor(axios: Axios);
    list(options?: TellerOptionsBase): Promise<TellerAccount[]>;
    get(id: string, options?: TellerOptionsBase): Promise<TellerAccount>;
    remove(id: string, options?: TellerOptionsBase): Promise<void>;
    details(id: string, options?: TellerOptionsBase): Promise<TellerAccountDetails>;
    balances(id: string, options?: TellerOptionsBase): Promise<TellerAccountBalances>;
}
//# sourceMappingURL=account.d.ts.map