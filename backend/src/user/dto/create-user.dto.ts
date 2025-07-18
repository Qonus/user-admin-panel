import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @MinLength(3, { message: 'Username must have atleast 3 characters.' })
    @IsString()
    username: string;
    
    @IsNotEmpty()
    @IsEmail()
    email: string;
}
