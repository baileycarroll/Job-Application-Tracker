# Job Application Tracker (JAT)

This is a small application I've developed in NextJS to track all of the job applications that I have submitted with their relevant details. This was more of a small tool for me to be able to track who, what, when, where, and how I applied to which positions, as well as what resume's and cover letters were used in that process.

## Running the Application

**Note:** You will need docker installed in order to use this application.

1. Copy `.env.example` to `.env` and put the desired values for the postgres database.
2. Run `npm install` to install all necessary dependencies.
3. Run `npx prisma generate` to generate the prisma client.
4. Run `npx prisma migrate dev` to run the necessary migrations (without seeding).
5. Run `docker compose -f ./docker/compose.yml up -d` to start the docker container.
6. Run `npm run dev` to start the application. You can access it via [http://localhost:3000](http://localhost:3000)
