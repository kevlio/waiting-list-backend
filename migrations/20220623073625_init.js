/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema.createTable("help_requests", (table) => {
    table.increments("id");
    table.string("name").notNullable();
    table.string("room").notNullable();
    table.boolean("done").defaultTo(false);
    table.timestamps(true, true);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("help_requests");
};
