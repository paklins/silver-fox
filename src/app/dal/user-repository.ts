import { User } from "./models/user";

export class UserRepository {
    public static GetUser(id: string): User{
        let _User       = new User;
        _User.FullName  = 'Паклин Андрей Александрович';

        return _User;
    }
}
