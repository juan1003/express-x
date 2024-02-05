import express from "express";
import morgan from "morgan";
import path from "path";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(morgan("combined"));

app.get("/", (req: express.Request, res: express.Response, next: any) => {
    res.sendFile(path.join(__dirname, "/index.html"));
});

app.post("/clicked", (req: express.Request, res: express.Response, next: any) => {
    res.send(`<button class="text-sm uppercase font-bold text-green-400 border border-green-300 px-3 py-1 rounded hover:bg-green-300 hover:text-black">You clicked me!</button>`);
});

app.listen(3000);