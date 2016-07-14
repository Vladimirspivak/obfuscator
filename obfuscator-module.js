/**
 * @param {Array} data – массив CSS классов
 */

module.exports = function(data){
    var obj = {};
    for (var i = 0; i < data.length; i++) {
        var item = data[i];
        if(obj[item]){
            obj[item]= obj[item].substring(0,obj[item].indexOf('_'));
            if (obj[item].length > 1) {
                obj[item] = obj[item].slice(0,-1) + '_' + i;
            } else {
                obj[item] = obj[item] + '_' + i;
            }
        } else {
            obj[item]= item + '_' + i;
        }
    }
    return obj;
}