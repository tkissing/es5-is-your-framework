define(function(require, exports, module) {

    function extend(obj) {
        return [].reduce.call(arguments, function (ignored, extras) {
            return Object.keys(extras).reduce(function(ignored, value) {
                obj[value] = extras[value];
                return obj;
            }, obj); // reduce returns initial value if empty is array, so need to pass in obj here
        });
    }

    module.exports = extend;
});
