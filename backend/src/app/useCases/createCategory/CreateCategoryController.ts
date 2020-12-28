import {Request, Response} from 'express';
import CreateCategory from './CreateCategory';

export default class CreateCategoryController{

  public async store(request: Request, response: Response): Promise<Response>{
    try{
      const {description} = request.body;
      const createCategory =  new CreateCategory();
      const category = createCategory.insertCategory({description});

      return response.status(201).json(category);

    }catch(err){
      return response.status(400).json({error: err.message});
    }
  }

  
}