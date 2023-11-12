import { Elysia, t } from "elysia";
import verifyToken from "../middleware/verifyToken.ts";

const userRouter = new Elysia().get(
  "/user",
  async ({ jwt, cookie, set, userCtrl }) => {
    const userId = await verifyToken({ jwt, cookie });
    if (!userId) {
      set.status = 401;
      return { message: "Unauthorized" };
    }
    return await userCtrl.getUserByUserId({ set, userId });
  }
  )
  .post(
    "/user",
    async ({  set, body, userCtrl }) => {      
      return await userCtrl.getUserInfoByUserId({ set, body });
    },
    {
      schema: {
        body: t.Object({
          _id: t.String(),
        }),
      },
    }
  );

export default userRouter;
