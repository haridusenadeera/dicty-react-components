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
    },
    numofBins: 4
};

const domainDefaults = {
    params: {
        domainTrackHeight: 10,
        proteinTrackHeight: 18,
        topGutter: 10,
        leftSideGutter: 150,
        rightSideGutter: 50,
        trackGap: 40,
        svgWidth: 950
    },
    colors: {
        domains: {
            PROFILE: "#87D37C",
            HAMAP: "#D64541",
            PFAM: "#D2527F",
            PRINTS: "#BF55EC",
            PRODOM: "3A539B",
            SMART: "#F4D03F",
            TIGRFAMS: "#F2784B",
            PIRSF: "#6C7A89",
            SSF: "#96281B",
            GENE3D: "#E26A6A",
            PANTHER: "#9A12B3",
            TMHMM: "#2574A9",
            PHOBIUS: "#03A678",
            SIGNALP: "#F5D76E",
            unavailable: "#BDC3C7"
        },
        signature: {
            accession: "#6C7A89",
            description: "#95A5A6"
        },
        polypeptide: {
            track: "#446CB3",
            label: "#FFFFCC"
        }
    }
};

export { domainProps, domainDefaults };
