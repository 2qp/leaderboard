type UserDataHistory = {
  userId: number;
  previousKillCount: number;
  updatedKillCount: number;
  placement: number;
  status: PlacementStatus;
  timestamp: string;
};

type UserData = {
  userId: number;
  userName: string;
  avatarUrl: string;
  killCount: number;
};

type Stats = {
  place: number;
  records: UserData;
  history?: UserDataHistory;
};

type UserStats = {
  [key: string]: UserDataHistory;
};

type PlacementStatus = "NEW" | "UP" | "DOWN" | "NEUTRAL";
