import users from './users.json';

export default class UserService {
    static myInstance = null;

    static getInstance() {
        if (CourseService.myInstance == null) {
            CourseService.myInstance =
                new UserService();
        }
        return this.myInstance;
    }

    createUser = user => {
        users.push(user)
    }
    findAllUsers = () => {
        return users
    }
    findUserById = userId => {
        return users.find(user => user.id == userId)
    }
    updateUser = (userId, newUser) => {
        users = users.map(user => user.id == userId ? newUser : user)
    }
    deleteUser = userId => {
        users = users.filter(user => user.id !== userId)
    }
}