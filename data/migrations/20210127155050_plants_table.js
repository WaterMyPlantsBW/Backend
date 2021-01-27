
exports.up =async function(knex) {
  await knex.schema.createTable("plants", (tbl) => {
      tbl.increments()
      tbl.string("nickname", 128).notNull().unique()
      tbl.integer("user_id").notNull().unsigned()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete('CASCADE')
      tbl.string("image_url", 225)
  })
};

exports.down =async function(knex) {
  await knex.schema.dropTableIfExists("plants")
};
