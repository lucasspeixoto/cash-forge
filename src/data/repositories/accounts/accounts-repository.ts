import type { Account } from '@/src/domain/models/accounts/account.model';
import { accountsService } from '../../services/accounts/accounts-service';

class AccountsRepository {
  async getAll() {
    return await accountsService.getAll();
  }

  async getById(id: string) {
    return await accountsService.getById(id);
  }
}

export const accountsRepository = new AccountsRepository();
