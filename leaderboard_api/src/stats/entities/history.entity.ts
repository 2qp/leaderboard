export class StatHistory {
  constructor(
    public userId: number,
    public previousKillCount: number,
    public updatedKillCount: number,

    // public previousPlacement: number,
    // public updatedPlacement: number,

    public placement: number,
    public status: PlacementStatus,

    public timestamp: Date = new Date(),
  ) {}
}

type PlacementStatus = 'NEW' | 'UP' | 'DOWN' | 'NEUTRAL';

export type { PlacementStatus };
