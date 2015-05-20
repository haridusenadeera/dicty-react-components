import { d3 } from 'd3';

var domain = {
    getxScale(from,to) {
        return
            d3.scale.linear()
                .domain([1,from])
                .range([1,to]);
    },
    getContHeight(opt,data){
        return data.domains.length  * opt.domainTrackHeight
                    + data.domains.length  * opt.trackGap
                    + opt.proteinTrackHeight + opt.contGutter * 2;
    },
    getSvgCont(elem,x,y) {
        return
            d3.select(elem)
                .append("svg")
                .attr({x,y});
    },
    create(elem,opt,data) {
        let contHeight = getContHeight(opt,data);
        let svg = getSvgCont(elem,opt.svgWidth,contHeight);
        let xScale = getxScale(data.length,opt.svgWidth - opt.contGutter * 2);

        svg.append("rect")
            .attr("x", opt.contGutter)
            .attr("y", opt.contGutter)
            .attr("width", xScale(data.length))
            .attr("height", opt.proteinTrackHeight);

        svg.selectAll("rect.tracks")
                .data(data.domains)
                .enter()
                .append("rect")
                .attr("x", d => opt.contGutter + xScale(d.start))
                .attr("y", (d, i) =>
                    opt.contGutter + opt.proteinTrackHeight + (opt.domainTrackHeight * i) + (opt.trackGap * (i + 1))
                )
                .attr("width", (d, i) =>  xScale(d.end - d.start));
                .attr("height", opt.domainTrackHeight);
    }
};

export domain;
