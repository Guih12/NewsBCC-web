import {Request, Response} from 'express';
import CreateUser from '../useCases/createUser/CreateUser';

export default class UserController{

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
}