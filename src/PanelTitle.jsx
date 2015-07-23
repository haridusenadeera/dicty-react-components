import React from 'react';
import Radium from 'radium';

/**
 * panel title component
 */

/**
 * @example
 * <PanelTitle>
 *   The puffy shirt
 * </PanelTitle>
 *
 */

@Radium
export default class PanelTitle extends React.Component {
    displayName = 'A component for the panel title'
    /**
     * @type {Object}
     * @property {Object} style An arbitary style object
     * @property {boolean} collapse Flag for the content to be collapsible, showed
     *                              only for documentation, should not be set
     *                              explicitly.
     * @property {boolean} clickFunc A callback function that will be
     *                               called on clicking the title, generally
     *                               a function from the parent.
     */
    static propTypes = {
        style: React.PropTypes.object,
        clickFunc: React.PropTypes.func,
        collapse: (props, propName) => {
            if (props[propName]) {
                if (typeof (props[propName]) !== 'boolean') {
                    return new Error('Expect a boolean value');
                }
                if (!props.clickFunc) {
                    return new Error('clickFunc props needs to be defined');
                }
            }
        }
    }
    /** @return {Object} gets the default style
     *  @property {Object} base The default style object
     */
    getStyles = () => {
        return {
            base: {
                marginTop: 0,
                marginBottom: 0,
                fontSize: '16px',
                color: 'inherit',
                fontFamily: 'inherit',
                fontWeight: '500',
                lineHeight: 1.1
            },
            href: {
                cursor: 'pointer',
                textDecoration: 'none',
                backgroundColor: 'transparent',
                ':hover': {
                    textDecoration: 'underline'
                }
            }
        };
    }
    render() {
        const {collapse, style, children, clickFunc} = this.props;
        let elem;
        if (collapse) {
            elem = (
                <a href="#" style={this.getStyles().href} onClick={clickFunc}>{children}</a>
            );
        } else {
            elem = children;
        }
        return (
            <h3
                style={[this.getStyles().base, style && style]}>
                {elem}
            </h3>
        );
    }
}
