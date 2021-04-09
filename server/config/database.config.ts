export interface DatabaseConfig {
  username: string;
  password: string;
  database: string;
  host: string;
  port: number;
  dialect: string;
  timezone: string;
}

export interface ProductionDbConfig {
  username: string;
  password: null;
  database: string;
  host: string;
  dialect: string;
  use_env_variable: string;
}

export const productionConfig: ProductionDbConfig = {
  username: "root",
  password: null,
  database:
    "postgres://hdojgllysojlff:b95812dc8d1159b0c0243a1bfe8298ff49b07976fe81ee8165766d6b9f52a70c@ec2-54-167-168-52.compute-1.amazonaws.com:5432/d1eqsee9ljmf24",
  host: "127.0.0.1",
  dialect: "postgres",
  use_env_variable: "DATABASE_URL",
};

export const databaseConfig: DatabaseConfig = {
  username: "eli",
  password: "",
  database: "elifullstack",
  host: "127.0.0.1",
  port: 5432,
  dialect: "postgres",
  timezone: "+00:00",
};
