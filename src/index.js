exports.min = function min(array) {
    if (array) {
        let min = array.length ? array[0] : 0;
        for (let index = 0; index < array.length; index++) {
            if (array[index] < min) {
                min = array[index];
            }
        }
        return min;
    } else {
        return 0;
    }
};

exports.max = function max(array) {
        if (array) {
        let min = array.length ? array[0] : 0;
        for (let index = 0; index < array.length; index++) {
            if (array[index] < min) {
                min = array[index];
            }
        }
        return min;
    } else {
        return 0;
    }
};

exports.avg = function avg(array) {
    return 0;
};
