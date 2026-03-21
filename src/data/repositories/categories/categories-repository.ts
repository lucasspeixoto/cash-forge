import type { Category } from '@/src/domain/models/categories/category.model';
import { categoriesService } from '../../services/categories/categories-service';

class CategoriesRepository {
  async getAll() {
    return await categoriesService.getAll();
  }

  async getById(id: string) {
    return await categoriesService.getById(id);
  }
}

export const categoriesRepository = new CategoriesRepository();
