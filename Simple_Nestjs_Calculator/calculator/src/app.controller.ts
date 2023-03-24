import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
@Controller()
export class AppController {
  @Post()
  getUsers(@Req() req: Request) {
    return req.body.number1;
  }
}
