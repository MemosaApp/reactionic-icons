'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _clone = require('../utilities/clone');

var _clone2 = _interopRequireDefault(_clone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var bool = _react.PropTypes.bool,
    object = _react.PropTypes.object,
    shape = _react.PropTypes.shape,
    string = _react.PropTypes.string;

/**
 * The <Icon /> Component allows you to quickly create
 * accessible icons that also have different icons
 * depending on the platform given by the ionPlatform
 * context.
 *
 * By default, all icons are hidden. You must provide
 * `hidden={false}` to make them visible to screenreaders.
 *
 * The component will warn if an Icon has `hidden={false}`
 * without `label` being set.
 *
 * Usage:
 *
 * ```jsx
 * <Icon
 *   defaultIcon="fa fa-icon"
 *   icons={{ android: 'fa fa-android', ios: 'fa fa-ios', web: 'fa fa-web }}
 * />
 * ```
 *
 * @param {string} defaultIcon - Required. The default icon.
 * @param {object} icons - Optional. Specific icons to use depending on the device
 * @param {boolean} hidden - Optional. Defaults to true. Whether the icon is hidden for screen readers
 * @param {string} label - Optional. Screen reader text.
 */

var Icon = (_temp2 = _class = function (_Component) {
  _inherits(Icon, _Component);

  function Icon() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Icon);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Icon.__proto__ || Object.getPrototypeOf(Icon)).call.apply(_ref, [this].concat(args))), _this), _this.renderIcon = function () {
      var _this$props = _this.props,
          _this$props$icons = _this$props.icons,
          icons = _this$props$icons === undefined ? {} : _this$props$icons,
          defaultIcon = _this$props.defaultIcon;


      if (_this.context.ionPlatform.isIos) {
        return icons.ios || defaultIcon;
      } else if (_this.context.ionPlatform.isAndroid) {
        return icons.android || defaultIcon;
      } else {
        return icons.web || defaultIcon;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Icon, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          hidden = _props.hidden,
          label = _props.label,
          props = _objectWithoutProperties(_props, ['hidden', 'label']);

      var className = this.renderIcon();

      var additionalProps = (0, _clone2.default)(props, Object.keys(Icon.propTypes));

      if (label) {
        additionalProps['aria-label'] = label;
      }

      if (hidden) {
        additionalProps['aria-hidden'] = 'true';
      } else if (!label) {
        console.warn('An Icon was set to not be hidden, but does not have label text');
      }

      return _react2.default.createElement('i', _extends({ className: className }, additionalProps));
    }
  }]);

  return Icon;
}(_react.Component), _class.propTypes = {
  defaultIcon: string.isRequired,
  hidden: bool,
  icons: shape({
    android: string,
    ios: string,
    web: string
  }),
  label: string
}, _class.contextTypes = {
  ionPlatform: object
}, _class.defaultProps = {
  hidden: true
}, _temp2);
exports.default = Icon;