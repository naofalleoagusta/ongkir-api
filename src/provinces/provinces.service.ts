import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Province, ProvinceDocument } from './provinces.schema';

@Injectable()
export class ProvincesService {
  constructor(
    @InjectModel(Province.name)
    private provinceModel: Model<ProvinceDocument>,
  ) {}

  async getAll(): Promise<Province[]> {
    return this.provinceModel.find().exec();
  }

  async getProvince(province_id: string): Promise<Province> {
    return this.provinceModel.findOne({ province_id: province_id }).exec();
  }
}
