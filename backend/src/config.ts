import { Sequelize } from "sequelize";

const sequelize = new Sequelize("snake_db", "postgres", "pass", {
  host: "localhost",
  dialect: "postgres",
});

export default sequelize;
