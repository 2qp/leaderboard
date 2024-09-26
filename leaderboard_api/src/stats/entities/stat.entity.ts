import { StatHistory } from './history.entity';
import { UserStat } from './userStat.entity';

export class Stat {
  constructor(
    public id: string,
    public records: UserStat,
    public history: StatHistory,
  ) {}
}
