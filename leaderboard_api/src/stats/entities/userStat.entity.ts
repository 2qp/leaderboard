export class UserStat {
    constructor(
      public userId: number,
      public userName: string,
      public avatarUrl?: string,
      public killCount: number = 0
    ) {}
  }
  