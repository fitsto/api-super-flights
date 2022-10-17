import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { UserDTO } from './dto/user.dto';
import { UserService } from './user.service';

@ApiTags('users')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('api/vi/user')
export class UserController {

    constructor(private readonly userService:UserService) {}

    @Post()
    @ApiOperation({summary: 'Create User'})
    create(@Body() userDTO: UserDTO){
        return this.userService.create(userDTO);
    }

    @Get()
    findAll(){
        return this.userService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: string){
        return this.userService.findById(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() userDTO: UserDTO){
        return this.userService.update(id, userDTO);
    }

    @Delete(':id')
    delete(@Param('id') id: string){
        return this.userService.delete(id);
    }
}
