import { Transform } from 'class-transformer';
import { MinLength, IsOptional, IsDate, IsEnum, IsJSON } from 'class-validator';
import { HttpMethods } from 'src/enum/http-methods';
import { UtilsService } from 'src/services/utils/utils.service';
export default class ScheduelDto {
  @MinLength(3)
  url: string = null;

  @IsEnum(HttpMethods)
  method: string = null;

  @IsOptional()
  @IsJSON()
  headers: string = null;

  @IsOptional()
  @IsJSON()
  body: string = null;

  @IsDate()
  @Transform(({ value }) => UtilsService.convertDateString(value))
  executionDatetime: Date = null;
}
