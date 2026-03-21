export type CategoryType = 'income' | 'expense';

export interface Category {
  id: string;
  name: string;
  type: CategoryType;
  icon?: string | null;
  color?: string | null;
  is_default: boolean;
  created_at: string;
}
