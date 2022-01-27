// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

const shared = {
  client: 'sqlite3',
  useNullAsDefault: true,
  migrations: { directory: './data/migrations' },
  seeds: {directory: './data/seeds'}
}

module.exports = {

  development: {
    ...shared,
    connection: {
      filename: './data/data.db3'
    }
  },

  testing: {
    ...shared,
    connection: {
      filename: './data/test.db3'
    }
  }

}
