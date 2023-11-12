import { Elysia } from "elysia";
import { cookie } from "@elysiajs/cookie";
import { jwt } from "@elysiajs/jwt";
import { cors } from "@elysiajs/cors";
import { swagger } from "@elysiajs/swagger";
import AuthController from "./controllers/authController";
import UserController from "./controllers/userController";
import TripController from "./controllers/tripController";
import LocationController from "./controllers/locationController";
import RequestController from "./controllers/requestController";
import RatingController from "./controllers/ratingController";
import authRouter from "./routes/authRouter";
import userRouter from "./routes/userRouter";
import tripRouter from "./routes/tripRouter";
import locationRouter from "./routes/locationRouter";
import requestRouter from "./routes/requestRouter";
import ratingRouter from "./routes/ratingRouter";
import * as mongoose from "mongoose";

// connect to database
try {
  await mongoose.connect(process.env.MONGO as string);
  console.log("Connected to database!");
} catch (error) {
  console.error("DB_ERROR: ", error);
}

const app = new Elysia()
  .use(
    jwt({
      name: "jwt",
      secret: process.env.JWT as string,
    })
  )
  .use(cookie())
  .use(cors(
    {
      credentials: true,
    }
  ))
  .use(swagger())

  // =======controllers=======
  .decorate("authCtrl", new AuthController())
  .decorate("tripCtrl", new TripController())
  .decorate("locationCtrl", new LocationController())
  .decorate("userCtrl", new UserController())
  .decorate("requestCtrl", new RequestController())
  .decorate("ratingCtrl", new RatingController())

  // =======routers=======
  .use(authRouter)
  .use(tripRouter)
  .use(locationRouter)
  .use(userRouter)
  .use(requestRouter)
  .use(ratingRouter)

  .listen(8888);

console.log(`Server is running at localhost:${app.server.port}`);