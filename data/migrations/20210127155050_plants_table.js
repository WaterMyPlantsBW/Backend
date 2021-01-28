
exports.up =async function(knex) {
  await knex.schema.createTable("plants", (tbl) => {
      tbl.increments("id")
      tbl.string("nickname", 128).notNull().unique()
      tbl.integer("user_id").unsigned()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete('CASCADE')
      tbl.string("image", 325).defaultTo(null)
      tbl.string("species", 128).defaultTo("Unknown")
      tbl.date("water").notNull()
      tbl.string("H2OFrequency").notNull()
  })
};

exports.down =async function(knex) {
  await knex.schema.dropTableIfExists("plants")
};
