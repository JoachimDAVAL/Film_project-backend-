import express from "express";
import cors from "cors";


const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Bienvenue sur l'API !" });
});

// Exporter l'Express app comme une fonction Serverless
export default app;
