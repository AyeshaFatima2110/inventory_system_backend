📦 Inventory Management API – NestJS + PostgreSQL
A backend API built with NestJS and PostgreSQL for managing products, suppliers, purchase orders, and sales in a small-to-medium inventory system. Designed with a modular architecture, clean code practices, and production-ready standards.

🧰 Tech Stack
Framework: NestJS (TypeScript)

Database: PostgreSQL

ORM: KnexJs, ObjectionJs

Authentication: JWT + Role-based access control

Documentation: Swagger (@nestjs/swagger)

Validation: DTO + Pipes

📚 Features
✅ User registration & login (JWT)

✅ Role-based permissions (Admin, Manager, Viewer)

✅ CRUD for Products & Suppliers

✅ Manage stock via Purchase & Sales

✅ Track available inventory

✅ Swagger API documentation

✅ Clean modular structure for scalability

📌 Endpoints Overview

🔐 Auth
POST /authentication/register
POST /authentication/login

📦 Products
GET /products
POST /products
PATCH /products/:productUUID
DELETE /products/:productUUID
GET /product/:productUUID

🧾 Purchase Orders
POST /purchases
GET /purchases

🛒 Sales
POST /sales
GET /sales

🗂️ Entity-Relationship Diagram (ERD)
┌────────────┐        ┌──────────────────┐
│   Users    │        │     Products     │
├────────────┤        ├──────────────────┤
│ id         │◄────┐  │ id               │
│ name       │     └──│ name             │
│ email      │        │ sku              │
│ password   │        │ quantity_in_stock│
│ role       │        │ price            │
└────────────┘        │ created_at       │
                      └──────────────────┘
                             ▲     ▲
                             │     │
             ┌───────────────┘     └──────────────┐
             │                                    │
     ┌──────────────┐                      ┌─────────────┐
     │ PurchaseItems│                      │ SalesItems  │
     ├──────────────┤                      ├─────────────┤
     │ id           │                      │ id          │
     │ purchase_id  │◄────┐          ┌────▶│ sale_id     │
     │ product_id   │─────┘          └─────│ product_id  │
     │ quantity     │                      │ quantity    │
     └──────────────┘                      └─────────────┘
             ▲                                    ▲
             │                                    │
┌─────────────────────┐           ┌─────────────────────┐
│   PurchaseOrders    │           │        Sales        │
├─────────────────────┤           ├─────────────────────┤
│ id                  │           │ id                  │
│ supplier_id         │           │ customer_name       │
│ ordered_by (user_id)│           │ sold_by (user_id)   │
│ order_date          │           │ sale_date           │
└─────────────────────┘           └─────────────────────┘
         ▲
         │
┌─────────────────────┐
│     Suppliers        │
├─────────────────────┤
│ id                  │
│ name                │
│ contact_info        │
└─────────────────────┘


## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
