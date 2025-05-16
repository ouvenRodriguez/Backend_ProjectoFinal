import config from "./src/utils/configServer.js";
import express from "express";
import cors from "cors";
import api from "./src/server/routes/index.js";
import logger from "./src/middleware/logger.js";
import path from "path";
import { fileURLToPath } from "url";
import "./src/utils/database.js";
import { sv } from "./src/utils/constans.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors())
app.use("/assets", express.static(path.join(__dirname, "assets")));

app.use(express.json());
app.use("/api/", api);

app.listen(config.port, (error) => {
  if (!error)
    logger
      .child(sv)
      .info(`Server running on ${config.env} port :${config.port}`);
  else logger.child(sv).fatal(error);
});
