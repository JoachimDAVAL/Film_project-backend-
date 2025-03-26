import express from "express";
import cors from "cors";
import router from "./router.js";


const app = express();
app.use(cors({
  origin: '*',
}));
app.use(express.json());



app.get("/", (req, res) => {
  res.json({ message: "Bienvenue sur l'API !" });
});

app.use('/api', router);

// Exporter l'Express app comme une fonction Serverless
export default app;
