import "express-async-errors";
import Express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import router from "./routes";

const app = Express();
const PORT = 8000;
app.use(Express.json());

app.use((req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  app.use(cors());
  next();
});

app.use(router);

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
  return response.json({
    status: "Error",
    message: error.message
  });
  next();
})

app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
})