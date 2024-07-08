import express, {json} from "express";
import { UserRoute } from "./routes/userRoute.js";
import { idk1 } from "./middleware/idk.js";
import {userData} from "./controller/user.js";



const app = express();
app.use(json());
app.use("/user", UserRoute)


// hide email & passwort:
app.get("/user",idk1, (req,res)=>{
    res.status(200).json({
        code:200,
        answer:[userData[0].id,userData[0].username,userData[0].age],
    });
});


// key?:




// update user:
app.patch("/user/:id", (req, res) => {
    const data = req.body;
    const userID = req.params.id;
    const entries = Object.keys(data);
    const result = users.find((user) => {
      return user.id === userID;
    });
    result[entries[0]] = data[entries[0]];
  
    res.status(200).json({
      code: 200,
      answer: result,
    });
  });



app.all("*", (req, res) => {
    res.status(404).json({
      code: 404,
      answer: "Endpoint not found!",
    });
  });

app.listen(3000, ()=>{
    console.log("Läuft auf server 3000");
});



// Hier Die Aufgabe-
// Erstelle eine API:
// Anforderungen
// 1 API Path mit 3 Endpoints
// Die Endpoints
// post: Erstellt einen User mit id, username, age,  email, password
// get: Gibt einen User zurück aber ohne E-Mail und Passwort
// put/patch: Updatet einen User. (Wichtig; Die ID darf nicht überschrieben werden)
// Middlwares
// Es muss mindestens eine Middleware verwendet werden
// Auslagern
// Middlewares, Controller und Routes müssen ausgelagert werden. Du weißt wie das geht.