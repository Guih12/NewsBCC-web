import {getRepository} from 'typeorm';
import Category from '../../models/Category';
import IcreateCategoryRequestDTO from './IcreateCategoryResquestDTO';

export default class CreateCategory{
  
  public async insertCategory({description}: IcreateCategoryRequestDTO): Promise<Category>{
    
    const categoryRepository = await getRepository(Category);

    const categoryExist = await categoryRepository.findOne({
      where: {description}
    })

    if(categoryExist) throw new Error('Category already registered');

    const category = categoryRepository.create({description});
    await categoryRepository.save(category);
    
    return category;
  }
}