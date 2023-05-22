import { Server } from "@overnightjs/core";
import {  UserController } from "./Controller/UserController";
import bodyParser from "body-parser";
import cors from "cors";


export class App extends Server {
    constructor(){
        super();
        
        this.setupMiddleware()
        this.addController()
    }

    private addController (){
      const userController = new UserController()

      super.addControllers([userController])
    }
    private setupMiddleware(): void{
      this.app.use(bodyParser.json());
      this.app.use(bodyParser.urlencoded({ extended: true }));
  
      
      this.app.use(cors())
    }

    public start(port: number): void {
        this.app.listen(port, () => {
          console.log('server rodando na porta:', port);
        });
      }
}