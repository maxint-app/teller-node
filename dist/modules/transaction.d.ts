import { Axios } from "axios";
import { ClientBase } from "./client.js";
import { TellerOptionsPagination } from "../common/types.js";
import { TellerTransaction } from "../interfaces/transaction.js";
export default class TellerTransactionModule extends ClientBase {
    constructor(axios: Axios);
    list(accountId: string, options?: TellerOptionsPagination): Promise<TellerTransaction[]>;
    get({ accountId, id }: {
        id: string;
        accountId: string;
    }, options?: TellerOptionsPagination): Promise<TellerTransaction>;
}
//# sourceMappingURL=transaction.d.ts.map