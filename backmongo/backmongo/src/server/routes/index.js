import { Router } from "express";
import RUser from "./RUser.js";
const router = Router();

router.use("/user", RUser);

router.get("/", (req, res) => {
  res.json({ message: "API MAJOR v1.0" });
});

export default router;
