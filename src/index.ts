import express from "express";
import cors from "cors";

import chatRoutes from "./v1/routes/chatRoutes";
import userRoutes from "./v1/routes/userRoutes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/chat", chatRoutes);
app.use("/user", userRoutes);

export default app;