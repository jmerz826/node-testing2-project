exports.up = function(knex) {
    return knex.schema.createTable('bands', table => {
        table.increments('band_id')
        table.string('band_name').unique().notNullable()
        table.string('genre')
        table.integer('number_of_albums')
        table.boolean('good_band').defaultTo(true)
  })
}


exports.down = function(knex) {
  return knex.schema.dropTableIfExists('bands')
}
