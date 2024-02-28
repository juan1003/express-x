import express from "express";
import morgan from "morgan";
import path from "path";

const app = express();

// Set the view engine to Pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(morgan("combined"));

app.get("/", (req: express.Request, res: express.Response, next: any) => {
    res.render('index')
});

app.post("/clicked", (req: express.Request, res: express.Response, next: any) => {
    res.send(`<button class="text-sm uppercase font-bold text-green-400 border border-green-300 px-3 py-1 rounded hover:bg-green-300 hover:text-black">You clicked me!</button>`);
});

app.listen(3000);