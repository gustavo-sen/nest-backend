import { IsInt, IsPositive, isPositive } from "class-validator";

export class IdParamDto{
    @IsInt()
    @IsPositive()
    id:number;
}