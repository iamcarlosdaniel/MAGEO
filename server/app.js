import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

import v1AuthRoutes from "./v1/routes/auth.routes.js";
import v1TasksRoutes from "./v1/routes/task.routes.js";
import V1UserRoutes from "./v1/routes/user.routes.js";
import V1SpectatorRoutes from "./v1/routes/spectator.routes.js";
import { FRONTEND_URL } from "./config.js";

const app = express();

app.use(cors());

// app.use(cors({
//     origin: '//dominio',
//     credentials: true
// }));

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

//API Versioning
app.use("/api/v1", v1AuthRoutes);
app.use("/api/v1", v1TasksRoutes);
app.use("/api/v1", V1UserRoutes);
app.use("/api/v1", V1SpectatorRoutes);

//Hello World!
app.get("/helloworld", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

export default app;
