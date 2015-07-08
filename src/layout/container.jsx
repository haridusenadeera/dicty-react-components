import React from 'react';
import Radium from 'radium';

@Radium
export class Container extends React.Component {
    displayName = 'A fluid container'
    static propTypes = {
        fluid: React.PropTypes.bool,
        style: React.PropTypes.object
    }
    static defaultProps = {
        fluid: false
    }
    getStyles = () => {
      return {
            base: {
                marginRight: 'auto',
                marginLeft: 'auto',
                paddingLeft: '15px',
                paddingRight: '15px'
            },
            fluid: {
                width: '100%'
            },
            fixed: {
                '@media (min-width: 768px)': {
                    width: '750px'
                },

                '@media (min-width: 992px)': {
                    width: '970px'
                },

                '@media (min-width: 1200px)': {
                    width: '1170px'
                }
            }
        };
    }
    render() {
      const { fluid, children, style } = this.props;
      const defStyle = this.getStyles();
      return (
            <div
              style={[
                  defStyle.base,
                  style && style,
                  fluid ? defStyle.fluid : defStyle.fixed
              ]}>
              {children}
            </div>
        );
    }
}

