import { IUserDropdown } from "./user-dropdown";
import { IWorkPlace } from "./work-place";

export interface IUserWorkplaceOptions {
    users: IUserDropdown[],
    workplaces: IWorkPlace[]
}