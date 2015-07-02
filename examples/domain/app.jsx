import React from 'react';
import InterProDomain from '../../src/InterProDomain';
import { data as protein } from '../../src/data/interpro';
class App extends React.Component {
    render() {
        return (
            <InterProDomain data={protein}/>
        )
    }
}
React.render(<App />, document.body);
