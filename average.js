function average(array) {
    let media = 0;
    for(let j = 0; j < array.lenght; j += 1) {
        if(array.lenght === 0 || array[j] != Number) {
            return undefined;
        }
        else {
            media += array[j];
            media / j;
        }
    }
    return media;
}