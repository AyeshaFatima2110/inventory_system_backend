import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.raw(
           `CREATE TABLE purchase_orders(
                uuid uuid not null default uuid_generate_v4(),
                purchase_order_id serial not null,
                supplier_id int not null,
                ordered_by int not null,
                order_date date not null,
                created_at  timestamptz  not null default now(),
                updated_at  timestamptz  not null default now(),
                deleted_at  timestamptz null,
                constraint purchase_order_pk primary key(purchase_order_id),
                constraint fk_supplier foreign key (supplier_id) references suppliers(supplier_id) on delete set null,
                constraint fk_user foreign key (ordered_by) references users(user_id) on delete set null
        );`
    )
}


export async function down(knex: Knex): Promise<void> {
}

