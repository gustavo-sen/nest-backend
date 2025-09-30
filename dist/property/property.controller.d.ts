import { CreatePropertyDto } from './dto/createProperty.dto';
export declare class PropertyController {
    findAll(): string;
    findOne(id: any, sort: any): any;
    getObjectPassed(objeto: any): any;
    findById(id: string, slug: string): string;
    create(name: string): string;
    createDto(body: CreatePropertyDto): CreatePropertyDto;
    update(body: CreatePropertyDto): CreatePropertyDto;
}
