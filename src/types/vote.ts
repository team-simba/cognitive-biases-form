export enum VoteChoice {
    Yes = 'yes',
    No = 'no',
}

export interface BarData {
    name: string;
    value: number;
    color: string;
    label?: string;
    pattern?: 'trianglePattern' | 'diamondPattern' | 'circlePattern' | 'rotateGridPattern';
}

export interface VoteItem {
    category: string;
    bars: BarData[];
    my?: string;
}

export interface ResultsGrafValues {
    noValue: number;
    yesValue: number;
    my: string;
}

export interface DeadSaveValues {
    aProgram: number;
    bProgram: number;
    my?: string;
}

export interface MysteryValues {
    yomint: number;
    cominte: number;
    osint: number;
    noMatter: number;
}

export interface PlanVotes {
    planVotes: Array<'תכנית א׳' | 'תכנית ב׳' | ''>;
}
