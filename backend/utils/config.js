import 'dotenv/config'

const config = {
    PORT: process.env.PORT || 3001,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_HOST: process.env.DB_HOST || 5432,
    DB_NAME: process.env.DB_NAME
};

export default config;