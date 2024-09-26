import { Injectable } from '@nestjs/common';
import { CreateStatDto } from './dto/create-stat.dto';
import { UpdateStatDto } from './dto/update-stat.dto';
import { UserStat } from './entities/userStat.entity';
import { prefetchInitialData } from './utils/prefetch-stats';
import { PlacementStatus, StatHistory } from './entities/history.entity';
import { Stat } from './entities/stat.entity';

@Injectable()
export class StatsService {
  private userStats: UserStat[] = [];
  private history: Map<number, StatHistory> = new Map();
  private readonly maxHistoryEntries = 20;

  constructor() {
    this.seedInitialData();
  }

  private async seedInitialData() {
    this.userStats = await prefetchInitialData();
  }

  create(createStatDto: CreateStatDto) {
    return 'This action adds a new stat';
  }

  findAll() {
    return `This action returns all stats`;
  }

  findOne(id: number) {
    return `This action returns a #${id} stat`;
  }

  update(id: number, updateStatDto: UpdateStatDto) {
    const { killCount } = updateStatDto;
    const userStat = this.userStats.find((stat) => stat.userId === id);

    if (userStat) {
      const previousKillCount = userStat.killCount;
      userStat.killCount = killCount;

      // history
      const newEntry = new StatHistory(
        id,
        previousKillCount,
        userStat.killCount,
        null,
        null,
      );

      this.history.set(id, newEntry);
      this.updatePlacements();

      return userStat;
    }
    throw new Error('User not found');
  }

  remove(id: number) {
    return `This action removes a #${id} stat`;
  }

  getTop3() {
    return this.userStats.sort((a, b) => b.killCount - a.killCount).slice(0, 3);
  }

  getTop30() {
    const sortedWithHistory = this.userStats
      .sort((a, b) => b.killCount - a.killCount)
      .slice(0, 30)
      .map((s, index) => new Stat(`${index}`, s, this.history.get(s.userId)));

    return sortedWithHistory;
  }

  public getHistory(): { [k: string]: StatHistory } {
    const history = Object.fromEntries(this.history.entries());

    return history;
  }

  private updatePlacements(): void {
    const sortedStats = this.userStats
      .slice()
      .sort((a, b) => b.killCount - a.killCount)
      .slice(0, 30);

    sortedStats.forEach((userStat, index) => {
      const placement = index + 1;
      const previousHistory = this.history.get(userStat.userId);

      const change = this.getPlacementStatus(
        previousHistory?.placement,
        placement,
      );

      const newHistory = new StatHistory(
        userStat.userId,
        previousHistory ? previousHistory.updatedKillCount : 0,
        userStat.killCount,
        placement,
        change,
      );

      this.history.set(userStat.userId, newHistory);
    });
  }

  private getPlacementStatus(
    previousPlacement: number | null,
    placement: number,
  ): PlacementStatus {
    //
    if (!previousPlacement) {
      return 'NEW';
    }

    if (previousPlacement > placement) {
      return 'UP';
    }

    if (previousPlacement < placement) {
      return 'DOWN';
    }

    return 'NEUTRAL';
  }
}
