import { Router} from 'express';


const route = Router();

route.get('/', (request, response) =>{
  return response.json({message: 'Seja vem'})
})


export default route;