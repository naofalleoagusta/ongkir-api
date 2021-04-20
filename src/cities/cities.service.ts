import { Injectable } from '@nestjs/common';
import { CityDocument } from './cities.schema';
import { City } from './cities.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CitiesService {
  constructor(@InjectModel(City.name) private cityModel: Model<CityDocument>) {}

  async findAll(): Promise<City[]> {
    return this.cityModel.find().exec();
  }

  async findCity(city_id: string): Promise<City> {
    return this.cityModel.findOne({ city_id: city_id }).exec();
  }
}
