import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CalcModule } from './calc/calc.module';

@Module({
  imports: [CalcModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
