import User from "./UserClass.js"

export default function createUsers(usersArray) {
    return usersArray.map((user) => new User(user));
}