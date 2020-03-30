import React, { Component } from 'react';
import * as d3 from 'd3';
import '../../App.css';
class Scene extends Component {

    constructor(props) {
        super(props)
        this.draw = this.draw.bind(this);
    }
    componentDidMount() {
        console.log(this.props.value)
        this.draw()
    }

    componentDidUpdate() {
        console.log(this.props.value)
        this.draw()
    }

    draw_end_start(svg, starting_position_x, starting_position_y, height_veritcal_line, length) {
        // Start arrow
        svg.append("svg:line")
            .attr("x1", starting_position_x)
            .attr("y1", starting_position_y - height_veritcal_line)
            .attr("x2", starting_position_x + 2.5)
            .attr("y2", starting_position_y - height_veritcal_line + 6)
            .style("stroke", "black");

        svg.append("svg:line")
            .attr("x1", starting_position_x)
            .attr("y1", starting_position_y - height_veritcal_line)
            .attr("x2", starting_position_x - 2.5)
            .attr("y2", starting_position_y - height_veritcal_line + 6)
            .style("stroke", "black");

        svg.append("svg:line")
            .attr("x1", starting_position_x)
            .attr("y1", starting_position_y)
            .attr("x2", starting_position_x)
            .attr("y2", starting_position_y - height_veritcal_line)
            .style("stroke", "black");
        // Start arrow end

        // End arrow 
        svg.append("svg:line")
            .attr("x1", starting_position_x + length)
            .attr("y1", starting_position_y - height_veritcal_line)
            .attr("x2", starting_position_x + 2.5 + length)
            .attr("y2", starting_position_y - height_veritcal_line + 6)
            .style("stroke", "black");

        svg.append("svg:line")
            .attr("x1", starting_position_x + length)
            .attr("y1", starting_position_y - height_veritcal_line)
            .attr("x2", starting_position_x - 2.5 + length)
            .attr("y2", starting_position_y - height_veritcal_line + 6)
            .style("stroke", "black");

        svg.append("svg:line")
            .attr("x1", starting_position_x + length)
            .attr("y1", starting_position_y)
            .attr("x2", starting_position_x + length)
            .attr("y2", starting_position_y - height_veritcal_line)
            .style("stroke", "black");
        // End arrow end
    }

    draw_arrow(svg, starting_position_x, starting_position_y, height_veritcal_line, i) {
        svg.append("svg:line")
            .attr("x1", starting_position_x + i)
            .attr("y1", starting_position_y - height_veritcal_line)
            .attr("x2", starting_position_x + i + 2.5)
            .attr("y2", starting_position_y - height_veritcal_line + 6)
            .style("stroke", "black");

        svg.append("svg:line")
            .attr("x1", starting_position_x + i)
            .attr("y1", starting_position_y - height_veritcal_line)
            .attr("x2", starting_position_x + i - 2.5)
            .attr("y2", starting_position_y - height_veritcal_line + 6)
            .style("stroke", "black");

        svg.append("svg:line")
            .attr("x1", starting_position_x + i)
            .attr("y1", starting_position_y)
            .attr("x2", starting_position_x + i)
            .attr("y2", starting_position_y - height_veritcal_line)
            .style("stroke", "black");
    }

    draw_point_arrow(svg, starting_position_x, starting_position_y, height_veritcal_line, length) {
        svg.append("svg:line")
            .attr("x1", starting_position_x)
            .attr("y1", starting_position_y - height_veritcal_line + 40)
            .attr("x2", starting_position_x + 2.5)
            .attr("y2", starting_position_y - height_veritcal_line + 6 + 40)
            .style("stroke", "black");

        svg.append("svg:line")
            .attr("x1", starting_position_x)
            .attr("y1", starting_position_y - height_veritcal_line + 40)
            .attr("x2", starting_position_x - 2.5)
            .attr("y2", starting_position_y - height_veritcal_line + 6 + 40)
            .style("stroke", "black");
    }

    supportchoice = (svg, starting_position_x, starting_position_y, length, height_veritcal_line, radius_of_circle, center_of_circle_y) => {
        // console.log(this.supportChoice.value)
        if (this.supportChoice.value !== '') {
            console.log(this.supportChoice.value)
            if (this.supportChoice.value === 'Cantilever') {
                console.log("hello34");
                svg.append("svg:line")
                    .attr("x1", starting_position_x + length)
                    .attr("y1", starting_position_y + 30)
                    .attr("x2", starting_position_x + length)
                    .attr("y2", starting_position_y - 10)
                    .style("stroke", "black");
                for (var i = 0; i < 30; i = i + 5) {
                    svg.append("svg:line")
                        .attr("x1", starting_position_x + length)
                        .attr("y1", starting_position_y + i)
                        .attr("x2", starting_position_x + length + height_veritcal_line)
                        .attr("y2", starting_position_y + i - 2.5)
                        .style("stroke", "black");
                }

            }
            if (this.supportChoice.value === 'Simply Supported') {
                svg.append('circle')
                    .attr('cx', starting_position_x + length)
                    .attr('cy', center_of_circle_y)
                    .attr('r', radius_of_circle)
                    .attr('stroke', 'black')
                    .attr('fill', "transparent")
                for (var c = 0; c < 30; c = c + 5) {
                    svg.append("svg:line")
                        .attr("x1", starting_position_x + length + c)
                        .attr("y1", starting_position_y)
                        .attr("x2", starting_position_x + length + c)
                        .attr("y2", starting_position_y - height_veritcal_line)
                        .attr("transform", function (d) { return "translate(" + -11 + "," + (2 * starting_position_x) + ")"; })
                        .style("stroke", "black");
                }


                svg.append('path')
                    .attr("d", d3.symbol().type(d3.symbolTriangle).size(500))
                    .attr("transform", function (d) { return "translate(" + starting_position_x + "," + (2 * starting_position_x + 10) + ")"; })
                    .attr('stroke', 'black')
                    .attr('fill', "transparent")
                for (var t = 0; t < 30; t = t + 6) {
                    svg.append("svg:line")
                        .attr("x1", starting_position_x + t)
                        .attr("y1", starting_position_y)
                        .attr("x2", starting_position_x + t)
                        .attr("y2", starting_position_y - height_veritcal_line)
                        .attr("transform", function (d) { return "translate(" + -10 + "," + (2 * starting_position_x) + ")"; })
                        .style("stroke", "black");
                }

            }
            if (this.supportChoice.value === 'Fixed at both side') {
                svg.append("svg:line")
                    .attr("x1", starting_position_x + length)
                    .attr("y1", starting_position_y + 30)
                    .attr("x2", starting_position_x + length)
                    .attr("y2", starting_position_y - 10)
                    .style("stroke", "black");
                svg.append("svg:line")
                    .attr("x1", starting_position_x)
                    .attr("y1", starting_position_y + 30)
                    .attr("x2", starting_position_x)
                    .attr("y2", starting_position_y - 10)
                    .style("stroke", "black");
                for (var k = 0; k < 30; k = k + 5) {
                    svg.append("svg:line")
                        .attr("x1", starting_position_x + length)
                        .attr("y1", starting_position_y + k)
                        .attr("x2", starting_position_x + length + height_veritcal_line)
                        .attr("y2", starting_position_y + k - 2.5)
                        .style("stroke", "black");
                }
                for (var j = 0; j < 30; j = j + 5) {
                    svg.append("svg:line")
                        .attr("x1", starting_position_x)
                        .attr("y1", starting_position_y + j)
                        .attr("x2", starting_position_x - height_veritcal_line)
                        .attr("y2", starting_position_y + j + 2.5)
                        .style("stroke", "black");
                }

            }
        }
    }

    loadChoice = () => {
        console.log(this.props.loadValue)
    }

    draw() {
        // let scene_size = document.getElementById("D3line").getBoundingClientRect();
        // console.log(scene_size)
        var chartDiv = document.getElementById("D3line");

        // Extract the width and height that was computed by CSS.
        var margin = { top: 30, right: 20, bottom: 30, left: 50 },
            height = 190 - margin.top - margin.bottom,
            // width = scene_size.width - margin.left - margin.right;
            width = chartDiv.clientWidth;

        var starting_position_x = 30;
        var starting_position_y = 40;
        var height_veritcal_line = 20;
        var radius_of_circle = 16;
        var center_of_circle_y = 68;
        // var length_multiplier = 300;
        // var start_length = 2 * length_multiplier;
        // var end_length = 3.2 * length_multiplier;
        // var length = end_length - start_length;
        // var length = 700;
        var length = width - 300;

        d3.select(chartDiv).select("svg").remove();
        var svg = d3.select(chartDiv)
            .append("svg:svg")
            .attr("height", height + margin.top + margin.bottom)
            .attr("width", width + margin.left + margin.right)



        //main black line
        svg.append("svg:line")
            .attr("x1", starting_position_x)
            .attr("y1", starting_position_y + 10)
            .attr("x2", starting_position_x + length)
            .attr("y2", starting_position_y + 10)
            .style("stroke", "black");

        //main grey line
        svg.append("svg:line")
            .attr("x1", starting_position_x)
            .attr("y1", starting_position_y * 3)
            .attr("x2", starting_position_x + length)
            .attr("y2", starting_position_y * 3)
            .style("stroke", "#808080")
        //slint line
        svg.append("svg:line")
            .attr("x1", starting_position_x + 5.5)
            .attr("y1", starting_position_y * 3 - 5.5)
            .attr("x2", starting_position_x - 5.5)
            .attr("y2", starting_position_y * 3 + 5)
            .style("stroke", "#808080")
        svg.append("svg:line")
            .attr("x1", starting_position_x + length + 5.5)
            .attr("y1", starting_position_y * 3 - 5.5)
            .attr("x2", starting_position_x + length - 5.5)
            .attr("y2", starting_position_y * 3 + 5)
            .style("stroke", "#808080")
        //straight line
        svg.append("svg:line")
            .attr("x1", starting_position_x + length)
            .attr("y1", starting_position_y * 3 - 10)
            .attr("x2", starting_position_x + length)
            .attr("y2", starting_position_y * 3 + 10)
            .style("stroke", "#808080")
        svg.append("svg:line")
            .attr("x1", starting_position_x)
            .attr("y1", starting_position_y * 3 - 10)
            .attr("x2", starting_position_x)
            .attr("y2", starting_position_y * 3 + 10)
            .style("stroke", "#808080")

        //text on grey line
        svg.append("text")
            // .attr("transform", "translate(" + (width / 2) + " ," + (height + margin.top + 40) + ")")
            .style("text-anchor", "middle")
            .attr("x", starting_position_x + length / 2)
            .attr("y", starting_position_y * 3 - 10)
            .style("text-anchor", "middle")
            .style("stroke", "#808080")
            .text(this.beamLength.value);

        this.supportchoice(svg, starting_position_x, starting_position_y, length, height_veritcal_line, radius_of_circle, center_of_circle_y);
        this.loadChoice(svg, starting_position_x, starting_position_y, length, height_veritcal_line);
        //UDL
        // svg.append("svg:line")
        //     .attr("x1", starting_position_x)
        //     .attr("y1", starting_position_y)
        //     .attr("x2", starting_position_x + length)
        //     .attr("y2", starting_position_y)
        //     .style("stroke", "black");

        //pointload
        // svg.append("svg:line")
        //     .attr("x1", starting_position_x)
        //     .attr("y1", starting_position_y + 20)
        //     .attr("x2", starting_position_x)
        //     .attr("y2", starting_position_y + 40)
        //     .style("stroke", "black");

        // svg.append("path")
        //     .attr("d", "M 40 60 A 10 10 0 1 0 20 20")
        //     .attr("stroke", "grey")
        //     .attr("stroke", "grey")
        //     .attr("stroke-width", "1.5")
        //     .attr("fill", "transparent")
        //     .attr("class", "edges");


        // this.draw_point_arrow(svg, starting_position_x, starting_position_y, height_veritcal_line, length)
        // this.draw_end_start(svg, starting_position_x, starting_position_y, height_veritcal_line, length);
        // console.log(length);
        // for (var i = 10; i < length; i = i + 10) {
        //     this.draw_arrow(svg, starting_position_x, starting_position_y, height_veritcal_line, i);
        // }

        // Redraw based on the new size whenever the browser window is resized.
        window.addEventListener("resize", this.draw)
    }
    render() {
        this.beamLength = this.props.value["Length of beam"];
        this.supportChoice = this.props.value["Support Choice"]
        return (
            <div className="chart" id="D3line" >
                {/* <svg width="960" height="500" style={{ border: 'solid 1px #eee', borderBottom: 'solid 1px #ccc' }} /> */}
            </div>
        )
    }
}

export default Scene;
