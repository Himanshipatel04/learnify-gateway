import express from "express";
import "dotenv/config";
import { requestLogger } from "./utils/requestLogger";
import proxyRoutes from "./routes/proxyRoutes";

const app = express();

app.use(express.json());
app.use(requestLogger);

app.use("/", proxyRoutes);

app.get("/", (req, res) => {
  res.status(200).json({ message: "API Gateway is running" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Gateway running on port ${PORT}`);
});
