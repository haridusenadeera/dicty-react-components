import React from 'react';
import Radium from 'radium';

const scre = /(xs|sm|md|lg)$/;

function screen2flex() {
  const base = {
        center: 'center',
        start: 'flex-start',
        end: 'flex-end',
        around: 'space-around',
        between: 'space-between'
    };
  let flexmap = {};
  ['xs', 'sm', 'md', 'lg'].forEach(screen => {
    for (let t in base) {
      flexmap[[t, screen].join('-')] = base[t];
    }
  });
  return flexmap;
}

const flexmap = screen2flex();

function hasJustify(screen, params) {
  for (let i = 0; i < params.length; i = i + 1) {
    if (scre.test(params[i])) {
      let match = params[i].match(scre);
      if (screen === match[1]) {
        return true;
      }
    }
  }
  return false;
}

function getJustify(screen, params) {
  for (let i = 0; i < params.length; i = i + 1) {
    if (scre.test(params[i])) {
      let match = params[i].match(scre);
      if (screen === match[1]) {
        return flexmap[params[i]];
      }
    }
  }
  return false;
}


@Radium
export default class Row extends React.Component {
    displayName = 'Row component for grid layout'
    static propTypes = {
        style: React.PropTypes.object,
        justify: React.PropTypes.array,
        reverse: React.PropTypes.bool
    }
    getStyles = () => {
      const { justify, reverse } = this.props;
      const defJustify = justify && hasJustify('xs', justify) ?
                    getJustify('xs', justify) : 'flex-start';

      return {
            base: {
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: reverse ? 'row-reverse' : 'row',
                flexWrap: 'wrap',
                marginRight: '-15px',
                marginLeft: '-15px',
                justifyContent: defJustify,
                '@media (min-width: 768px)': {
                    justifyContent: justify && hasJustify('sm', justify) ?
                        getJustify('sm', justify) : defJustify
                },
                '@media (min-width: 992px)': {
                    justifyContent: justify && hasJustify('md', justify) ?
                        getJustify('md', justify) : defJustify
                },
                '@media (min-width: 1200px)': {
                    justifyContent: justify && hasJustify('lg', justify) ?
                        getJustify('lg', justify) : defJustify
                }
            }
        };
    }
    render() {
      const { style, children } = this.props;
      return (
            <div
              style={[this.getStyles().base, style && style]}>
              {children}
            </div>
        );
    }
}

