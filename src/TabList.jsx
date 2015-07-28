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
                paddingLeft: '0px',
                fontSize: '14px',
                lineHeight: 1.42857143,
                color: '#333',
                fontFamily: 'Helvetica Neue,Helvetica,Arial,sans-serif'
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

