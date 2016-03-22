var Test = function () {
  function Test() {
    babelHelpers.classCallCheck(this, Test);
  }

  babelHelpers.createClass(Test, [{
    key: "ok",
    value: function ok() {}
  }]);
  return Test;
}();

var evens = [2, 4, 6, 8];
var odds = evens.map(function (v) {
  return v + 1;
});
var basic = { template: "<h1 :id=id @click=hi>hello</h1><input type=text>",
  data: function data() {
    return odds;
  }
};

export default basic;