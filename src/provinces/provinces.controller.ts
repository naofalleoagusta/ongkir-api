import { Controller, Get } from '@nestjs/common';
import { ProvincesService } from './provinces.service';
import { Province } from './provinces.schema';

@Controller('province')
export class ProvincesController {
  constructor(private provinceService: ProvincesService) {}
  @Get()
  async findAll(): Promise<Province[]> {
    return await this.provinceService.getAll();
  }
}
