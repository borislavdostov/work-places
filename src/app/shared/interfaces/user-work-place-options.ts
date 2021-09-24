import { IUserDropdown } from "./user-dropdown";
import { IWorkPlace } from "./work-place";

export interface IUserWorkPlaceOptions {
    users: IUserDropdown[],
    workplaces: IWorkPlace[]
}