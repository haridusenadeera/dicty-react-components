import React from 'react';
import {Responsive} from './Responsive';
import {Offset} from './Offset';
import {Justify} from './Justify';
import Container from '../../src/layout/container';

class ResponsiveApp extends React.Component {
    displayName = 'App to display the responsive layout'
    render() {
        return (
            <Container>
                <h1>Responsive</h1>
                <Responsive/>
            </Container>
        );
    }
}

class OffsetApp extends React.Component {
    displayName = 'App to display offset layout'
    render() {
        return (
            <Container>
                <h1>Offset</h1>
                <Offset/>
            </Container>
        );
    }
}

class JustifyApp extends React.Component {
    displayName = 'App to display offset layout'
    render() {
        return (
            <Container>
                <h1>Alignment</h1>
                <Justify/>
            </Container>
        );
    }
}

const content = document.getElementById('responsive');
React.render(<ResponsiveApp/>, content);
React.render(<OffsetApp/>, document.getElementById('offset'));
React.render(<JustifyApp/>, document.getElementById('justify'));

