import { Injectable } from '@nestjs/common';
import { parse, isValid } from 'date-fns';

@Injectable()
export class UtilsService {
  static isValidDate(dateString: string): boolean {
    const parsedDate = parse(dateString, 'yyyy-MM-dd HH:mm', new Date());
    return isValid(parsedDate) ? true : false;
  }
  static convertDateString(dateString: string): Date {
    const parsedDate = parse(dateString, 'yyyy-MM-dd HH:mm', new Date());
    return isValid(parsedDate) ? parsedDate : undefined;
  }
}
