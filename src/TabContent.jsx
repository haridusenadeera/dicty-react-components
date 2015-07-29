import React from 'react';
import Radium from 'radium';

/**
 * @desc component that contain tab content
 */

/**
 * @example
 *  <TabContent>
 *      <h3> I am an architect </h3>
 *  </TabContent>
 *
 * @example
 *  <TabContent>
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
     */
    static propTypes = {
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
        const {children, style, name, to, params, query} = this.props;
        const {router} = this.context;
        const defStyle = this.getStyles();
        if (router.isActive(to, params, query)) {
            defStyle.base.display = 'inherit';
        }
        return (
            <div
                style={[defStyle,  style && style]}>
                {children}
            </div>
        );
    }
}

