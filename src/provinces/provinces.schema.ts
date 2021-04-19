import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProvinceDocument = Province & Document;

@Schema()
export class Province {
  @Prop()
  province_id: string;

  @Prop()
  province_name: string;
}

export const ProvinceSchema = SchemaFactory.createForClass(Province);
