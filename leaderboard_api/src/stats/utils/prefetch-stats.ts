import { initialData } from 'src/data/initial-data';
import { UserStat } from 'src/stats/entities/userStat.entity';

export const prefetchInitialData = async (): Promise<UserStat[]> => {
  return initialData.map(
    (item: any) =>
      new UserStat(item.userId, item.userName, item.avatarUrl, item.killCount),
  );
};
