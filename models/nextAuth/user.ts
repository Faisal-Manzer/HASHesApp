import Adapters, { TypeORMUserModel } from 'next-auth/adapters'


const NextAuthUser = Adapters.TypeORM.Models.User.model as typeof TypeORMUserModel;

class User extends NextAuthUser {
    public permissions: string[];

    constructor(name, email, image, emailVerified, permissions: string[] = []) {
        super(name, email, image, emailVerified);
        this.permissions = permissions;
    }
}

const UserSchema = {
    name: 'User',
    target: User,
    columns: {
        ...Adapters.TypeORM.Models.User.schema.columns,
        permissions: {
            type: 'varchar',
            nullable: true
        },
    },
}

export default {
    model: User,
    schema: UserSchema,
};
