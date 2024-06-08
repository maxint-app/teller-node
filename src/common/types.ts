export type TellerOptionsBase = {
  accessToken: string;
}

export type TellerOptionsPagination = TellerOptionsBase & {
  cursor: string;
  limit: number;
}