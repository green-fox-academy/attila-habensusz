'use strict';
export{};

let theList: number[]=[34, 12, 24, 9, 5];

/*
function bubble(array:number[], desc: boolean = false) {
    if (desc === false){
        for (let i:number = 0; i<array.length; i++){
            for (let j:number = 0; j< array.length-1; j++){
                if (array[j]>array[i]){
                    array[j] += array[i];
                    array[i] = array[j] - array[i];
                    array[j] = array[j] - array[i];
                }
            }
        }
        return array;
    }
    else if (desc === true) {
        for (let i:number = 0; i<array.length; i++){
            for (let j:number = 0; j< array.length-1; j++){
                if (array[j]<array[i]){
                    array[j] += array[i];
                    array[i] = array[j] - array[i];
                    array[j] = array[j] - array[i];
                }
            }
        }
        return array;
    }
}

console.log(bubble(theList));
console.log(bubble(theList,true));
*/
function bubble (list, bool) {
    list.sort(function(x, y){
        if (bool === true){
            return x - y;
        }
        else {
            return y - x;
        }
    });
    return list;
}


console.log(bubble(theList, true));
