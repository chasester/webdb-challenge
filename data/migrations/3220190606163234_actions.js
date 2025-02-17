exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', function(tbl)
    {
        tbl.increments("id");
        tbl.integer("project_id").notNullable().references('id').inTable('projects').onDelete('CASCADE');
        tbl.string('description', 1023).notNullable();
        tbl.string('notes', 2047);
        tbl.integer("completed").notNullable();
        tbl.timestamp('createdAt').defaultTo(knex.fn.now());
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions');
  };
  