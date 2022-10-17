import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PassengerModule } from './passenger/passenger.module';
import { FlightModule } from './flight/flight.module';
import { AuthModule } from './auth/auth.module';
import * as Joi from 'joi';

import config from './config'

@Module({
  imports: [ConfigModule.forRoot(
    {
      envFilePath: ['.env.development'],
      load: [config],
      isGlobal: true,
      validationSchema: Joi.object({
        URI_MONGODB: Joi.string().required(),
        JWT_SECRET: Joi.string().required(),
        EXPIRES_IN: Joi.string().required(),
        APP_URL: Joi.string().required(),
        PORT: Joi.number().required()
      })
    }),
    MongooseModule.forRoot(process.env.URI_MONGODB),
    UserModule,
    PassengerModule,
    FlightModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
