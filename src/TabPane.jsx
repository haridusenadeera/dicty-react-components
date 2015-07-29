import React from 'react';
import Radium from 'radium';

/**
 * @desc component to group all the tab content
 */

/**
 * @example
 * <TabPane>
 *  <TabContent to="kramer">
 *      content ...
 *  </TabContent>
 *  <TabContent to="jerry">
 *      content ....
 *  </TabContent>
 * </TabPane>
 */

@Radium
export default class TabPane extends React.Component {
    displayName = 'A component to group all tab content'
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
                display: 'flex'
            }
        };
    }
    render() {
        const {style, children} = this.props;
        return (
            <div
                style={[this.getStyles().base, style && style]}>
                {children}
            </div>
        );
    }
}

