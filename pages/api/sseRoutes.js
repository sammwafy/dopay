import { Router } from "express";
import { init } from "./sse";

const router = Router();

router.get("/stream", init);

export default router;