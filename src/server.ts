import "dotenv/config";
import express from "express";
import cors from "cors";

import colaboradorRoutes from "./routes/colaborador.routes";
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the API Colaboradores");
});

app.use("/api", colaboradorRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

