import type { Transaction } from '@/src/domain/models/transactions/transaction.model';
import type { Category } from '@/src/domain/models/categories/category.model';
import { supabase } from '@/src/utils/supabase';

export type TransactionWithCategory = Transaction & { categories: Category | null };

class TransactionsService {
  async getAll(): Promise<{ data: Transaction[] | null; error: any }> {
    return await supabase.from('transactions').select('*').order('date', { ascending: false });
  }

  async getRecent(limit: number): Promise<{ data: TransactionWithCategory[] | null; error: any }> {
    return await supabase
      .from('transactions')
      .select('*, categories(*)')
      .order('date', { ascending: false })
      .limit(limit);
  }

  async getByDateRange(startDate: string, endDate: string): Promise<{ data: TransactionWithCategory[] | null; error: any }> {
    return await supabase
      .from('transactions')
      .select('*, categories(*)')
      .gte('date', startDate)
      .lte('date', endDate)
      .order('date', { ascending: false });
  }
}

export const transactionsService = new TransactionsService();
