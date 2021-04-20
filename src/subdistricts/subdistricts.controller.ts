import { Controller, Get, Param } from '@nestjs/common';
import { SubdistrictsService } from './subdistricsts.service';
import { Subdistrict } from './subdistricts.schema';

@Controller('subdistrict')
export class SubdistrictsController {
  constructor(private subdistrictService: SubdistrictsService) {}

  @Get()
  async findAll(): Promise<Subdistrict[]> {
    return await this.subdistrictService.findAll();
  }

  @Get(':id')
  async getSubdistrict(
    @Param('id') subdistrict_id: string,
  ): Promise<Subdistrict> {
    return await this.subdistrictService.getSubdistrict(subdistrict_id);
  }
}
