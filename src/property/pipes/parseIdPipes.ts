import { ArgumentMetadata, BadGatewayException, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";

//custom validation pipe

@Injectable() // to be able to use outside this module
export class ParseIdPipe implements PipeTransform<string, number>{
    transform(value: string, metadata: ArgumentMetadata): number {
        const val = parseInt(value,10);
        
        //validation rule
        if(isNaN(val)) throw new BadRequestException("id must be a number pow");
        if(val <= 0) throw new BadGatewayException("id must be positive");

        return val;
    }       
}