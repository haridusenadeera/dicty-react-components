import React from 'react/addons';
import Radium from 'radium';

/**
 * panel group component
 */

/**
 *
 * @example
 * <PanelGroup>
 *  <Panel collapse>
 *      <PanelHeader>
 *          <PanelTitle>
 *              The bubble boy
 *          </PanelTitle>
 *      </PanelHeader>
 *      <PanelBody>
 *          It was moops!
 *      </PanelBody>
 *  </Panel>
 *  <Panel collapse open={false}>
 *      <PanelHeader>
 *          <PanelTitle>
 *              The heart attack
 *          </PanelTitle>
 *      </PanelHeader>
 *      <PanelBody>
 *          The flaming globe of sigmund
 *      </PanelBody>
 *  </Panel>
 * </PanelGroup>
 *
 */


@Radium
export default class PanelGroup extends React.Component {
    displayName = 'A top level component for group multiple panel'
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
                fontFamily: 'Helvetica Neue,Helvetica,Arial,sans-serif',
                fontSize: '14px',
                lineHeight: 1.42857143,
                color: '#333',
                marginBottom: 20
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
