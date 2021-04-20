import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as mongoose_schema } from 'mongoose';
import { City } from 'src/cities/cities.schema';

export type ProvinceDocument = Province & Document;

@Schema()
export class Province {
  @Prop()
  province_id: string;

  @Prop()
  province_name: string;
}

export const ProvinceSchema = SchemaFactory.createForClass(Province);
