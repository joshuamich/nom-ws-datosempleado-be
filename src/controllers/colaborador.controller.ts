import {Request,Response} from "express";
import { prisma } from "../lib/prisma";

export async function getColaboradores(
    req: Request,
    res: Response
){
    try {
        const colaboradores = await prisma.colaborador.findMany({
            orderBy: { idcolaborador: "asc" }
        });
        res.json(colaboradores);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener colaboradores" });
    }
}