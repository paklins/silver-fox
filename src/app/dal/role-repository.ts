import { Role } from "./models/role";

export class RoleRepository {
    public static GetById(Id: string): Role{
        let _Role = new Role;
        _Role.Presentation = 'Архитектор программного обеспечения';

        return _Role;
    }
}