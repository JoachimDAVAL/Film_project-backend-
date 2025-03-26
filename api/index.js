import express from "express";
import cors from "cors";



const app = express();

app.use(express.json());



app.use(cors({
  origin: 'https://film-project-frontend.vercel.app/',
}));

app.get("/", (req, res) => {
  res.json({ message: "Bienvenue sur l'API !" });
});



// Exporter l'Express app comme une fonction Serverless
export default app;
