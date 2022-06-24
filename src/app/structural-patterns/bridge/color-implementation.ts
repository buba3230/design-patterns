
export interface Implementation {
    getColor(): string;
}

export class RedFigure implements Implementation {
    getColor(): string {
        return 'Red';
    }
}

export class BlueFigure implements Implementation {
    getColor(): string {
        return 'Blue';
    }
}