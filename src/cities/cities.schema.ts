import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Province } from './../provinces/provinces.schema';
import { Document, Schema as mongoose_schema } from 'mongoose';

export type CityDocument = City & Document;

@Schema()
export class City {
  @Prop()
  city_id: string;

  @Prop()
  city_name: string;

  @Prop({ type: mongoose_schema.Types.ObjectId, ref: 'Province' })
  province: Province;

  @Prop()
  type: string;

  @Prop()
  postal_code: string;
}

export const CitySchema = SchemaFactory.createForClass(City);
