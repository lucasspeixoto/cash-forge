import type { Category } from '@/src/domain/models/categories/category.model';
import { supabase } from '@/src/utils/supabase';

class CategoriesService {
  async getAll(): Promise<{ data: Category[] | null; error: any }> {
    return await supabase.from('categories').select('*');
  }

  async getById(id: string): Promise<{ data: Category | null; error: any }> {
    return await supabase.from('categories').select('*').eq('id', id).single();
  }
}

export const categoriesService = new CategoriesService();
