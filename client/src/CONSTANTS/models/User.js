export default class User {
  constructor(
    _name = undefined,
    _phone_number = undefined,
    _bdate = undefined,
    _mgr = undefined,
    _major = undefined,
    _password = undefined
  ) {
    this.phone_number = _phone_number;
    this.name = _name;
    this.mgr = _mgr;
    this.bdate = _bdate;
    this.major = _major;
    this.password = _password;
  }

  getInfo = () => {
    return {
      name: this.name,
      phone_number: this.phone_number,
      bdate: this.bdate,
      mgr: this.mgr,
      major: this.major,
      password: this.password,
    };
  };
}
