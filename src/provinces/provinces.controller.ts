import { Controller, Get, Param } from '@nestjs/common';
import { ProvincesService } from './provinces.service';
import { Province } from './provinces.schema';

@Controller('province')
export class ProvincesController {
  constructor(private provinceService: ProvincesService) {}
  @Get()
  async findAll(): Promise<Province[]> {
    return await this.provinceService.getAll();
  }

  @Get(':id')
  async getProvince(@Param('id') province_id: string): Promise<Province> {
    return await this.provinceService.getProvince(province_id)
  }
}
