import { Role } from "./models/role";

export class RoleRepository {
    public static GetById(Id: string): Role{
        let _Role = new Role;
        _Role.Presentation = 'Системный администратор';

        return _Role;
    }
}