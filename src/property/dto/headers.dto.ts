import { Expose } from "class-transformer";
import { IsString } from "class-validator";

export class HeadersDto{
    
    @IsString()
    // pode mapear keys, neste caso access-token para propiedade accesToken
    @Expose({name: "access-token"})
    accessToken: string;

}