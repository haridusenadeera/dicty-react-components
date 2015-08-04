import React from 'react';
import Radium from 'radium';

/**
 * tab group component
 */

/**
 * @example
 * <TabGroup>
 *  <TabList>
 *      <Tab name="Jerry" to="jerry"/>
 *      <Tab name="George" to="george"/>
 *      <Tab/>
 *  </TabList>
 *  <TabPane>
 *      <TabContent to="jerry"> content... </TabContent>
 *      <TabContent to="george"> content... </TabContent>
 *  </TabPane>
 * </TabGroup>
 */

@Radium
export default class TabGroup extends React.Component {
    displayName = 'A top level component for tabs'
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
            <div
                style={[this.getStyles().base, style && style]}>
                {children}
            </div>
        );
    }
}

