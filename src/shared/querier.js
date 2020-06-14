module.exports = {
  createString: 'INSERT INTO market.store (id, name) VALUES (?, ?)',
  showString: 'SELECT * FROM market.store',
  updateString: 'UPDATE market.store SET name=? WHERE id=? ALLOW FILTERING',
  destroyString: 'DELETE FROM market.store WHERE id=? ALLOW FILTERING',
}
