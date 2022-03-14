const user = [];

module.exports = class User {

    constructor(new_name, new_username, new_password) {
        this.nombre = new_name;
        this.username = new_username;
        this.password = new_password;
    }

    save() {
        user.push(this);
    }

    static login(username, password) {
        return true;
    }
}