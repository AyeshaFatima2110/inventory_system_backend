import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.raw(
    `
    create table roles(
      uuid uuid not null default uuid_generate_v4(),
      role_id serial not null,
      role_name varchar(100),
      created_at timestamptz not null default now(),
      updated_at timestamptz not null default now(),
      deleted_at timestamptz null,
      constraint role_pk primary key(role_id)
      );
    `
  )
}


export async function down(knex: Knex): Promise<void> {
}

