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
export class Justify extends React.Component {
    displayName = 'Makes a responsive grid'
    render() {
      return (
            <Container>
              <Row justify={['start-xs']}>
                <Column
                  xsSpan={3}
                  style={bgStyle}>
                  <p><b>Left</b></p>
                </Column>
              </Row>
              <Row justify={['center-xs']}>
                <Column
                  xsSpan={3}
                  style={bgStyle}>
                  <p><b>Center</b></p>
                </Column>
              </Row>
              <Row justify={['end-xs']}>
                <Column
                  xsSpan={3}
                  style={bgStyle}>
                  <p><b>Right</b></p>
                </Column>
              </Row>
              <Row justify={['around-xs']}>
                <Column
                  xsSpan={2}
                  style={bgStyle}>
                  <p><b>Space around</b></p>
                </Column>
                <Column
                  xsSpan={2}
                  style={bgStyle}>
                  <p><b>Space around</b></p>
                </Column>
                <Column
                  xsSpan={2}
                  style={bgStyle}>
                  <p><b>Space around</b></p>
                </Column>
              </Row>
              <Row justify={['between-xs']}>
                <Column
                  xsSpan={2}
                  style={bgStyle}>
                  <p><b>Space between</b></p>
                </Column>
                <Column
                  xsSpan={2}
                  style={bgStyle}>
                  <p><b>Space between</b></p>
                </Column>
                <Column
                  xsSpan={2}
                  style={bgStyle}>
                  <p><b>Space between</b></p>
                </Column>
              </Row>
            </Container>
        );
    }
}
