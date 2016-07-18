import React from 'react';
import './react-responsive-app.scss';


/**
 * This class has no concerns about how it displays the sidemenu or the main content while
 * the screen size is normal size (width > 780)
 * it applies also classnames for different types of screens (mobile (<480), tablet(<780), screen, flat (tv)(>2000))
*/
export default class ResponsiveApplication extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            windowWidth: window.innerWidth,
            currentDevice: 'mobile'
        };

        this.toggleSideBar = this.toggleSideBar.bind(this);
    }

    handleResize(e) {
        this.setState({windowWidth: window.innerWidth});
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    toggleSideBar() {
        if(this.refs.reactApp.classList.contains('open')) {
            this.refs.reactApp.classList.remove('open');
            //this.refs.sideBar.classList.remove('open');
            //this.refs.overlay.classList.remove('open');
        } else {
            this.refs.reactApp.classList.add('open');
            //this.refs.sideBar.classList.add('open');
            //this.refs.overlay.classList.add('open');
        }
    }

    render() {
        let containerStyle = this.props.className;

        if(this.state.windowWidth < this.props.mobileWidth) {
            containerStyle += " mobile";
        } else if(this.state.windowWidth < this.props.tabletWidth) {
            containerStyle += " tablet";
        } else if(this.state.windowWidth < this.props.screenMaxWidth) {
            containerStyle += " screen";
        } else if(this.state.windowWidth >= this.props.screenMaxWidth) {
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

        return <div ref="reactApp" id="react-app" className={containerStyle}>
            <div id="main-content" ref="mainContent">
                {this.props.children}
            </div>
            <div onClick={this.toggleSideBar} id="responsive-app-overlay" ref="overlay"></div>
            <div id="side-bar" ref="sideBar" >
                {this.props.sidebarContent}
            </div>
        </div>;
    }
}

ResponsiveApplication.propTypes = {
    mobileWidth: React.PropTypes.number,
    tabletWidth: React.PropTypes.number,
    screenMaxWidth: React.PropTypes.number,
    applicationName: React.PropTypes.string,
    sidebarContent: React.PropTypes.node
}

ResponsiveApplication.defaultProps = {
    mobileWidth: 480,
    tabletWidth: 780,
    screenMaxWidth: 2000,
    applicationName: "Application Name"
}
