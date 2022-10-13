import { Point } from './Point';

export abstract class Shape {
  constructor(points: Point[]);
  constructor(points: Point[], color: string, filled: boolean);
  constructor(
    protected points: Point[],
    protected color: string = 'green',
    protected filled: boolean = true
  ) {
    if (points.length < 3) {
      throw new Error('The Shape should not have less than three points');
    }
  }

  public toString(): string {
    const filledText = this.filled ? 'filled' : 'not filled';
    const pointsText = this.points
      .map((point) => point.toString())
      .join(', ');

    return `A Shape with color of ${this.color} and ${filledText}. Points: ${pointsText}.`;
  }

  public getPerimeter(): number {
    return this.points.reduce((acc, currentPoint, index, points) => {
      const nextPointIdx = index === points.length - 1 ? 0 : index + 1;
      return acc + currentPoint.distance(points[nextPointIdx]);
    }, 0);
  }

  abstract getType(): string;
}
