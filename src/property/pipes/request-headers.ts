import { BadRequestException, createParamDecorator, ExecutionContext } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validateOrReject } from 'class-validator';

// any para usar com diferentes dtos por isso any
export const RequestHeader = createParamDecorator(
  async (targetDto: any, ctx: ExecutionContext) => {
    const headers = ctx.switchToHttp().getRequest().headers;
    const dto = plainToInstance(targetDto, headers, {
      excludeExtraneousValues: true,
    });

    try {
      await validateOrReject(dto);
    } catch (error) {
        throw new BadRequestException(error); 
    }
    return dto;
  },
);
