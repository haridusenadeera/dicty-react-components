import React from 'react';
import {Container} from '../../src/layout/container';
import {Row} from '../../src/layout/row';
import {Column} from '../../src/layout/column';

const bgStyle = {
      background: '#F5D76E',
      border: '2px solid #3A539B',
      color: '#22313F',
      minHeight: 80,
      textAlign: 'center',
      paddingTop: '15px',
      paddingBottom: '15px'
};
const text = <p>Offset layout</p>;
export class Offset extends React.Component {
    displayName = 'Makes a responsive grid with column offset'
    render() {
      return (
            <Container>
                <Row>
                    <Column
                        xsSpan={2}
                        xsOffset={10}
                        style={bgStyle}>
                        {text}
                    </Column>
                </Row>
                <Row>
                    <Column
                        xsSpan={4}
                        xsOffset={8}
                        style={bgStyle}>
                        {text}
                    </Column>
                </Row>
                <Row>
                    <Column
                        xsSpan={10}
                        xsOffset={2}
                        style={bgStyle}>
                        {text}
                    </Column>
                </Row>
            </Container>
        );
    }
}
