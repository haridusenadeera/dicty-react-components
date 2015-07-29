import React from 'react';
import Radium from 'radium';

/**
 * tab list component to contain a group of tab
 */

/**
 * @example
 *  <TabList>
 *      <Tab/>
 *      <Tab/>
 *      <Tab/>
 *  </TabList>
 */

@Radium
export default class TabList extends React.Component {
    displayName = 'A component to contain a list of tabs'
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
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                marginBottom: '15px',
                marginTop: '0px',
                paddingLeft: '0px'
            }
        };
    }
    render() {
        const {style, children} = this.props;
        return (
            <ul
                style={[this.getStyles().base, style && style]}>
                {children}
            </ul>
        );
    }
}

