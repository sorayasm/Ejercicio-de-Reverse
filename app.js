const array = ["a", "b", "c", "d"];

const reverse = function(array) {
    for (i = 0; i < array.length; i++) {
        let item = array.pop();
        array.splice(i, 0, item);
    }
    return array;
}
console.log(array);
console.log(reverse(array));