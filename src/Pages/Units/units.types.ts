/* eslint-disable */

export interface CostFilterData {
    label: string;
    key: string;
    value: number[];
    checked: boolean;
}

export interface AgeFilterData {
    label: string;
    key: string;
    isSelected: boolean;
}
export interface UnitsReducer {
    unitsReducer: {
        units: {
            data: CostFilterData[];
            loading: boolean;
        };
    };
}

export enum COSTS {
    FOOD = 'Food',
    GOLD = 'Gold',
    WOOD = 'Wood',
}
