import { Router} from 'express';

import CreateUserControler from './app/useCases/createUser/CreateUserController';

const createUserControler = new CreateUserControler();

const route = Router();

route.get('/', (request, response) =>{
  return response.json({message: 'Seja vem'})
})

route.post('/users', createUserControler.store)


export default route;