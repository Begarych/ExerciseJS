function isPrime(num) {
    if (num > 1000) {
        return "Invalid Input";
    }

    if (num === 2) {
        return "2 is a prime number";
    }

    if (num <= 1 || num % 2 === 0) {
        return `${num} is not a prime number`;
    }

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0){
            return `${num} is not a prime number`;
        }
    }

    return `${num} is a prime number`
}
