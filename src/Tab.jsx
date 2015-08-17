import React from 'react';
import Radium from 'radium';
/**
 * @desc tab component to display the title(name) and link
 * @example
 *  <Tab name="Jerry" to="jerry"/>
 *  <Tab name="Jerry" to="seinfeld"/>
 *  <Tab name="George" to="seinfeld"/>
 */

@Radium
export default class Tab extends React.Component {
    displayName = 'A tab component to display the name and link'
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
     * @property {string} name The name of the tab to be displayed
     */
    static propTypes = {
        style: React.PropTypes.object,
        to: React.PropTypes.string.isRequired,
        name: React.PropTypes.string.isRequired
    }
    /** @return {Object} gets the default style
     * @property {Object} base The default style object
     * @property {Object} link The default style object for the a(link) element
     * @property {Object} active The default style object for the active a(link) element
     */
    getStyles = () => {
        return {
            base: {
                display: 'inherit',
                marginBottom: '-1px',
                marginTop: '0px',
                paddingLeft: '0px',
                fontSize: '14px',
                lineHeight: 1.42857143,
                color: '#333',
                fontFamily: 'Helvetica Neue,Helvetica,Arial,sans-serif'
            },
            inactive: {
                marginRight: '2px',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'transparent',
                borderRadius: '4px 4px 0 0',
                textDecoration: 'none',
                padding: '10px 15px',
                color: '#337ab7',
                ':hover': {
                    borderColor: '#eee #eee #ddd',
                    backgroundColor: '#eee',
                    outline: 0,
                    color: '#23527c'
                }
            },
            active: {
                marginRight: '2px',
                borderRadius: '4px 4px 0 0',
                padding: '10px 15px',
                textDecoration: 'none',
                color: '#555',
                cursor: 'default',
                backgroundColor: '#fff',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderRightColor: '#ddd',
                borderLeftColor: '#ddd',
                borderTopColor: '#ddd',
                borderBottomColor: 'transparent'
            }
        };
    }
    render() {
        const {style, name, to, location} = this.props;
        const {query} = location;
        const {router} = this.context;
        const defStyle = this.getStyles();
        let linkStyle;
        if (router.isActive(to, query)) {
            linkStyle = defStyle.active;
        } else {
            linkStyle = defStyle.inactive;
        }

        return (
            <li
                style={[defStyle.base, style && style]}>
                <a href={router.makePath(to, query)}
                    style={linkStyle}>
                    {name}
                </a>
            </li>
        );
    }
}

