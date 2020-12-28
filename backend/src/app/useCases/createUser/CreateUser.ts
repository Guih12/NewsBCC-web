import {getRepository, Repository} from 'typeorm';
import {hash} from 'bcryptjs';
import User from '../../models/User';
import IcreateUserDTO from './IcreateUserDTO';



export default class CreateUser{
  
  public async insertUser({name, user_login, password}: IcreateUserDTO): Promise<User>{
    const userRepository =  await getRepository(User);
    
    const userLoginExist = await userRepository.findOne({
      where: {user_login}
    });

    if(userLoginExist) throw new Error('userLogin already used');

    const passwordHash = await hash(password, 8);
   
    const userCreate = await userRepository.create({
      name,
      user_login,
      password: passwordHash
    });
    await userRepository.save(userCreate);

    return userCreate;
  }
}