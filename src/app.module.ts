import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MulterModule } from '@nestjs/platform-express';

import { AppService } from './app.service';
import { AppController } from './app.controller';
import { MedicineModule } from './medicine/medicine.module';

@Module({
  imports: [
    MedicineModule,
    TypeOrmModule.forFeature([]),
    MulterModule.register({
      dest: './files',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
