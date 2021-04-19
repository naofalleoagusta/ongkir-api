import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProvincesController } from './provinces.controller';
import { Province, ProvinceSchema } from './provinces.schema';
import { ProvincesService } from './provinces.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Province.name, schema: ProvinceSchema },
    ]),
  ],
  controllers: [ProvincesController],
  providers: [ProvincesService],
})
export class ProvincesModule {}
