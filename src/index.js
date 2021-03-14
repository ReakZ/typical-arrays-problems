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
        let max = array.length ? array[0] : 0;
        for (let index = 0; index < array.length; index++) {
            if (array[index] > max) {
                max = array[index];
            }
        }
        return max;
    } else {
        return 0;
    }
};

exports.avg = function avg(array) {
    if (array) {
    let avg=array.length>0?array[0]:0
    avg=array.reduce((prev,cur)=>prev+cur,0)
    return avg!=0?avg/array.length:0
    }
    else{
        return 0
    }
};
