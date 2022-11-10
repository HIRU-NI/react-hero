"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.symbol.description.js");
var _react = _interopRequireDefault(require("react"));
require("./styles/hero.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Hero = _ref => {
  let {
    title = "Always make room for beauty in your life",
    description = "At Prauge we are passionate about making people feel good while looking their best. Attending advanced education allows us to keep up with the latest trends and provide each guest with a unique & customizable result. For your convenience, Schedule your reservation today!",
    image = require("../assets/about-background.png")
  } = _ref;
  const blendImage = require("../assets/heroImage-background-blend.png");
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "hero_main"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "hero_background",
    style: {
      backgroundImage: ["url(".concat(image, ")"), "url(".concat(blendImage, ")")]
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "hero_text"
  }, /*#__PURE__*/_react.default.createElement("h4", {
    className: "hero_title"
  }, title), /*#__PURE__*/_react.default.createElement("p", {
    className: "hero_subtitle"
  }, description))));
};
var _default = Hero;
exports.default = _default;