import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StatsService } from './stats.service';
import { CreateStatDto } from './dto/create-stat.dto';
import { UpdateStatDto } from './dto/update-stat.dto';
import { StatHistory } from './entities/history.entity';
import { Stat } from './entities/stat.entity';

@Controller('stats')
export class StatsController {
  constructor(private readonly statsService: StatsService) {}

  @Get('top-3')
  getTop3() {
    return this.statsService.getTop3();
  }

  @Get('top-30')
  getTop30(): Stat[] {
    return this.statsService.getTop30();
  }

  @Get('history')
  getHistory(): { [k: string]: StatHistory } {
    return this.statsService.getHistory();
  }

  // @Post()
  // create(@Body() createStatDto: CreateStatDto) {
  //   return this.statsService.create(createStatDto);
  // }

  // @Get()
  // findAll() {
  //   return this.statsService.findAll();
  // }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.statsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStatDto: UpdateStatDto) {
    return this.statsService.update(+id, updateStatDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.statsService.remove(+id);
  // }
}
