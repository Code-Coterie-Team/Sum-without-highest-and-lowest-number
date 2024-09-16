function sumArray(array) {
    if (array == null || array.length == 0){
        return 0;
    }
    array.sort(function(a, b) {
        return a - b;
    });

    let sum = 0;
    for(let i = 1; i < array.length - 1; i++){
        sum += array[i];
    }

    return sum;
}