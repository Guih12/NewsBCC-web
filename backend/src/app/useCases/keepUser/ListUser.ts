import {getRepository} from 'typeorm';
import User from '../../models/User';

export default class ListUser{

  public async getListUserAll(): Promise<User[]>{
    const userRepository = await getRepository(User);

    const users = await userRepository.find();
    if(!users) throw new Error('There are no registered users');

    return users;
  }
}