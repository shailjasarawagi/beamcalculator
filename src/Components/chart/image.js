import React, { Component } from 'react';
import * as d3 from 'd3';


class d3Chart extends Component {


    componentDidMount() {
        this.draw()
    }

    componentDidUpdate() {
        this.updateimage()
    }

    draw() {
        var svg = d3.select("#D3line")
            .append("svg:svg")
            .attr("width", 700)
            .attr("height", 200);


        svg.append("svg:line")
            .attr("x1", 40)
            .attr("y1", 50)
            .attr("x2", 750)
            .attr("y2", 50)
            .style("stroke", "black");



        //line              
        svg.append("line")
            .attr("x1", 100)
            .attr("y1", 80)
            .attr("x2", 100)
            .attr("y2", 130)
            .attr("stroke-width", 1)
            .attr("stroke", "black")
            .attr("marker-end", "url(#triangle)");

        svg.append("svg:defs").append("svg:marker")
            .attr("id", "triangle")
            .attr("refX", 6)
            .attr("refY", 6)
            .attr("markerWidth", 30)
            .attr("markerHeight", 30)
            .attr("orient", "auto")
            .append("path")
            .attr("d", "M 0 0 12 6 0 12 3 6")
            .style("fill", "black");


        //arrow
        svg.append("svg:defs").append("svg:marker")
            .attr("id", "triangle")
            .attr("markerWidth", 30)
            .attr("markerHeight", 30)
            .append("path")
            .attr("d", "M 0 0 12 6 0 12 3 6")
            .style("fill", "black");

        // path
        svg.append("path")
            .attr("marker-end", "url(#triangle)")
            .attr("d", "M 150 25 A  30  30 0 1 1 150 75")
            //               "M" + d.source.x + "," + d.source.y + "A" + dr + "," + dr + " 0 0,1 " + d.target.x + "," + d.target.y;
            //   });
            .attr("stroke", "grey")
            .attr("stroke-width", "1.5")
            .attr("fill", "transparent")
            .attr("class", "edges");

        svg.append("path")
            .attr("marker-end", "url(#triangle)")

            .attr("d", "M 300 80 A  30  30 0 1 0 300 40")
            .attr("stroke", "grey")
            .attr("stroke-width", "1.5")
            .attr("fill", "transparent")
            .attr("class", "edges");




        //UDL

        // var lineData = [{ "x": 1, "y": 10 }, { "x": 10, "y": 10 },
        // { "x": 40, "y": 10 }, { "x": 60, "y": 40 },
        // { "x": 80, "y": 5 }, { "x": 100, "y": 60 }];

        // var lineFunction = d3.line()
        //     .x(function (d) { return d.x; })
        //     .y(function (d) { return d.y; })


        // svg.append("path")
        //     .attr("d", lineFunction(lineData))
        //     .attr("stroke", "blue")
        //     .attr("stroke-width", 2)
        //     .attr("fill", "none");



    }
    updateimage = () => {

    }

    render() {

        return (

            <div className="chart" id="D3line">

                {/* <svg width="960" height="500" style={{ border: 'solid 1px #eee', borderBottom: 'solid 1px #ccc' }} /> */}

            </div>

        )
    }
}

export default d3Chart;