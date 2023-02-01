function recursiveFactorial(n) {
    if(n===0) {
        return 1;
    }
    return (n * recursiveFactorial(n-1));
}

console.log(recursiveFactorial(5));

//Big-O of this algorithm is of linear Time-Complexity O(n).