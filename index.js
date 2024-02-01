import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
      success: true,
      message: "Sucesso!",
    });
});

app.listen(8001,() => console.log(`listening on 8001`));