import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  UseGuards,
  Req,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiResponseProperty,
  ApiTags,
} from '@nestjs/swagger';
import { UsersService } from './users.service';
import { UserEntity } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  @ApiCreatedResponse({ type: UserEntity })
  async created(@Body() createUser: CreateUserDto) {
    return new UserEntity(await this.usersService.create(createUser));
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: UserEntity })
  async findOne(@Req() req) {
    const { id } = req.user;
    return new UserEntity(await this.usersService.findOne(id));
  }

  @Patch()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: UserEntity })
  async update(@Req() req, @Body() updateUserDto: UpdateUserDto) {
    const { id } = req.user;
    return new UserEntity(await this.usersService.update(id, updateUserDto));
  }
}
