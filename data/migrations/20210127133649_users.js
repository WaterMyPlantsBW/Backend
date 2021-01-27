
exports.up =async function(knex) {
  await knex.schema.createTable("users", (tbl) => {
      tbl.increments()
      tbl.string("username", 128).notNull().unique()
      tbl.string("password", 18).notNull()
      tbl.string("phoneNumber", 11).notNull().unique()
  })
};

exports.down =async function(knex) {
  await knex.schema.dropTableIfExists("users")
};
