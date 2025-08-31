import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.raw(
    `create table suppliers(
      uuid uuid not null default uuid_generate_v4(),
      supplier_id serial not null,
      name text not null,
      phone_number varchar(100),
      email varchar(100),
      created_at timestamptz not null default now(),
      updated_at timestamptz not null default now(),
      deleted_at timestamptz null,
      constraint supplier_pk  primary key(supplier_id)
      );`
  );
}


export async function down(knex: Knex): Promise<void> {
}

