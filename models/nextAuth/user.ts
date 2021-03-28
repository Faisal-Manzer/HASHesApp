import Adapters from 'next-auth/adapters'


class User extends Adapters.TypeORM.Models.User.model {
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
