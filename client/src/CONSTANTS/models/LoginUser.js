export default class LoginUser {
  name = undefined;
  password = undefined;

  constructor(_name, _password) {
    this.name = _name;
    this.password = _password;
  }

  getInfo = () => {
    return { name: this.name, password: this.password };
  };
}
