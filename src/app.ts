import { Server } from "@overnightjs/core";
import {  UserController } from "./Controller/UserController";


export class App extends Server {
    constructor(){
        super();
        
        this.addController()
    }

    private addController (){
      const userController = new UserController()

      super.addControllers([userController])
    }

    public start(port: number): void {
        this.app.listen(port, () => {
          console.log('server rodando na porta:', port);
        });
      }
}