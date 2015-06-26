let d3 = require('d3');

export function getxScale(len, params) {
    const { svgWidth, leftSideGutter, rightSideGutter } = params;
    const maxRange = svgWidth - (leftSideGutter + rightSideGutter);
    const xScale = d3.scale.linear()
                    .domain([1, len])
                    .range([1, maxRange]);
    return xScale;
}

export function getHeight(totalAnalysis, params) {
    const { domainTrackHeight, trackGap, proteinTrackHeight, topGutter } = params;
    const height = totalAnalysis * domainTrackHeight // Height of all tracks
                    + totalAnalysis * trackGap // Gap between all domain tracks
                    + proteinTrackHeight + topGutter * 2 // Height of protein tracks and vertical gutter
                    + domainTrackHeight * 4; // To accomodate display of scaling information
    return height;
}


export function getBins(num, binSize) {
    let bins = [];
    for (let i = 0; i <= num; i = i + binSize) {
        bins.push(i);
    }
    bins[0] = 1;
    return bins;
}
