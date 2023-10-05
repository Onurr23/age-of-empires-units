import jsonData from '../db/age-of-empires-units.json';

export const getUnitsData = async () => {
    const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
    await delay(1000);

    return jsonData;
};