import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'admin@admin.com',
        password: bcrypt.hashSync('admin123', 10),
        isAdmin: true
    },
    {
        name: 'Test User1',
        email: 'test1@test.com',
        password: bcrypt.hashSync('test123', 10),
    },
    {
        name: 'Test User2',
        email: 'test2@test.com',
        password: bcrypt.hashSync('test123', 10),
    }
]

export default users;