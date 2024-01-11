# Fullstack E-Commerce Project

**Key Features**

- **Shadcn UI for Admin**: The project uses Shadcn UI for the admin dashboard.

- **Multi-purpose Admin Dashboard**: The admin dashboard serves as a Content Management System (CMS), admin interface, and API manager.

- **Multiple Vendor/Store Management**: You can control multiple vendors or stores through a single CMS. For example, you can manage a "Shoe store," a "Laptop store," and a "Suit store" simultaneously, and the CMS generates individual API routes for each.

- **Category Management**: You can create, update, and delete product categories.

- **Product Management**: You can create, update, and delete products.

- **Image Management**: You can upload multiple images for products and change them whenever needed.

- **Filter Creation**: You can create, update, and delete filters such as "Color" and "Size" and associate them with products during creation.

- **Billboard Management**: You can create, update, and delete "Billboards" (promotional banners or texts) that can be attached to a single category or used standalone. The admin generates APIs for all these cases.

- **Search and Pagination**: You can search through all categories, products, sizes, colors, and billboards with included pagination.

- **Featured Products**: You can control which products are "featured" to display them on the homepage.

- **Order and Sales Tracking**: You can view your orders, sales, and other relevant data.

- **Revenue Graphs**: The dashboard provides graphical representations of your revenue and other metrics.

- **Authentication**: Utilizes Clerk Authentication for user management.

- **Order Creation**: Allows for order creation functionality.

- **Payment Integration**: Integrates with Stripe for checkout and handles Stripe webhooks.

- **Database Technologies**: Utilizes MySQL, Prisma, and PlanetScale for efficient data management.

**Technologies Used**

- Next.js: A React framework for building server-rendered applications.

- Clerk: Next.js authentication library.

- Prisma: A database toolkit and Object-Relational Mapping (ORM) for database management.

- Stripe: Payment processing and checkout integration.

- Tailwind CSS: A utility-first CSS framework.

- React: A JavaScript library for building user interfaces.

- Various other libraries and packages for UI components, state management, and data handling.

**Installation and Usage**

To set up and run the project, follow the installation instructions and scripts provided in the `package.json` file.

**Project Structure**

- The project is organized using Next.js, with components, pages, and API routes.

- Prisma is used for database modeling and management.

- Stripe integration is present for handling payments and webhooks.

- Authentication is managed using Clerk.

- The UI is designed using Tailwind CSS.

Feel free to explore the project's codebase to understand how these technologies are implemented to create a comprehensive e-commerce solution.


### Prerequisites

**Node version 14.x**

### Cloning the repository

```shell
git clone https://github.com/AntonioErdeljac/next13-ecommerce-admin.git
```

### Install packages

```shell
npm i
```

### Setup .env file


```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# This was inserted by `prisma init`:
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL=''
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=""
STRIPE_API_KEY=
FRONTEND_STORE_URL=http://localhost:3001
STRIPE_WEBHOOK_SECRET=
```

### Connect to PlanetScale and Push Prisma
```shell
npx prisma generate
npx prisma db push
```


### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |
