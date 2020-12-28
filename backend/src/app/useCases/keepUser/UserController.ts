import {Request, Response} from 'express';
import CreateUser from './CreateUser';
import ListUser from './ListUser';

export default class CreateUserController{

  public async store(request: Request, response: Response): Promise<Response>{
    try{
      const {name, user_login, password} = request.body;
      const createUser = new CreateUser();
      const user = await createUser.insertUser({name, user_login, password});

      return response.status(201).json(user);

    }catch(err){
      return response.status(400).json({error:err.message});
    }
  }

  public async showUsers(request: Request,response: Response): Promise<Response>{
    try{
      const listUser  = new ListUser();
      const users = await listUser.getListUserAll();
      return response.status(200).json(users);
    }catch(err){
      return response.status(400).json({erro: err.message});
    }
  }
}