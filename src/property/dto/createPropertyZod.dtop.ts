import {z} from "zod";

export class CreatePropertySchema = z.object({
    name:z.string(),
    
})