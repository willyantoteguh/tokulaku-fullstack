import { join } from "path";
import { ConnectionOptions } from "typeorm";
import { User } from "./auth/entity/user.entity";

const config = {
    host: "localhost",
    user: "postgres",
    password: "newbudaksql",
    database: "postgres",
};

const connectionOptions: ConnectionOptions = {
    type: "postgres",
    host: "ec2-34-233-114-40.compute-1.amazonaws.com",
    port: 5432,
    url: "postgres://zputfhlukuvbkm:c73dad7eb14e3d89d4b303c6dde3ce5c3553ffbcbc857f4d8ac51983d01e97bd@ec2-34-233-114-40.compute-1.amazonaws.com:5432/d2h1q4vm4m1pbf",
    // username: config.user,
    // password: config.password,
    // database: config.database || "postgres",
    username: "zputfhlukuvbkm",
    password: "c73dad7eb14e3d89d4b303c6dde3ce5c3553ffbcbc857f4d8ac51983d01e97bd",
    database: "d2h1q4vm4m1pbf",
    entities: [User],
    extra: {
        ssl: {
            rejectUnauthorized: false
        }
    },
    synchronize: true,
    dropSchema: false,
    migrationsRun: true,
    logging: false,
    logger: "debug",
    migrations: [join(__dirname, "src/migration/**/*.ts")],
};

export = connectionOptions;