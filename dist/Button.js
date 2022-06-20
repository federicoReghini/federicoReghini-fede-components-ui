"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactNative = require("react-native");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonCustom = function ButtonCustom(_ref) {
  var title = _ref.title,
      callback = _ref.callback;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNative.Button, {
    onPress: callback,
    title: title
  }));
};

ButtonCustom.defaultProps = {
  title: 'title'
};
var _default = ButtonCustom;
exports.default = _default;