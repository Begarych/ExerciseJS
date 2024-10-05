const arrow_pow = (x, n) => {
    let ans = x;

    for (let i = 1; i < n; i++) {
        ans *= x;
    }
    return ans;
}

console.log(arrow_pow(2, 3));