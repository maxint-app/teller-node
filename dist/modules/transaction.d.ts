import { ClientBase } from "./client.js";
import type { TellerOptionsPagination } from "../common/types.js";
import type { TellerTransaction } from "../interfaces/transaction.js";
export default class TellerTransactionModule extends ClientBase {
    list(accountId: string, options?: TellerOptionsPagination): Promise<TellerTransaction[]>;
    get({ accountId, id }: {
        id: string;
        accountId: string;
    }, options?: TellerOptionsPagination): Promise<TellerTransaction>;
}
//# sourceMappingURL=transaction.d.ts.map