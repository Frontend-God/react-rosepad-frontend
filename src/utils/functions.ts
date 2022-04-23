export const genID = () => `${Math.random().toString(16).slice(2)}`;

export const getMiddleIndex = (arr: any[]) => Math.floor((arr.length - 1) / 2);
