// 2.1 - myFilter
function myFilter(arr, callback) {
    let tab = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            myPush(tab, arr[i]);
        }
    }
    return tab;
}

// 2.2 - myMap
function myMap(arr, callback) {
    let tab = [];
    for (let i = 0; i < arr.length; i++) {
        const trans = callback(arr[i]);
        myPush(tab, trans);
    }
    return tab;
}

// 2.3 - myFind
function myFind(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            return arr[i];
        }
    }
    return undefined;
}

// 2.4 - myEvery
function myEvery(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (!callback(arr[i])) {
            return false;
        }
    }
    return true;
}

// 2.5 - mySome
function mySome(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            return true;
        }
    }
    return false;
}

// 2.6 - myPush (utilisé par filter/map/concat)
function myPush(arr, element) {
    arr[arr.length] = element;
    return arr.length;
}

// 2.6 - myConcat
function myConcat(arr, ...arrays) {
    let tab = [...arr];
    for (let i = 0; i < arrays.length; i++) {
        if (Array.isArray(arrays[i])) {
            for (let j = 0; j < arrays[i].length; j++) {
                myPush(tab, arrays[i][j]);
            }
        } else {
            myPush(tab, arrays[i]);
        }
    }
    return tab;
}