
exports.seed = function(knex) {
  return knex('bands').truncate()
    .then(function () {
      return knex('bands').insert([
        {band_name: 'Led Zeppelin', genre: 'Rock', number_of_albums: 8},
        {band_name: 'Black Sabbath', number_of_albums: 19},
        { band_name: 'Tool', genre: 'Progressive Metal', number_of_albums: 6, good_band: true },
        {band_name: 'Foo Fighters', good_band: false},
        {band_name: 'Red Hot Chili Peppers', genre: 'Alternative'},
        {band_name: 'Devin Townsend Project', number_of_albums: 8},
        {band_name: 'Fleetwood Mac', good_band: false},
      ])
    })
}
