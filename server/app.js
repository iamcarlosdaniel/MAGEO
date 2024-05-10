import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

import v1AuthenticationRoutes from "./v1/routes/authentication.routes.js";
import v1TasksRoutes from "./v1/routes/task.routes.js";
import v1UserRoutes from "./v1/routes/user.routes.js";
import v1SpectatorRoutes from "./v1/routes/spectator.routes.js";
import v1EventRoutes from "./v1/routes/event.routes.js";
import v1AdvertisingPieceRoutes from "./v1/routes/advertisingPiece.routes.js";
import v1ProtocolRoutes from "./v1/routes/protocol.routes.js";
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
app.use("/api/v1", v1AuthenticationRoutes);
app.use("/api/v1", v1TasksRoutes);
app.use("/api/v1", v1UserRoutes);
app.use("/api/v1", v1EventRoutes);
app.use("/api/v1", v1SpectatorRoutes);
app.use("/api/v1", v1AdvertisingPieceRoutes);
app.use("/api/v1", v1ProtocolRoutes);

//Hello World!
app.get("/helloworld", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

export default app;
