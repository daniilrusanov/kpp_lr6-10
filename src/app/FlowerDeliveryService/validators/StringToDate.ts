export function StringToDate(value: string): Date {
    let arrD: string[];
    arrD = value.split(/[.-/]/);
    let arrDate: number[] = [];
    arrD.forEach((item) => {
        arrDate.push(Number(item));
    });
    arrDate[1] -= 1;
    return new Date(arrDate[2], arrDate[1], arrDate[0]);
}