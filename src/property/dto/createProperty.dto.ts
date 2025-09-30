import { IsInt, IsNumber, IsPositive, IsString, Length, MaxLength } from "class-validator"

export class CreatePropertyDto{
    @IsString()
    @Length(2, 8)
    //@Length(2, 8, {"custom message"})
    name:string
  
    @IsString()
    @Length(2, 8, {groups:['create']})
    @Length(1, 8, {groups:['update']})
    @MaxLength(12)
    //@MaxLength(8, {"custom message"})
    description:string

    @IsInt()
    @IsPositive()
    area:number
}