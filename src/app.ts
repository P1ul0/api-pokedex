import { Server } from "@overnightjs/core";


export class App extends Server {
    constructor(){
        super();
    }

    public start(port: number): void {
        this.app.listen(port, () => {
          console.log('server rodando na porta:', port);
        });
      }
}