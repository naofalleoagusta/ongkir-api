import { Module } from '@nestjs/common';
import { SubdistrictsService } from "./subdistricsts.service";
import { SubdistrictsController } from "./subdistricts.controller";
import { Subdistrict, SubdistrictSchema } from './subdistricts.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Subdistrict.name,
        schema: SubdistrictSchema,
      },
    ]),
  ],
  controllers: [SubdistrictsController],
  providers: [SubdistrictsService],
})
export class SubdistrictsModule {}
