import { Router} from 'express';

import UserController from './app/useCases/keepUser/UserController';
import CategoryController from './app/useCases/keepCategory/CategoryController';

const userController = new UserController();
const categoryController = new CategoryController();


const route = Router();

route.get('/', (request, response) =>{
  return response.json({message: 'Seja vem'})
})

//routes the users
route.get('/users', userController.showUsers);
route.post('/users', userController.store)

//routes the category
route.post('/category', categoryController.store)


export default route;