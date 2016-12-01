var _  = require('lodash')
  , fs = require('fs')
  ;

module.exports = function () {

  var input = fs.readFileSync('input.txt', 'utf8').split('\n').map(function (v) {
        return v;
      })
    , fn    = function () {
        return 0;
      }
    ;

  return {

    one: fn(),

    two: fn()

  };

};
