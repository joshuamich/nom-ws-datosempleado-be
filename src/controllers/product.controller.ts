import {Request,Response} from "express";
import { prisma } from "../lib/prisma";

export async function getProducts(
    req: Request,
    res: Response
){
    try {
        const colaboradores = await prisma.colaborador.findMany({
            orderBy: { idcolaborador: "asc" }
        });
        res.json(colaboradores);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error retrieving colaboradores" });
    }
}