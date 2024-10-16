import type { TellerInstitution } from "../interfaces/institutions.js";
import { ClientBase } from "./client.js";
export default class TellerInstitutionsModule extends ClientBase {
    list(): Promise<TellerInstitution[]>;
}
//# sourceMappingURL=instituions.d.ts.map