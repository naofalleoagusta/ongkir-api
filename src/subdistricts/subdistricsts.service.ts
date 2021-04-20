import { Injectable } from '@nestjs/common';
import { Subdistrict, SubdistrictDocument } from './subdistricts.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class SubdistrictsService {
  constructor(
    @InjectModel(Subdistrict.name)
    private subdistrictModel: Model<SubdistrictDocument>,
  ) {}

  async findAll(): Promise<Subdistrict[]> {
    return this.subdistrictModel.find().exec();
  }

  async getSubdistrict(subdistrict_id:string):Promise<Subdistrict>{
      return this.subdistrictModel.findById(subdistrict_id).exec()
  }
}
