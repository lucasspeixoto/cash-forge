-- ============================================================
-- ENUMS
-- ============================================================

CREATE TYPE account_type AS ENUM ('checking', 'savings', 'cash', 'investment', 'credit_card');
CREATE TYPE transaction_type AS ENUM ('income', 'expense', 'transfer');
CREATE TYPE category_type AS ENUM ('income', 'expense');


-- ============================================================
-- ACCOUNTS (Contas / Carteiras)
-- ============================================================

CREATE TABLE accounts (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name        TEXT NOT NULL,
  type        account_type NOT NULL DEFAULT 'checking',
  balance     NUMERIC(12, 2) NOT NULL DEFAULT 0,
  color       TEXT,
  icon        TEXT,
  is_active   BOOLEAN NOT NULL DEFAULT TRUE,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);


-- ============================================================
-- CATEGORIES (Categorias)
-- ============================================================

CREATE TABLE categories (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name        TEXT NOT NULL,
  type        category_type NOT NULL,
  icon        TEXT,
  color       TEXT,
  is_default  BOOLEAN NOT NULL DEFAULT FALSE,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);


-- ============================================================
-- TRANSACTIONS (Transações)
-- ============================================================

CREATE TABLE transactions (
  id           UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  account_id   UUID NOT NULL REFERENCES accounts(id) ON DELETE RESTRICT,
  category_id  UUID REFERENCES categories(id) ON DELETE SET NULL,
  type         transaction_type NOT NULL,
  amount       NUMERIC(12, 2) NOT NULL CHECK (amount > 0),
  description  TEXT,
  date         DATE NOT NULL,
  is_paid      BOOLEAN NOT NULL DEFAULT TRUE,
  notes        TEXT,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_transactions_date        ON transactions(date);
CREATE INDEX idx_transactions_account_id  ON transactions(account_id);
CREATE INDEX idx_transactions_category_id ON transactions(category_id);


-- ============================================================
-- CATEGORIAS PADRÃO DO SISTEMA
-- ============================================================