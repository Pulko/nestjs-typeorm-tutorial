import { Injectable } from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  async registerUser(data: RegisterUserDto): Promise<User> {
    const user = new User();
    user.name = data.name;
    user.email = data.email;
    user.password = data.password;

    return await this.userRepository.save(user);
  }
}
