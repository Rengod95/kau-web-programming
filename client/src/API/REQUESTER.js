import axios from "axios";

//request 발송의 책임만 짐, 에러 핸들링은 각 컴포넌트 혹은 훅에서 수행

const REQUESTER = (function () {
  axios.defaults.baseURL = "http://localhost:3001";
  axios.defaults.withCredentials = true;

  const signUpUser = async (User) => {
    console.log("회원가입 유저 정보 :", User);
    const response = await axios({
      url: "/auth/signUp",
      method: "POST",
      data: User.getInfo(),
    });

    return response;
  };

  const signInUser = async (LoginUser) => {
    const response = await axios({
      url: "/auth/signIn",
      method: "POST",
      data: LoginUser.getInfo(),
    });

    return response;
  };

  return {
    signInUser,
    signUpUser,
  };
})();

export default REQUESTER;
