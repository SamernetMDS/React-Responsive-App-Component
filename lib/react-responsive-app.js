'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./react-responsive-app.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * This class has no concerns about how it displays the sidemenu or the main content while
 * the screen size is normal size (width > 780)
 * it applies also classnames for different types of screens (mobile (<480), tablet(<780), screen, flat (tv)(>2000))
*/

var ResponsiveApplication = function (_React$Component) {
    _inherits(ResponsiveApplication, _React$Component);

    function ResponsiveApplication(props) {
        _classCallCheck(this, ResponsiveApplication);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ResponsiveApplication).call(this, props));

        _this.state = {
            windowWidth: window.innerWidth,
            currentDevice: 'mobile'
        };

        _this.toggleSideBar = _this.toggleSideBar.bind(_this);
        return _this;
    }

    _createClass(ResponsiveApplication, [{
        key: 'handleResize',
        value: function handleResize(e) {
            this.setState({ windowWidth: window.innerWidth });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            window.addEventListener('resize', this.handleResize);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            window.removeEventListener('resize', this.handleResize);
        }
    }, {
        key: 'toggleSideBar',
        value: function toggleSideBar() {
            if (this.refs.reactApp.className == 'open') {
                this.refs.reactApp.classList.remove('open');
                //this.refs.sideBar.classList.remove('open');
                //this.refs.overlay.classList.remove('open');
            } else {
                this.refs.reactApp.classList.add('open');
                //this.refs.sideBar.classList.add('open');
                //this.refs.overlay.classList.add('open');
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var containerStyle = this.props.className;

            if (this.state.windowWidth < this.props.mobileWidth) {
                containerStyle += " mobile";
            } else if (this.state.windowWidth < this.props.tabletWidth) {
                containerStyle += " tablet";
            } else if (this.state.windowWidth < this.props.screenMaxWidth) {
                containerStyle += " screen";
            } else if (this.state.windowWidth >= this.props.screenMaxWidth) {
                containerStyle += " flat-tv";
            }

            /*
            let contentStyle = {
                position: 'absolute',
            }

            let barStyle = {
                position: 'absolute',
                left: '0px',
                top: '0px',
                bottom: '0px',
                height: '100%',
                width: '250px'
            }
            */

            return _react2.default.createElement(
                'div',
                { ref: 'reactApp', id: 'react-app', className: containerStyle },
                _react2.default.createElement(
                    'div',
                    { id: 'main-content', ref: 'mainContent' },
                    this.props.children
                ),
                _react2.default.createElement('div', { onClick: this.toggleSideBar, id: 'responsive-app-overlay', ref: 'overlay' }),
                _react2.default.createElement(
                    'div',
                    { id: 'side-bar', ref: 'sideBar' },
                    this.props.sidebarContent
                )
            );
        }
    }]);

    return ResponsiveApplication;
}(_react2.default.Component);

exports.default = ResponsiveApplication;


ResponsiveApplication.propTypes = {
    mobileWidth: _react2.default.PropTypes.number,
    tabletWidth: _react2.default.PropTypes.number,
    screenMaxWidth: _react2.default.PropTypes.number,
    applicationName: _react2.default.PropTypes.string,
    sidebarContent: _react2.default.PropTypes.node
};

ResponsiveApplication.defaultProps = {
    mobileWidth: 480,
    tabletWidth: 780,
    screenMaxWidth: 2000,
    applicationName: "Application Name"
};
module.exports = exports['default'];
//# sourceMappingURL=react-responsive-app.js.map
