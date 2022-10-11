export class Point {
  private readonly x: number;
  private readonly y: number;

  private calcDistance(x: number, y: number): number {
    return Math.sqrt(Math.pow(x - this.x, 2) + Math.pow(y - this.y, 2));
  }

  constructor();
  constructor(x: number, y: number);
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  public toString(): string {
    return `(${this.x}, ${this.y})`;
  }

  public distance(): number;
  public distance(point: Point): number;
  public distance(x: number, y: number): number;

  public distance(pointOrX?: Point | number, y?: number): number {
    if (pointOrX instanceof Point) {
      return this.calcDistance(pointOrX.x, pointOrX.y);
    }

    if (!!pointOrX && !!y) {
      return this.calcDistance(pointOrX, y);
    }

    return this.calcDistance(0, 0);
  }
}