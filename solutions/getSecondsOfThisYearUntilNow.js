'use strict';

const now = new Date();
const presentDate = new Date();
const startDate = new Date(presentDate.getFullYear(), 0, 1);
const getSecondsOfThisYearUntilNow = () => {
    result = ((now.getTime() - startDate.getTime()) / 1000);
    return (result);
};

export default getSecondsOfThisYearUntilNow;

