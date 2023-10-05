// src/actions.js
export const GET_UNITS_REQUEST = 'GET_UNITS_REQUEST';
export const GET_UNITS_REQUEST_SUCCESS = 'GET_UNITS_REQUEST_SUCCESS';

export const getUnitsRequest = () => ({
    type: GET_UNITS_REQUEST
});

export const getUnitsRequestSuccess = (data: any) => ({
    type: GET_UNITS_REQUEST_SUCCESS,
    payload: data,
});
