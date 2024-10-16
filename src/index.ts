import { Axios } from "axios";
import TellerIdentityModule from "./modules/identity.js";
import https from "node:https";
import fs from "node:fs";
import TellerAccountModule from "./modules/account.js";
import TellerTransactionModule from "./modules/transaction.js";
import TellerInstitutionsModule from "./modules/instituions.js";

export * from "./interfaces/identity.js";
export * from "./interfaces/account.js";
export * from "./interfaces/transaction.js";
export * from "./common/types.js";

export class TellerClient {
  private certificatePath: string;
  private privateKeyPath: string;

  identity: TellerIdentityModule;
  account: TellerAccountModule
  transactions: TellerTransactionModule;
  institutions: TellerInstitutionsModule

  private accessToken: string | undefined;

  constructor({
    certificatePath,
    privateKeyPath,
    accessToken,
  }: {
    certificatePath: string;
    privateKeyPath: string;
    accessToken?: string;
  }) {
    this.certificatePath = certificatePath;
    this.privateKeyPath = privateKeyPath;
    this.accessToken = accessToken;

    const httpsAgent = new https.Agent({
      cert: fs.readFileSync(this.certificatePath),
      key: fs.readFileSync(this.privateKeyPath),
    });

    const axios = new Axios({
      baseURL: "https://api.teller.io",
      auth: this.accessToken
        ? {
            username: this.accessToken,
            password: "",
          }
        : undefined,
      httpsAgent,
      responseType: "json",
    });

    this.identity = new TellerIdentityModule(axios);
    this.account = new TellerAccountModule(axios);
    this.transactions = new TellerTransactionModule(axios);
    this.institutions = new TellerInstitutionsModule(axios);
  }
}