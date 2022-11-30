import { rest } from "msw";

export const handlers = [
  rest.post("http://localhost:3001/auth/signUp", (req, res, ctx) => {
    console.log("모킹 진입");
    console.log(`모킹 요청 정보 : ${req.body}`);
    return res(ctx.status(200), ctx.json({ ...req.body }));
  }),
];
