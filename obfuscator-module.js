/**
 * @param {Array} data – массив CSS классов
 */

module.exports = function(data){
    var obj = {};
    for (var i = 0; i < data.length; i++) {
        var item = data[i];
        if(obj[item]) continue;
        obj[item]= item + '_' + i;
    }
    return obj;
}