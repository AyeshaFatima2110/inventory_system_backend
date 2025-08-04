import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {

  return knex.schema.raw(
    `Create table products(
       uuid uuid not null default uuid_generate_v4(),
       product_id serial not null,
       name text not null,
       sku varchar(100) not null,
       quantity_in_stock int not null,
       price  NUMERIC(10, 2),
       created_at timestamptz not null default now(),
       updated_at timestamptz not null default now(),
       deleted_at timestamptz null,
       constraint product_pk  primary key(product_id)
    );`

  );
}


export async function down(knex: Knex): Promise<void> {
}

