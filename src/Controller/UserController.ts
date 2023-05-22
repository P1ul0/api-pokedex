import { User } from "./../Model/User";
import { Controller, Get, Post } from "@overnightjs/core";
import { UserService } from "../Services/UseServices";
import { Request, Response } from "express";


@Controller("users")
export class UserController {
  constructor(private userService: UserService = new UserService()) {
    this.userService = userService;
  }

  @Post("register")
  public async registerUsers(req: Request, res: Response): Promise<Response> {
   const { name, email, password, confirmPassword, gender } = req.body;

    if (password !== confirmPassword) throw new Error("As Senhas não são iguais");

    const user: User = new User(name, email, password, gender);
    try {
      await this.userService.createUser(user);
      return res.status(201).json({ message: "Usuário Criado" });
    } catch (error) {
      return res.status(500).json({ message: "Usuário não Cadastrado" });
    }


  }
  @Get()
  public async getUser(req: Request, res: Response): Promise<Response>{
      try{
        return res.status(200).json({message: "funcionou !!!!!"})
      }catch(error){
        return res.status(400).json({error})
      }
  }

}


