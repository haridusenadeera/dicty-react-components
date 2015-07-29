import React from 'react';
import Radium from 'radium';

/**
 * @desc component that contain tab content
 */

/**
 * @example
 *  <TabContent to="george">
 *      <h3> I am an architect </h3>
 *  </TabContent>
 *
 * @example
 *  <TabContent to="me">
 *      <MyComponent/>
 *  </TabContent>
 */

@Radium
export default class TabContent extends React.Component {
    displayName = 'A component for the tab content'
    constructor(props, context) {
        super(props, context);
    }
    static contextTypes = {
        router: React.PropTypes.func.isRequired
    }
    /**
     * @type {Object}
     * @property {Object} style An arbitary style object
     * @property {string} to An unique name, that creates the url
     *                       and matches the name defined in the router configuration
     */
    static propTypes = {
        to: React.PropTypes.string.isRequired,
        style: React.PropTypes.object
    }
    /** @return {Object} gets the default style
     * @property {Object} base The default style object
     */
    getStyles = () => {
        return {
            base: {
                display: 'none'
            }
        };
    }
    render() {
        const {children, to, style, params, query} = this.props;
        const {router} = this.context;
        const defStyle = this.getStyles();
        if (router.isActive(to, params, query)) {
            defStyle.base.display = 'inherit';
        }
        return (
            <div
                style={[defStyle.base, style && style]}>
                {children}
            </div>
        );
    }
}

