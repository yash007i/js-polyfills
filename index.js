// Write a polyfill for map():
// Map : input -> cb | return -> new array | call input cb for every values
if(!Array.prototype.myMap) {
    Array.prototype.myMap = function (cb) {
        const result = [];
        for(let i = 0 ; i < this.length ; i++){
            result[i] = cb(this[i], i);
        }
        return result;
    }
}

// Write a polyfill for forEach():
// forEach : input -> cb | return -> undefind | call input cb for every values
if(!Array.prototype.myForEach){
    Array.prototype.myForEach = function (cb) {
        for(let i = 0 ; i < this.length ; i++){
            cb(this[i],i);
        }
    }
}

// Write a polyfill for filter():
// Filter : input -> cb | return -> new array with follow the condition | call input cb for every values
if(!Array.prototype.myFilter){
    Array.prototype.myFilter = function (cb) {
        const result = [];
        for(let i = 0 ; i < this.length ; i++){
            if( cb(this[i]) ){
                result.push(this[i]); // Why this?
                // Return only those index which is follow the condition given in cb.
                // if write "result[i]=this[i]" then it is retuen holl array with empty space like this
                // [ <1 empty item>, true, <1 empty item>, true, <1 empty item>, true ] 
            }
        }
        return result;
    }
}

const arr = [1,2,3,4,5,6]

const mapIn = arr.map(e => e * 2); // [ 2, 4, 6, 8, 10, 12 ]
const myMapIn = arr.myMap(e => e * 2) // [ 2, 4, 6, 8, 10, 12 ]

const forEachMy = arr.myForEach(e => console.log(e)) // Travers every element of array

const filterMy = arr.myFilter(e => e % 2 == 0 ) // return new array with
// [ 2, 4, 6 ]
// Orignal array can not change. 



