import {Router} from "express";
import { getColaboradores } from "../controllers/colaborador.controller";

const router = Router();
router.get("/colaboradores", getColaboradores);
export default router;