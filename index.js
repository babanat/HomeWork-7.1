function createFunction() {
    let previosValue = 0;
    return function (value) {
    previosValue += value
    return previosValue
    }
    }
    const sum = createFunction();
    console.log(sum(4));
    console.log(sum(6));
    console.log(sum(10));
    console.log(sum(7));