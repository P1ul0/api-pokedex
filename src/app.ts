import { Server } from "@overnightjs/core";
import {  UserController } from "./Controller/UserController";
import bodyParser from "body-parser";
import cors from "cors";
import { AppDataSource } from "./Database/Database";
import { error, log } from "console";

export class App extends Server {
    constructor(){
        super();
        this.addController()
        this.connectDatabase()

       
    }

    private addController (){
      const userController = new UserController()

      super.addControllers([userController])
    }
    
    private connectDatabase (){
      AppDataSource.initialize()
      .then(() => console.log("DataBase conectada"))
      .catch(error => console.log(error))
    }

    public start(port: number): void {
        this.app.listen(port, () => {
          console.log('server rodando na porta:', port);
        });
      }
}