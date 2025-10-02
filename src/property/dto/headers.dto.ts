import { Expose } from "class-transformer";
import { isNotEmpty, IsNotEmpty, IsString } from "class-validator";

export class HeadersDto{
    
    @IsString()
    /*
        @Expose torna possivel mapear keys customizadas no header
            neste caso access-token para propiedade accesToken
    */
    @Expose({name: "access-token"})
    accessToken: string;

}