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

export interface CostData {
    Food: number;
    Gold: number;
}

// export interface UnitData {
//     age: string;
//     armor: string;
//     attack: number;
//     attack_bonus: string[];
//     build_time: number;
//     cost: CostData;
//     description: string;
//     expansion: string;
//     hit_points: number;
//     id: number;
//     line_of_sight: number;
//     movement_rate: number;
//     name: string;
//     reload_time: number;
// }

export enum COSTS {
    FOOD = 'Food',
    GOLD = 'Gold',
    WOOD = 'Wood',
}
