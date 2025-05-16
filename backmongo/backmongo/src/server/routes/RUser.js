import { Router } from "express";
const router = Router();
import Token from "../../middleware/token.js";
import { registerUser, loginUser, infoUser } from "../controllers/CUser.js";

router.post("/login", async (req, res) => {
  const response = await loginUser(req.body);
  res.status(200).json(response);
});

router.post("/register", async (req, res) => {
  const response = await registerUser(req.body);
  res.status(200).json(response);
});

router.get("/info", Token.verifyToken, async (req, res) => {
  const response = await infoUser(req.body);
  res.status(200).json(response);
});

export default router;
