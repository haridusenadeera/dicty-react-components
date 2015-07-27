import React from 'react/addons';
import Radium from 'radium';

/**
 * panel component
 */

/**
 *
 * @example
 * <Panel>
 *  <PanelHeader>
 *      <PanelTitle>
 *          The lip reader
 *      </PanelTitle>
 *  </PanelHeader>
 *  <PanelBody>
 *      It was moops!
 *  </PanelBody>
 * </Panel>
 *
 * @example
 * <Panel collapse>
 *  <PanelHeader>
 *      <PanelTitle>
 *          The bubble boy
 *      </PanelTitle>
 *  </PanelHeader>
 *  <PanelBody>
 *      It was moops!
 *  </PanelBody>
 * </Panel>
 * <Panel collapse open={false}>
 *  <PanelHeader>
 *      <PanelTitle>
 *          The heart attack
 *      </PanelTitle>
 *  </PanelHeader>
 *  <PanelBody>
 *      The flaming globe of sigmund
 *  </PanelBody>
 * </Panel>
 *
 */


/**
 * @param {Object} props - The props object for this component
 * @param {string} propName - Name of the current prop
 * @return {Error} An error object in case validation is failed
 */
// function validateBoolProp(props, propName) {
    // if (props[propName]) {
        // if (typeof (props[propName]) !== 'boolean') {
            // return new Error('Expect a boolean value');
        // }
        // if (!props.collapse) {
            // return new Error('collapse prop need to be defined');
        // }
    // }
// }

@Radium
export default class Panel extends React.Component {
    displayName = 'A top level component for containing other panel components'
    /**
     * @type {Object}
     * @property {Object} style An arbitary style object
     * @property {boolean} collapse Flag to toggle the collapse state of the
     *                              children.
     */
    static propTypes = {
        style: React.PropTypes.object,
        collapse: React.PropTypes.bool
    }
    state = {
        click: false,
        open: true
    }
    /** @return {null} returns nothing
     * callback function passed to children.
     * changes the state after being called.
     */
    onChildClick = () => {
        this.setState(
            {
                click: true,
                open: this.state.open ? false : true
            });
    }
    /**
     * @return {ReactElement[]} List of react elements
     */
    renderChildren = () => {
        const {collapse, children} = this.props;
        if (collapse) {
            const newChildren = React.Children.map(children, (child) => {
                return React.cloneElement(child,
                              {
                                 open: this.state.open,
                                 collapse: collapse,
                                 clickFunc: this.onChildClick,
                                 clicked: this.state.click
                             });
            });
            return newChildren;
        }
        return children;
    }
    /** @return {Object} gets the default style
     * @property {Object} base The default style object
     */
    getStyles = () => {
        const {collapse} = this.props;
        let style = {
            base: {
                marginTop: '5px',
                backgroundColor: '#fff',
                border: '1px solid #ddd',
                boxShadow: '0 1px 1px rgba(0,0,0,.05)',
                fontSize: '14px',
                lineHeight: 1.42857143,
                color: '#333',
                borderRadius: 4,
                fontFamily: 'Helvetica Neue,Helvetica,Arial,sans-serif'
            }
        };
        if (collapse) {
            style.base.marginBottom = 0;
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
