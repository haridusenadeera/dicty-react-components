import React from 'react';
import Radium from 'radium';


function colCountToPercent(count) {
  return (count / 12) * 100 + '%';
}

function getColumnValues() {
  let values = [];
  for (let i = 1; i <= 12; i = i + 1) {
    values.push(i);
  }
  values.push('auto');
  return values;
}

const colValues = React.PropTypes.oneOf(getColumnValues());

@Radium
export class Column extends React.Component {
    displayName = 'Column component for grid layout'
    static propTypes = {
        xsSpan: colValues,
        smSpan: colValues,
        mdSpan: colValues,
        lgSpan: colValues,
        xsOffset: colValues,
        smOffset: colValues,
        mdOffset: colValues,
        lgOffset: colValues,
        style: React.PropTypes.object
    }
    render() {
      const { children, style } = this.props;
      const defStyle = this.getStyles();
      let allStyles
            = ['xsSpan', 'smSpan', 'mdSpan', 'lgSpan'].map(param => {
              if (this.props[param]) {
                if (this.props[param] === 'auto') {
                  return defStyle[param].auto;
                }
                return defStyle[param].base;
              }
            }, this);
      allStyles.push(style && style);
      return (
            <div style={allStyles}>
              {children}
            </div>
        );
    }
    getStyles = () => {
      const { xsSpan, smSpan, mdSpan, lgSpan } = this.props;
      const { xsOffset, smOffset, mdOffset, lgOffset } = this.props;
      const xsStyles = {
            base: {
                boxSizing: 'border-box',
                paddingLeft: '15px',
                paddingRight: '15px',
                minHeight: '1px',
                flexGrow: 0,
                flexShrink: 0,
                flexBasis: colCountToPercent(xsSpan),
                marginLeft: xsOffset ? colCountToPercent(xsOffset) : 0
            },
            auto: {
                boxSizing: 'border-box',
                paddingLeft: '15px',
                paddingRight: '15px',
                flexGrow: 1,
                flexBasis: 0
            }
        };
      const smStyles = {
            base: {
                '@media (min-width: 768px)': {
                    flexBasis: colCountToPercent(smSpan),
                    marginLeft: smOffset ? colCountToPercent(smOffset) : 0
                }
            },
            auto: {
                '@media (min-width: 768px)': {
                    flexGrow: 1,
                    flexBasis: 0
                }
            }

        };
      const mdStyles = {
            base: {
                '@media (min-width: 992px)': {
                    flexBasis: colCountToPercent(mdSpan),
                    marginLeft: mdOffset ? colCountToPercent(mdOffset) : 0
                }
            },
            auto: {
                '@media (min-width: 992px)': {
                    flexGrow: 1,
                    flexBasis: 0
                }
            }

        };
      const lgStyles = {
            base: {
                '@media (min-width: 1200px)': {
                    flexBasis: colCountToPercent(lgSpan),
                    marginLeft: lgOffset ? colCountToPercent(lgOffset) : 0
                }
            },
            auto: {
                '@media (min-width: 1200px)': {
                    flexGrow: 1,
                    flexBasis: 0
                }
            }

        };
      return {
            xsSpan: xsStyles,
            smSpan: smStyles,
            mdSpan: mdStyles,
            lgSpan: lgStyles
        };
    }
}
