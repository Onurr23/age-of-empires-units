/* eslint-disable */
import type { ColumnsType } from 'antd/es/table';
import { CostData } from './units.types';

export const defaultCostsFilters = [
    {
        label: 'Wood',
        key: 'wood',
        value: [20, 50],
        disabled: true
    },
    {
        label: 'Food',
        key: 'food',
        value: [20, 50],
        disabled: true
    },
    {
        label: 'Gold',
        key: 'gold',
        value: [20, 50],
        disabled: true
    },
]