import React from 'react';
import Container from '../../src/layout/container';
import Row from '../../src/layout/row';
import Column from '../../src/layout/column';


const bgStyle = {
      background: '#F5AB35',
      border: '2px solid #3A539B',
      color: '#22313F',
      minHeight: 80,
      textAlign: 'center',
      paddingTop: '15px',
      paddingBottom: '15px'
};
const text = <p>Responsive layout</p>;
export class Responsive extends React.Component {
    displayName = 'Makes a responsive grid'
    render() {
      return (
            <Container>
              <Row>
                <Column
                  xsSpan={12}
                  smSpan={3}
                  mdSpan={2}
                  lgSpan={1}
                  style={bgStyle}>
                  {text}
                </Column>
                <Column
                  xsSpan={6}
                  smSpan={6}
                  mdSpan={8}
                  lgSpan={10}
                  style={bgStyle}>
                  {text}
                </Column>
                <Column
                  xsSpan={6}
                  smSpan={3}
                  mdSpan={2}
                  lgSpan={1}
                  style={bgStyle}>
                  {text}
                </Column>
              </Row>
              <Row>
                <Column
                  xsSpan={12}
                  smSpan={3}
                  mdSpan={2}
                  lgSpan={1}
                  style={bgStyle}>
                  {text}
                </Column>
                <Column
                  xsSpan={12}
                  smSpan={9}
                  mdSpan={10}
                  lgSpan={11}
                  style={bgStyle}>
                  {text}
                </Column>
              </Row>
            </Container>
        );
    }
}
