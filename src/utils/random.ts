export const randomNumber = (n: number, m: number): number => {
    var c = m - n + 1;
    return Math.floor(Math.random() * c + n);
};

/**
 * 随机年龄
 */
export const randomAge = (): number => {
    return randomNumber(16, 100);
};
