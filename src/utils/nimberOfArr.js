export function numberOfPage(num) {
    const arr = [];
    for (let i = 0; i < Math.ceil(num / 30); i++) {
        arr.push(i + 1);
    }
    return arr;
}
