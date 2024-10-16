import type { Axios } from "axios";

export abstract class ClientBase {
  protected axios: Axios;

  constructor(axios: Axios) {
    this.axios = axios;
  }
}