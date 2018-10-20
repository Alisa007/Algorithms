function recursiveFactorial(num) {
    if (num === 1) {
        return 1;
    }

    return num * recursiveFactorial(num - 1);
}

function iterativeFactorial(num) {
    let res = 1;

    while (num > 1) {
        res *= num;
        num--;
    }

    return res;
}

console.log(recursiveFactorial(4), 24);
console.log(iterativeFactorial(4), 24);