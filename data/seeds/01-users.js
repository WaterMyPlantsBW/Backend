
exports.seed =async function(knex) {
  await knex("users").truncate()
  await knex("users").insert([
    {username: "lambda", password: "school", phoneNumber: "1234567890"}
  ])
};
