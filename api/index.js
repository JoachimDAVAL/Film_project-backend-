import express from "express";
import cors from "cors";
import router from "./router.js";


const app = express();

app.use(express.json());

app.use(express.urlencoded({ extend: true }));

app.use(cors({
  origin: 'https://film-project-frontend.vercel.app/',
}));

app.get("/", (req, res) => {
  res.json({ message: "Bienvenue sur l'API !" });
});

app.use('/api', router);

// Exporter l'Express app comme une fonction Serverless
export default app;
