import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {

  return knex.schema.raw(
    `ALTER TABLE users ADD CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES roles(role_id)
      ON DELETE SET NULL;`
  )
}


export async function down(knex: Knex): Promise<void> {
}

