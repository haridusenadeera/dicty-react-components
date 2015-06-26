import React from 'react';
const domainProps = {
        params: {
            domainTrackHeight  : React.PropTypes.number,
            proteinTrackHeight : React.PropTypes.number,
            leftSideGutter     : React.PropTypes.number,
            rightSideGutter    : React.PropTypes.number,
            topGutter          : React.PropTypes.number,
            trackGap           : React.PropTypes.number,
            svgWidth           : React.PropTypes.number
        },
        colors: {
            domains: React.PropTypes.shape({
                PROSITE     : React.PropTypes.string,
                HAMAP       : React.PropTypes.string,
                PFAM        : React.PropTypes.string,
                PRINTS      : React.PropTypes.string,
                PRODOM      : React.PropTypes.string,
                SMART       : React.PropTypes.string,
                TIGRFAMS    : React.PropTypes.string,
                SUPERFAMILY : React.PropTypes.string,
                GENE3D      : React.PropTypes.string,
                PANTHER     : React.PropTypes.string,
                TMHMM       : React.PropTypes.string,
                PHOBIUS     : React.PropTypes.string,
                SIGNALP     : React.PropTypes.string,
                PIRSF       : React.PropTypes.string
            }),
            signature: React.PropTypes.shape({
                accession   : React.PropTypes.string,
                description : React.PropTypes.string
            }),
            protein: React.PropTypes.string
        }
};

export { domainProps };
