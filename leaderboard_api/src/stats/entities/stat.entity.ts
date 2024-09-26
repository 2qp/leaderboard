import { StatHistory } from './history.entity';
import { UserStat } from './userStat.entity';

export class Stat {
  constructor(
    public place: number,
    public records: UserStat,
    public history: StatHistory,
  ) {}
}
