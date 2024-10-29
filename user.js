
export class user {
    constructor(username, password, name, DOB, budget){
        this.username = username;
        this._password = password;
        this._name = name;
        this._DOB = DOB;
        this._budget = budget;
    }
    set password(p){
        this._password = p;
    }
    set name(n) {
        this._name = n;
    }
    set DOB (y) {
        this._DOB = y;
    }
    set budget (b) {
        this._budget = b;
    }
    get name() {
        return this._name;
    }
    get DOB() {
        return this._DOB;
    }
    get budget() {
        return this._budget;
    }
    get password() {
        return this._password;
    }
}