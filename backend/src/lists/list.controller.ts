import { Body, Controller, Get, Post } from '@nestjs/common';
import { ListService } from './list.service';

@Controller('lists')
export class ListController {
  constructor(private listService: ListService) {}

  @Get('values')
  async getValues() {
    return await this.listService.findAll();
  }

  @Post('value')
  async postValue(@Body() body: { value: string }) {
    return await this.listService.insert(body.value);
  }
}
