import express, { Express, Request, Response } from "express";

const app: Express = express();

const port = 4000;

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("new express app");
});

app.listen(port, () => {
  console.log("Server started on port " + port);
});
