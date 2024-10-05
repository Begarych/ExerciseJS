function countEvenOdd(arr) {
    let odd = 0, even = 0, nul = 0;
    for (let i of arr) {
        if (typeof i === "number" && !isNaN(i)){
            if (i === 0){
                nul += 1;
            }else if (i % 2 === 0){
                even += 1;
            }else {
                odd += 1;
            }

        }

    }

    return ("odd numbers = " + odd + "\neven numbers = " + even + "\nnuls = " + nul);
}

console.log(countEvenOdd([1, "pen", 0, 3, 26, 4, NaN, 35]));