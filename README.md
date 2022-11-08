# Employee Management App

Employee Management App is a web application for managing Nutcache employees' data.

## 1) Installation

You will need to have [node](https://nodejs.org/en/download/), [.NET](https://dotnet.microsoft.com/en-us/download/dotnet/5.0), and [Docker](https://docs.docker.com/get-docker) installed.

<br />

## 2) Running the application

The `docker-compose.yml` file is configurated with a MySQL 8 image, and initial scripts will run to ensure database and tables are created.

<br />

### MySQL Database

To run the MySQL database, navigate to the "./api/" folder and run the following command:

```bash
docker-compose up
```

<br />

### Back-end API

Navigate to the "api/src/Employee.API" folder and run the following command

```bash
dotnet run
```

<br />

### Front-end

Navigate to the "app" folder and run the following command

```bash
npm run start
```

From now, everything must be working properly and the application is ready to use.

<br />

## 3) Testing

To run the unit tests, navigate to the "api" folder and run the following command

```bash
dotnet test
```
