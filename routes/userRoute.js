import {Router} from "express";
import { userData } from "../controller/user.js";


 export const UserRoute = Router();





  UserRoute.get("/name", (req,res)=>{
     res.status(200).json({
         code: 200,
         answer:userData[0].username,
     });
  });

  UserRoute.get("/id", (req,res)=>{
     res.status(200).json({
         code: 200,
         answer:userData[0].id,
     });
  });

  UserRoute.get("/age", (req,res)=>{
     res.status(200).json({
         code: 200,
         answer:userData[0].age,
     });
  });
// // dazu userdata oder net ?.......
//  UserRoute.get("/age",userData, (req,res)=>{
//     res.status(200).json({
//         code: 200,
//         answer:age,
//     });
//  });