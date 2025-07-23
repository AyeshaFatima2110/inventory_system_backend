import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.raw(
    `
    create table users(
    user_id serial not null,
    uuid uuid  not null default uuid_generate_v4(),
    first_name text not null,
    last_name text not null,
    username varchar(50) not null,
    email varchar(100) not null,
    role_id int not null,
    password varchar(100) not null,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now(),
    deleted_at timestamptz null,
    constraint user_pk  primary key(user_id)
    ); `
  );
}


export async function down(knex: Knex): Promise<void> {
}

