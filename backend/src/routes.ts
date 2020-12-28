import { Router} from 'express';
import UserController from './app/controllers/UserController';

const userController = new UserController();

const route = Router();

route.get('/', (request, response) =>{
  return response.json({message: 'Seja vem'})
})

route.post('/users', userController.store);

export default route;