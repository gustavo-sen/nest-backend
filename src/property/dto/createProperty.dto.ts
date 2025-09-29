import { IsNumber, IsPositive, IsString, Length, MaxLength } from "class-validator"

export class CreatePropertyDto{
    @IsString()
    @Length(2, 8)
    @Length(2, 8, {groups:['create']})
    @Length(2, 8, {groups:['update']})
    //@Length(2, 8, {"custom message"})
    name:string
    @IsString()
    @MaxLength(12)
    //@MaxLength(8, {"custom message"})
    description:string

    @IsNumber()
    @IsPositive()
    area:number
}