import { Injectable } from '@nestjs/common';

@Injectable()
export class UtilsService {
  public getDateString(): string {
    return new Date().toISOString();
  }
}
