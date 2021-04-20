import { Controller, Get } from '@nestjs/common';
import { City } from './cities.schema';
import { CitiesService } from './cities.service';

@Controller('city')
export class CitiesController {
  constructor(private citiesService: CitiesService) {}

  @Get()
  async findAll(): Promise<City[]> {
    return await this.citiesService.findAll();
  }
}
