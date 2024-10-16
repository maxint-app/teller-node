import TellerIdentityModule from "./modules/identity.js";
import TellerAccountModule from "./modules/account.js";
import TellerTransactionModule from "./modules/transaction.js";
import TellerInstitutionsModule from "./modules/instituions.js";
export * from "./interfaces/identity.js";
export * from "./interfaces/account.js";
export * from "./interfaces/transaction.js";
export * from "./common/types.js";
export declare class TellerClient {
    private certificatePath;
    private privateKeyPath;
    identity: TellerIdentityModule;
    account: TellerAccountModule;
    transactions: TellerTransactionModule;
    institutions: TellerInstitutionsModule;
    private accessToken;
    constructor({ certificatePath, privateKeyPath, accessToken, }: {
        certificatePath: string;
        privateKeyPath: string;
        accessToken?: string;
    });
}
//# sourceMappingURL=index.d.ts.map