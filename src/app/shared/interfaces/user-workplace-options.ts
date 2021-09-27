import { IUserDropdown } from "./user-dropdown";
import { IWorkplace } from "./workplace";

export interface IUserWorkplaceOptions {
    users: IUserDropdown[],
    workplaces: IWorkplace[]
}