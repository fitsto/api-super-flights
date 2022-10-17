import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
    return {
        URI_MONGODB: process.env.URI_MONGODB,
        JWT_SECRET: process.env.JWT_SECRET,
        EXPIRES_IN: process.env.EXPIRES_IN,
        APP_URL: process.env.APP_URL,
        PORT: parseInt(process.env.PORT)
    };
});