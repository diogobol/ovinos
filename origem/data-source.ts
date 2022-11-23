import "reflect-metadata"
import { DataSource } from "typeorm";
import { Animal } from "./entity/animal"
import { Peso } from "./entity/peso";
const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "canario",
    database: "ovino",
    synchronize: true,
    logging: true,
    entities: [Animal, Peso],
    subscribers: [],
    migrations: [],

})

export default AppDataSource;

