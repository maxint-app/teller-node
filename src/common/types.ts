export type TellerOptionsBase = {
  accessToken: string;
};

/**
 * Using the latest Teller Version: 2020-10-12
 */
export type TellerOptionsPagination = TellerOptionsBase & {
  /**
   * The maximum number of transactions to return in the API response.
   */
  count: number;
  /**
   * The transaction from where to start the page.
   * The first transaction in the API response will be the one immediately before the transaction in the ledger with this id.
   *
   * example: txn_oiluj93igokseo0i3a005
   */
  from_id: string;
};
