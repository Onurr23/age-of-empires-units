import { getUnitsData } from './index';
import jsonData from '../db/age-of-empires-units.json';

describe('getUnitsData', () => {
    it('should fetch units data after a delay', async () => {

        jest.useFakeTimers();

        const dataPromise = getUnitsData();

        jest.advanceTimersByTime(1000);

        const data = await dataPromise;

        jest.useRealTimers();

        expect(data).toEqual(jsonData);
    });
});
