import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as mongoose_schema } from 'mongoose';
import { Province } from 'src/provinces/provinces.schema';
import { City } from './../cities/cities.schema';

export type SubdistrictDocument = Subdistrict & Document;

@Schema()
export class Subdistrict {
  @Prop()
  subdistrict_id: string;

  @Prop()
  subdistrict_name: string;

  @Prop({ type: mongoose_schema.Types.ObjectId, ref: 'City' })
  city: City;

  @Prop({ type: mongoose_schema.Types.ObjectId, ref: 'Province' })
  province: Province;
}

export const SubdistrictSchema = SchemaFactory.createForClass(Subdistrict);
