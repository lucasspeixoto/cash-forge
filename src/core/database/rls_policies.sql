-- ============================================================
-- ACCOUNTS
-- ============================================================

CREATE POLICY "allow select accounts"
  ON accounts FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "allow insert accounts"
  ON accounts FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "allow update accounts"
  ON accounts FOR UPDATE
  TO authenticated
  USING (true);

CREATE POLICY "allow delete accounts"
  ON accounts FOR DELETE
  TO authenticated
  USING (true);


-- ============================================================
-- CATEGORIES
-- ============================================================

CREATE POLICY "allow select categories"
  ON categories FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "allow insert categories"
  ON categories FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "allow update categories"
  ON categories FOR UPDATE
  TO authenticated
  USING (true);

CREATE POLICY "allow delete categories"
  ON categories FOR DELETE
  TO authenticated
  USING (true);


-- ============================================================
-- TRANSACTIONS
-- ============================================================

CREATE POLICY "allow select transactions"
  ON transactions FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "allow insert transactions"
  ON transactions FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "allow update transactions"
  ON transactions FOR UPDATE
  TO authenticated
  USING (true);

CREATE POLICY "allow delete transactions"
  ON transactions FOR DELETE
  TO authenticated
  USING (true);