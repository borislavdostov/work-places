import { IUserDropdown } from "./user-dropdown";
import { IWorkPlaceDropdown } from "./work-place-dropdown";

export interface IUserWorkPlaceOptions {
    users: IUserDropdown[],
    workPlaces: IWorkPlaceDropdown[]
}