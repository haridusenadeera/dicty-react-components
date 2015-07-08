import React from 'react';
import Radium from 'radium';

const flexre = /^(center|start|end)\-(xs|sm|md|lg)$/;
const spacere = /^(around|between)\-(xs|sm|md|lg)$/;

function getJustifyValue(type, params) {
  for (let value in params) {
    if (value.test(flexre)) {
      let match = value.match(flexre);
      if (match[2] === type) {
        return ['flex', match[1]].join('-');
      }
    }
    if (value.test(spacere)) {
      let match = value.match(spacere);
      if (match[2] === type) {
        return ['space', match[1]].join('-');
      }
    }
  }
}

@Radium
export class Row extends React.Component {
    displayName = 'Row component for grid layout'
    static propTypes = {
        style: React.propTypes.object,
        justify: React.propTypes.array,
        reverse: React.propTypes.bool
    }
    getStyles = () => {
      const { justify, reverse } = this.props;
      return {
            base: {
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: reverse ? 'row-reverse' : 'row',
                flexWrap: 'wrap',
                marginRight: '-15px',
                marginLeft: '-15px',
                justifyContent: justify && getJustifyValue('xs', justify),
                '@media (min-width: 768px)': {
                    justifyContent: justify && getJustifyValue('sm', justify)
                },
                '@media (min-width: 992px)': {
                    justifyContent: justify && getJustifyValue('md', justify)
                },
                '@media (min-width: 1200px)': {
                    justifyContent: justify && getJustifyValue('lg', justify)
                }
            }
        };
    }
    render() {
      const { style, children } = this.props;
      return (
            <div
              style={[this.getStyles(), style && style]}>
              {children}
            </div>
        );
    }
}
