import React from 'react';
import Radium from 'radium';

/**
 * panel header component
 */

/**
 * @example
 * <PanelHeader>
 *      The chicken roaster
 * </PanelTitle>
 *
 * @example
 * <PanelHeader>
 *  <PanelTitle>
 *       The pothole
 *  </PanelTitle>
 * </PanelHeader>
 */

@Radium
export default class PanelHeader extends React.Component {
    displayName = 'A component for panel header'
    /**
     * @type {Object}
     * @property {Object} style An arbitary style object
     */
    static propTypes = {
        style: React.PropTypes.object
    }
    /**
     * @return {ReactElement[]} List of react elements
     */
    renderChildren = () => {
        const {collapse, children, clickFunc} = this.props;
        if (collapse) {
            const newChildren = React.Children.map(children, (child) => {
                return React.cloneElement(child,
                              {
                                 collapse: collapse,
                                 clickFunc: clickFunc
                             });
            });
            return newChildren;
        }
        return children;
    }
    /**
     * @return {Object} gets the default style
     * @property {Object} base The default style object
     */
    getStyles = () => {
        const {collapse} = this.props;
        const style = {
            base: {
                color: '#333',
                backgroundColor: '#F5F5F5',
                borderColor: '#ddd',
                padding: '10px 15px',
                borderTopLeftRadius: '3px',
                borderTopRightRadius: '3px',
                fontFamily: 'Helvetica Neue,Helvetica,Arial,sans-serif',
                fontSize: '14px',
                lineHeight: 1.42857143
            }
        };
        if (collapse) {
            style.base.borderBottom = '0px none #ddd';
        }
        return style;
    }
    render() {
        const {style} = this.props;
        return (
            <div
                style={[this.getStyles().base, style && style]}>
                {this.renderChildren()}
            </div>
        );
    }
}
