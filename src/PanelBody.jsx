import React from 'react';
import Radium from 'radium';

/**
 * panel body component
 */

/**
 * @example
 * <PanelBody>
 *  <p> I don't want to be a Pirate!!!!!
 * </PanelBody>
 *
 * @example
 * <PanelBody open>
 *  <p><b> I like definitive things </b></p>
 * </PanelBody>
 *
 * @example
 * <PanelBody open clicked>
 *  <p> A festivus for the rest of us </p>
 * </PanelBody>
 */

@Radium
export default class PanelBody extends React.Component {
    displayName = 'A component for the panel content'
    /**
     * @type {Object}
     * @property {Object} style An arbitary style object
     * @property {boolean} collapse Flag to toggle the collapse state,showed
     *                              only for documentation, should not be set
     *                              explicitly
     * @property {boolean} open Flag to toogle the content, showed
     *                              only for documentation, should not be set
     *                              explicitly

     * @property {boolean} clicked Flag to indicate that a click
     *                             event is asking to change its stage, showed
     *                             only for documentation, should not be set
     *                             explicitly.
     */
    static propTypes = {
        style: React.PropTypes.object,
        collapse: React.PropTypes.bool,
        open: React.PropTypes.bool,
        clicked: React.PropTypes.bool
    }
    /** @return {Object} gets the default style
     *  @property {Object} base The default style object
     */
    getStyles = () => {
        const {collapse} = this.props;
        let style = {
            base: {
                padding: '15px',
                fontFamily: 'Helvetica Neue,Helvetica,Arial,sans-serif',
                fontSize: '14px',
                lineHeight: 1.42857143,
                borderTop: '1px solid #ddd',
                color: '#333'
            }
        };
        if (collapse) {
            style.base.overflow = 'hidden';
            style.base.transition = 'height 0.5s ease-in-out, visibility 0.5s ease-in-out';
        }
        return style;
    }
    render() {
        const {collapse, open, style, children, clicked} = this.props;
        let defStyle = this.getStyles();
        if (collapse) {
            if (open && clicked) {
                defStyle.base.display = 'block';
            }
            if (!open && clicked) {
                defStyle.base.display = 'none';
            }
        }
        return (
            <div
                style={[defStyle.base, style && style]}>
                {children}
            </div>
        );
    }
}
