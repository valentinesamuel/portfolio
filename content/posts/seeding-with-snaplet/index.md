+++
title = 'Effortless Database Seeding with Snaplet'
date = 2024-06-18
draft = false
categories = [
    "database",
    "snaplet",
    "relational-database",
    "javascript",
    "nodejs",
    "typescript"
]
keywords = [
    'Valentine Samuel',
    'Database',
    'Snaplet',
    'Relational Database',
    'Javascript'
  ]
+++

In this article, we are going to learn how to seed a relational database with Snaplet. We will be using a simple database for a blog application to demonstrate how to seed a database with Snaplet.

![Screenshot of the post](thumb-nail.jpg)

### Introduction

In software development, having a realistic dataset is crucial for both development and testing. This process, known as database seeding, involves populating a database with an initial set of data. Traditional methods of database seeding can be cumbersome and risky, especially when dealing with sensitive information. This is where Snaplet comes in. Snaplet simplifies the process of creating and managing realistic, anonymized database snapshots, making it an excellent tool for database seeding.

### What is Snaplet?

Snaplet is a powerful tool that allows developers to create and manage snapshots of their databases. These snapshots can be used to seed development and testing environments with realistic data. Snaplet not only simplifies the process of creating these snapshots but also ensures that sensitive data is anonymized, protecting user privacy.

**Key Features:**

- Easy snapshot creation and management.
- Data anonymization for privacy compliance.
- Seamless integration with CI/CD pipelines.
- Support for various databases.

### Setting Up Snaplet

Before you start using Snaplet, ensure you have the following prerequisites:

- A working database (e.g., PostgreSQL).
- Snaplet CLI installed on your machine.

**Installation and Configuration:**

1. Install Snaplet CLI:

   ```bash
   $ npm install -g @snaplet/cli
   ```

2. Authenticate and configure Snaplet with your database:

   > **_NOTE:_**  Make sure you are in your project directory before running the following commands.

   ```bash
   $ snaplet login
   $ snaplet init
   ```

### Blog Database Seed

It is time to seed the database. This postgres database is for a blog application so the entities are user, post and comments.

1. Apply the schema to the database
2. Create a `seed.config.ts` file(preferably in your project’s root directory) and pate the below code snippet. This snippet would specifies the adapter which is a way of letting snaplet’s seed know the type of database that you are using

   ```tsx
   import { SeedPostgres } from "@snaplet/seed/adapter-postgres";
   import { defineConfig } from "@snaplet/seed/config";
   import postgres from "postgres";

   export default defineConfig({
     adapter: () => {
       const client = postgres(process.env.DATABASE_URL);
       return new SeedPostgres(client);
     },
   });
   ```

3. Generate your seed client

   This step involves using the database schema to generate the necessary files for the seed client. Run the following code in your terminal

   ```bash
   $ npx @snaplet/seed sync
   ```

4. Create and execute the seed script

   Create a `seed.ts` file in your project’s root directory and add the following code. Note that every time you run the script, it wipes the database and seeds it with fresh data. If you don’t want this behavior, you can comment out the second line

   ```tsx
   import { createSeedClient } from "@snaplet/seed";

   const seed = await createSeedClient();

   // Truncate all tables in the database
   await seed.$resetDatabase();

   // Seed the database with 10 users
   await seed.users((x) => x(10));

   process.exit();
   ```

5. Run the seed script

   Run the below command in your command line and this would seed your database with 10 users as specified in the code above.

   ```bash
   $ npx tsx seed.ts
   ```

### Conclusion

Using Snaplet for database seeding provides a reliable, efficient, and secure way to manage development and testing datasets. By automating and anonymizing the process, Snaplet helps maintain data integrity and privacy. Try [Snaplet](https://www.snaplet.dev/) today to streamline your database seeding process.
