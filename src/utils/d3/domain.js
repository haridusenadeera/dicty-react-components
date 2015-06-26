//import { d3 } from 'd3';
let d3 = require('d3');

class Container {
    constructor(elem, props) {
        this.elem = elem;
        this.params = props.params;
        this.data = props.data;
        this.colors = props.colors;
        this._total_analysis = parseInt(this.data.total_analysis);
        this._width = this.params.svgWidth;
        this._height = this._total_analysis  * this.params.domainTrackHeight // Height of all tracks
                        + this._total_analysis  * this.params.trackGap // Gap between all domain tracks
                        + this.params.proteinTrackHeight + this.params.topGutter * 2 // Height of protein tracks and vertical gutter
                        + this.params.domainTrackHeight * 4; // To accommodate for displaying scaling information
        this._container = d3.select(this.elem)
                            .append("svg")
                            .attr("width", this._width)
                            .attr("height", this._height);
        this._xscale = d3.scale.linear()
                        .domain([1,this.data.length])
                        .range([1,
                               this._width
                               - (this.params.leftSideGutter
                                  + this.params.rightSideGutter
                                )
                        ]);
    }
    getWidth() {
        return this._width;

    }
    getHeight(){
        return this._height;

    }
    getSvg(){
        return this._container;
    }
    getXscale() {
        return this._xscale;
    }
};

class ContainerGroup {
    constructor(container)  {
        this.params = container.params;
        this.data = container.data;
        this.colors = container.colors;
        this._group = container.getSvg().append('g');
        this._container = container;
    }
    getWidth() {
        return this._container.getWidth();

    }
    getHeight(){
        return this._container.getHeight();

    }
    getSvg(){
        return this._group;
    }
    getXscale() {
        return this._container.getXscale();
    }
}

let domain = {
    getBins(num, binSize) {
        let bins = [];
        for (let i = 0; i <= num; i = i + binSize) {
            bins.push(i);
        }
        bins[0] = 1;
        return bins;
    },
    create(elem,props) {
        const svgContainer = new Container(elem, props);
        const domainGroup = new ContainerGroup(svgContainer);
        const descGroup = new ContainerGroup(svgContainer);
        const vertScaleGroup = new ContainerGroup(svgContainer);
        const vertTickGroup = new ContainerGroup(svgContainer);

        // draw the vertical ticks
        const numBins = 4;
        const binSize = Math.round(svgContainer.data.length / numBins);
        const bins = this.getBins(svgContainer.data.length, binSize);
        this.drawVerticalTick(vertTickGroup, bins);
        // draw the vertical scale
        this.drawVerticalScale(vertScaleGroup, bins);

        // draw the polypeptide track and the label in the same group
        const polyGroup = new ContainerGroup(domainGroup);
        this.drawPolypeptide(polyGroup);
        // draw the polypeptide label
        this.drawPolypeptideLabel(polyGroup);

        // Now add all the domain tracks
        let index = 0;
        for (let signature_id in svgContainer.data.domains) {
            // Create a new group container for every domain
            let subDomainGroup = new ContainerGroup(domainGroup);
            // Draw the protein track
            this.drawDomain(subDomainGroup, index, svgContainer.data.domains[signature_id]);
            // Add the siganture description
            this.drawSignatureDesc(subDomainGroup, index, svgContainer.data.domains[signature_id], signature_id);
            // Create a new group container for every description
            let subDescGroup = new ContainerGroup(descGroup);
            // Add the siganture id label
            this.drawSignatureId(subDescGroup, index, signature_id);
            index = ++index;
        }

    },
    drawPolypeptide(container) {
        const xScale = container.getXscale();
        container.getSvg().append("line")
            .attr("x1", container.params.leftSideGutter)
            .attr("y1", container.params.topGutter * 2)
            .attr("x2", container.params.leftSideGutter + xScale(container.data.length))
            .attr("y2", container.params.topGutter * 2)
            .style("stroke", container.colors.polypeptide.track)
            .style("stroke-width", container.params.proteinTrackHeight);
    },
    drawPolypeptideLabel(container) {
        const xScale = container.getXscale();
        container.getSvg().append("text")
            .attr("x", container.params.leftSideGutter + xScale(container.data.length/2))
            .attr("y", container.params.topGutter * 2)
            .attr("dy", 4)
            .attr("font-family", "Tahoma,Gill Sans,sans-serif")
            .attr("font-size", 14)
            .attr("text-anchor", "end")
            .attr("font-weight", "bold")
            .attr("fill", container.colors.polypeptide.label)
            .text(container.data.id);
    },
    // draw the domain tracks in form of rectangles
    drawDomain(container, index, data) {
        const params = container.params;
        const colors = container.colors;
        const xScale = container.getXscale();
        // The y coord for all the elements remain const for every signature
        const ycoord = params.topGutter + params.proteinTrackHeight
                    + (params.domainTrackHeight * index)
                    + (params.trackGap * (index + 1));

        container.getSvg().selectAll("rect.tracks")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", d => params.leftSideGutter + xScale((parseInt(d.start))))
            .attr("y", ycoord )
            .attr("width", d =>  xScale(parseInt(d.end) - parseInt(d.start)))
            .attr("height", params.domainTrackHeight)
            .attr("rx", 3)
            .attr("ry", 3)
            .attr("fill", d => {
                if (colors.domains[d.analysis]) {
                    return colors.domains[d.analysis];
                }
                else {
                    return colors.domains["unavailable"];
                }
            });

        // draw the separtor dotted lines in between
        // Skip if there is only one domain for this signature
        if (data.length === 1) {
            return;
        }
        container.getSvg().selectAll("line")
            .data(data)
            .enter()
            .append("line")
            .attr("x1", (d, i) => {
                if (i != (data.length - 1)) {
                    if (data[i].end < data[i + 1].start) {
                        return params.leftSideGutter + xScale(data[i].end)
                    }
                }
            })
            .attr("y1", ycoord + 5)
            .attr("x2", (d, i) => {
                if (i != (data.length - 1)) {
                    if (data[i].end < data[i + 1].start) {
                        return params.leftSideGutter + xScale(data[i + 1].start)
                    }
                }
            })
            .attr("y2", ycoord + 5)
            .style("stroke", "black")
            .style("stroke-dasharray", ("2, 2"));
    },
    drawSignatureId(container, index, signature_id) {
        const xScale = container.getXscale();
        // Add the signature_id label
        container.getSvg().append("text")
            .attr("x", container.params.leftSideGutter )
            .attr("y", container.params.topGutter + container.params.proteinTrackHeight
                        + (container.params.trackGap * (index + 1))
                        + (container.params.domainTrackHeight * index )
            )
            .attr("dy", 9) // shift down along the y axis
            .attr("dx", -9) // push it back from domain boundaries
            .attr("text-anchor", "end")
            .text(signature_id)
            .attr("font-family", "Verdana,Arial,sans-serif")
            .attr("font-size", "15px")
            .attr("font-weight", "bold");
    },
    drawSignatureDesc(container, index, data, signature_id) {
        const xScale = container.getXscale();
        // Add the signature description
        container.getSvg().append("text")
            .attr("x", container.params.leftSideGutter + xScale(parseInt(data[0].start)))
            .attr("y", container.params.topGutter + container.params.proteinTrackHeight
                        + (container.params.trackGap * (index + 1))
                        + (container.params.domainTrackHeight * index )
            )
            .attr("dy", -5) // shift up along the axis
            .text(data[0].interpro_desc ? data[0].interpro_desc : "Unknown signature")
            .attr("font-family", "Helvetica,Arial,Tahoma,sans-serif")
            .attr("font-size", "15px")
            .attr("font-weight", "900")
            .attr("fill", container.colors.signature.description);
    },
    drawVerticalTick(container, bins) {
        const xScale = container.getXscale();
        const svg = container.getSvg();
        svg.style("opacity", 0.38);
        svg.selectAll("line.verticalTick")
            .data(bins)
            .enter()
            .append("line")
            .attr("x1", d => container.params.leftSideGutter + xScale(d))
            .attr("y1", 1 )
            .attr("x2", d => container.params.leftSideGutter + xScale(d))
            .attr("y2", container.getHeight() - container.params.domainTrackHeight * 2)
            .style("stroke", "#A38F84");

        // Now draw two horizontal lines on top and bottom of ticks
        // top line
        svg.append("line")
            .attr("x1", container.params.leftSideGutter)
            .attr("y1", 1)
            .attr("x2", container.params.leftSideGutter + xScale(bins[bins.length - 1]))
            .attr("y2", 1)
            .style("stroke", "#A38F84");

        // bottom line
        svg.append("line")
            .attr("x1", container.params.leftSideGutter)
            .attr("y1", container.getHeight() - container.params.domainTrackHeight * 2)
            .attr("x2", container.params.leftSideGutter + xScale(bins[bins.length - 1]))
            .attr("y2", container.getHeight() - container.params.domainTrackHeight * 2)
            .style("stroke", "#A38F84");
    },
    drawVerticalScale(container, bins) {
        const xScale = container.getXscale();
        container.getSvg().selectAll("text.verticalScale")
            .data(bins)
            .enter()
            .append("text")
            .attr("x", d => container.params.leftSideGutter + xScale(d))
            .attr("y", container.getHeight() )
            .text(d => d)
            .attr("font-family", "Tahoma,Verdana,Arial,sans-serif")
            .attr("font-size", "16px");
    }
};

export { domain };
