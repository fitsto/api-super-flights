import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';

import { Strategy, ExtractJwt } from 'passport-jwt';

import config from '../../config'


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){

    constructor(@Inject(config.KEY) private configService: ConfigType<typeof config>){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.JWT_SECRET
        })
    }

    async validate(payload:any){
        return {
            userId: payload.sub,
            username: payload.username
        };
    }
}
