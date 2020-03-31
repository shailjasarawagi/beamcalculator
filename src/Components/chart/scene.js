import React, { Component } from 'react';
import * as d3 from 'd3';
import '../../App.css';
class Scene extends Component {

    constructor(props) {
        super(props)
        this.draw = this.draw.bind(this);
    }
    componentDidMount() {
        // console.log(this.props.value)
        this.draw()
    }

    componentDidUpdate() {
        // console.log(this.props.value)
        this.draw()
    }

    draw_end_start_up(svg, starting_position_x, starting_position_y, height_veritcal_line, length, difference) {
        // Start arrow
        svg.append("svg:line")
            .attr("x1", starting_position_x)
            .attr("y1", starting_position_y - height_veritcal_line + 30)
            .attr("x2", starting_position_x + 2.5)
            .attr("y2", starting_position_y - height_veritcal_line + 6 + 30)
            .style("stroke", "black");

        svg.append("svg:line")
            .attr("x1", starting_position_x)
            .attr("y1", starting_position_y - height_veritcal_line + 30)
            .attr("x2", starting_position_x - 2.5)
            .attr("y2", starting_position_y - height_veritcal_line + 6 + 30)
            .style("stroke", "black");

        svg.append("svg:line")
            .attr("x1", starting_position_x)
            .attr("y1", starting_position_y + 30)
            .attr("x2", starting_position_x)
            .attr("y2", starting_position_y - height_veritcal_line + 30)
            .style("stroke", "black");
        // Start arrow end

        // End arrow 
        svg.append("svg:line")
            .attr("x1", starting_position_x + difference)
            .attr("y1", starting_position_y - height_veritcal_line + 30)
            .attr("x2", starting_position_x + 2.5 + difference)
            .attr("y2", starting_position_y - height_veritcal_line + 6 + 30)
            .style("stroke", "black");

        svg.append("svg:line")
            .attr("x1", starting_position_x + difference)
            .attr("y1", starting_position_y - height_veritcal_line + 30)
            .attr("x2", starting_position_x - 2.5 + difference)
            .attr("y2", starting_position_y - height_veritcal_line + 6 + 30)
            .style("stroke", "black");

        svg.append("svg:line")
            .attr("x1", starting_position_x + difference)
            .attr("y1", starting_position_y + 30)
            .attr("x2", starting_position_x + difference)
            .attr("y2", starting_position_y - height_veritcal_line + 30)
            .style("stroke", "black");
        // End arrow end
    }

    draw_arrow_up(svg, starting_position_x, starting_position_y, height_veritcal_line, i, difference) {
        svg.append("svg:line")
            .attr("x1", starting_position_x + i)
            .attr("y1", starting_position_y - height_veritcal_line + 30)
            .attr("x2", starting_position_x + i + 2.5)
            .attr("y2", starting_position_y - height_veritcal_line + 6 + 30)
            .style("stroke", "black");

        svg.append("svg:line")
            .attr("x1", starting_position_x + i)
            .attr("y1", starting_position_y - height_veritcal_line + 30)
            .attr("x2", starting_position_x + i - 2.5)
            .attr("y2", starting_position_y - height_veritcal_line + 6 + 30)
            .style("stroke", "black");

        svg.append("svg:line")
            .attr("x1", starting_position_x + i)
            .attr("y1", starting_position_y + 30)
            .attr("x2", starting_position_x + i)
            .attr("y2", starting_position_y - height_veritcal_line + 30)
            .style("stroke", "black");
    }
    draw_end_start_down(svg, starting_position_x, starting_position_y, height_veritcal_line, length, difference) {
        // Start arrow
        svg.append("svg:line")
            .attr("x1", starting_position_x)
            .attr("y1", starting_position_y + 10)
            .attr("x2", starting_position_x - 3.5)
            .attr("y2", starting_position_y)
            .style("stroke", "black");

        svg.append("svg:line")
            .attr("x1", starting_position_x)
            .attr("y1", starting_position_y + 10)
            .attr("x2", starting_position_x + 3.5)
            .attr("y2", starting_position_y)
            .style("stroke", "black");

        svg.append("svg:line")
            .attr("x1", starting_position_x)
            .attr("y1", starting_position_y - 10)
            .attr("x2", starting_position_x)
            .attr("y2", starting_position_y + height_veritcal_line - 10)
            .style("stroke", "black");
        // Start arrow end

        // End arrow 
        svg.append("svg:line")
            .attr("x1", starting_position_x + difference)
            .attr("y1", starting_position_y + 10)
            .attr("x2", starting_position_x - 3.5 + difference)
            .attr("y2", starting_position_y)
            .style("stroke", "black");

        svg.append("svg:line")
            .attr("x1", starting_position_x + difference)
            .attr("y1", starting_position_y + 10)
            .attr("x2", starting_position_x + 3.5 + difference)
            .attr("y2", starting_position_y)
            .style("stroke", "black");

        svg.append("svg:line")
            .attr("x1", starting_position_x + difference)
            .attr("y1", starting_position_y - 10)
            .attr("x2", starting_position_x + difference)
            .attr("y2", starting_position_y + height_veritcal_line - 10)
            .style("stroke", "black");
        // End arrow end
    }

    draw_arrow_down(svg, starting_position_x, starting_position_y, height_veritcal_line, i, difference) {
        svg.append("svg:line")
            .attr("x1", starting_position_x + i)
            .attr("y1", starting_position_y + 10)
            .attr("x2", starting_position_x + i + 3.5)
            .attr("y2", starting_position_y)
            .style("stroke", "black");

        svg.append("svg:line")
            .attr("x1", starting_position_x + i)
            .attr("y1", starting_position_y + 10)
            .attr("x2", starting_position_x + i - 3.5)
            .attr("y2", starting_position_y)
            .style("stroke", "black");

        svg.append("svg:line")
            .attr("x1", starting_position_x + i)
            .attr("y1", starting_position_y - 10)
            .attr("x2", starting_position_x + i)
            .attr("y2", starting_position_y + height_veritcal_line - 10)
            .style("stroke", "black");
    }
    draw_point_arrow_down(svg, starting_position_x, starting_position_y, height_veritcal_line, length) {

        svg.append("svg:line")
            .attr("x1", starting_position_x)
            .attr("y1", starting_position_y + 10)
            .attr("x2", starting_position_x - 3.5)
            .attr("y2", starting_position_y)
            .style("stroke", "black");

        svg.append("svg:line")
            .attr("x1", starting_position_x)
            .attr("y1", starting_position_y + 10)
            .attr("x2", starting_position_x + 3.5)
            .attr("y2", starting_position_y)
            .style("stroke", "black");
    }
    draw_point_arrow_up(svg, starting_position_x, starting_position_y, height_veritcal_line, length) {
        svg.append("svg:line")
            .attr("x1", starting_position_x)
            .attr("y1", starting_position_y - height_veritcal_line + 30)
            .attr("x2", starting_position_x + 3.5)
            .attr("y2", starting_position_y - height_veritcal_line + 7 + 30)
            .style("stroke", "black");

        svg.append("svg:line")
            .attr("x1", starting_position_x)
            .attr("y1", starting_position_y - height_veritcal_line + 30)
            .attr("x2", starting_position_x - 3.5)
            .attr("y2", starting_position_y - height_veritcal_line + 7 + 30)
            .style("stroke", "black");
    }
    supportchoice = (svg, starting_position_x, starting_position_y, length, height_veritcal_line, radius_of_circle, center_of_circle_y) => {
        // console.log(this.supportChoice.value)
        if (this.supportChoice.value !== '') {
            // console.log(this.supportChoice.value)
            if (this.supportChoice.value === 'Cantilever') {
                svg.append("svg:line")
                    .attr("x1", starting_position_x + length)
                    .attr("y1", starting_position_y + 30)
                    .attr("x2", starting_position_x + length)
                    .attr("y2", starting_position_y - 10)
                    .style("stroke", "red")
                    .attr("stroke-width", "1.5");

                for (var i = 0; i < 30; i = i + 5) {
                    svg.append("svg:line")
                        .attr("x1", starting_position_x + length)
                        .attr("y1", starting_position_y + i)
                        .attr("x2", starting_position_x + length + height_veritcal_line)
                        .attr("y2", starting_position_y + i - 2.5)
                        .attr("stroke-width", "1.5")
                        .style("stroke", "red");
                }

            }
            if (this.supportChoice.value === 'Simply Supported') {
                svg.append('circle')
                    .attr('cx', starting_position_x + length)
                    .attr('cy', center_of_circle_y)
                    .attr('r', radius_of_circle)
                    .attr("stroke-width", "1.5")
                    .attr('stroke', 'red')
                    .attr('fill', "transparent")
                for (var c = 0; c < 30; c = c + 6) {
                    svg.append("svg:line")
                        .attr("x1", starting_position_x + length + c)
                        .attr("y1", starting_position_y)
                        .attr("x2", starting_position_x + length + c)
                        .attr("y2", starting_position_y - height_veritcal_line)
                        .attr("transform", function (d) { return "translate(" + -11 + "," + (2 * starting_position_x - 4.5) + ")"; })
                        .attr("stroke-width", "1.5")
                        .style("stroke", "red");
                }


                svg.append('path')
                    .attr("d", d3.symbol().type(d3.symbolTriangle).size(300))
                    .attr("transform", function (d) { return "translate(" + starting_position_x + "," + (2.1 * starting_position_x) + ")"; })
                    .attr('stroke', 'red')
                    .attr("stroke-width", "1.5")
                    .attr('fill', "transparent")
                for (var t = 0; t < 30; t = t + 6) {
                    svg.append("svg:line")
                        .attr("x1", starting_position_x + t)
                        .attr("y1", starting_position_y)
                        .attr("x2", starting_position_x + t)
                        .attr("y2", starting_position_y - height_veritcal_line)
                        .attr("transform", function (d) { return "translate(" + -11 + "," + (2 * starting_position_x - 10) + ")"; })
                        .attr("stroke-width", "1.5")
                        .style("stroke", "red");
                }

            }
            if (this.supportChoice.value === 'Fixed at both side') {
                svg.append("svg:line")
                    .attr("x1", starting_position_x + length)
                    .attr("y1", starting_position_y + 30)
                    .attr("x2", starting_position_x + length)
                    .attr("y2", starting_position_y - 10)
                    .attr("stroke-width", "1.5")
                    .style("stroke", "red");
                svg.append("svg:line")
                    .attr("x1", starting_position_x)
                    .attr("y1", starting_position_y + 30)
                    .attr("x2", starting_position_x)
                    .attr("y2", starting_position_y - 10)
                    .attr("stroke-width", "1.5")
                    .style("stroke", "red");
                for (var k = 0; k < 30; k = k + 5) {
                    svg.append("svg:line")
                        .attr("x1", starting_position_x + length)
                        .attr("y1", starting_position_y + k)
                        .attr("x2", starting_position_x + length + height_veritcal_line)
                        .attr("y2", starting_position_y + k - 2.5)
                        .attr("stroke-width", "1.5")
                        .style("stroke", "red");
                }
                for (var j = 0; j < 30; j = j + 5) {
                    svg.append("svg:line")
                        .attr("x1", starting_position_x)
                        .attr("y1", starting_position_y + j)
                        .attr("x2", starting_position_x - height_veritcal_line)
                        .attr("y2", starting_position_y + j + 2.5)
                        .attr("stroke-width", "1.5")
                        .style("stroke", "red");
                }

            }
        }
    }

    loadChoice = (svg, starting_position_x, starting_position_y, height_veritcal_line, length) => {
        // console.log(this.props.loadValue)
        // let length = 30
        let arr3 = [], name1 = '';
        for (let x in this.props.loadValue) {
            let arr2 = [], newload = { ...this.props.loadValue[x] }
            delete newload.name;
            name1 = this.props.loadValue[x].name;
            for (let y in newload) {
                let val = this.props.loadValue[x][y].value;
                let yin = y.replace(/ /g, '_').toLowerCase();
                arr2.push({ [yin]: val })
                const obj = {
                    name: name1
                }
                var result1 = Object.assign({}, obj, ...arr2);
            }
            arr3.push(result1);
            console.log(arr3)
            // let number_of_elements = Object.keys(arr3[index]).length;
            // let element1 = loadArray1.slice(arr3.length - number_of_elements)
            for (let y in arr3) {
                let n = arr3[y].name, m = arr3[y].distance_from_a, p = arr3[y].direction, q = arr3[y].point_load, r = arr3[y].point_moment;
                let a = arr3[y].starting_point_of_udl_from_a;
                let b = arr3[y].ending_point_of_udl_from_a;
                let c = arr3[y].value_of_udl;
                console.log(n, m, p, q, r, a, b, c)
                console.log(starting_position_x, length)
                if (n === 'Point Loading' && p === 'Down') {
                    let starting_position_x = parseFloat(m) / this.beamLength.value * (30 + length);
                    //Pointloading
                    console.log((starting_position_x) + parseFloat(m))
                    svg.append("svg:line")
                        .attr("x1", starting_position_x)
                        .attr("y1", starting_position_y + 10)
                        .attr("x2", starting_position_x)
                        .attr("y2", starting_position_y - 60)
                        .style("stroke", "black");
                    this.draw_point_arrow_down(svg, starting_position_x, starting_position_y, height_veritcal_line, length)
                    svg.append("text")
                        .attr("x", starting_position_x + 5)
                        .attr("y", starting_position_y - 30)
                        .style("text-anchor", "start")
                        .style("stroke", "#808080")
                        .text('P =');
                }
                if (n === 'Point Loading' && p === 'Up') {
                    let starting_position_x = parseFloat(m) / this.beamLength.value * (30 + length);
                    console.log(starting_position_x)
                    svg.append("svg:line")
                        .attr("x1", starting_position_x)
                        .attr("y1", starting_position_y + 10)
                        .attr("x2", starting_position_x)
                        .attr("y2", starting_position_y + 60)
                        .style("stroke", "black");
                    this.draw_point_arrow_up(svg, starting_position_x, starting_position_y, height_veritcal_line, length)
                    svg.append("text")
                        .attr("x", starting_position_x + 5)
                        .attr("y", starting_position_y * 2.5)
                        .style("text-anchor", "start")
                        .style("stroke", "#808080")
                        .text('P =');
                }

                if (n === 'Moment Loading' && p === 'AntiClockwise') {
                    // let starting_position_x = parseFloat(m) / this.beamLength.value * (30 + length);

                }
                if (n === 'Moment Loading' && p === 'Clockwise') {
                }
                if (n === 'Uniform Distributed Load' && p === 'Up') {
                    //uDl
                    let starting_position_x = parseFloat(a) / this.beamLength.value * (30 + length);
                    let difference = ((parseFloat(b) - parseFloat(a)) / this.beamLength.value) * (30 + length);
                    console.log(starting_position_x, difference)

                    svg.append("svg:line")
                        .attr("x1", starting_position_x)
                        .attr("y1", starting_position_y + 30)
                        .attr("x2", starting_position_x + difference)
                        .attr("y2", starting_position_y + 30)
                        .style("stroke", "black");

                    this.draw_end_start_up(svg, starting_position_x, starting_position_y, height_veritcal_line, length, difference);
                    for (var i = 0; i < 50; i = i + 10) {

                        this.draw_arrow_up(svg, starting_position_x, starting_position_y, height_veritcal_line, i, difference);
                    }

                }
                if (n === 'Uniform Distributed Load' && p === 'Down') {
                    //uDl
                    let starting_position_x = parseFloat(a) / this.beamLength.value * (30 + length);
                    let difference = ((parseFloat(b) - parseFloat(a)) / this.beamLength.value) * (30 + length);
                    console.log(starting_position_x, difference)
                    svg.append("svg:line")
                        .attr("x1", starting_position_x)
                        .attr("y1", starting_position_y - 10)
                        .attr("x2", starting_position_x + difference)
                        .attr("y2", starting_position_y - 10)
                        .style("stroke", "black");

                    this.draw_end_start_down(svg, starting_position_x, starting_position_y, height_veritcal_line, length, difference);
                    for (var z = 0; z < 50; z = z + 10) {
                        this.draw_arrow_down(svg, starting_position_x, starting_position_y, height_veritcal_line, z, difference);
                    }

                }
            }

        }



    }

    draw() {
        let scene_size = document.getElementById("D3line").getBoundingClientRect();
        // console.log(scene_size)
        var chartDiv = document.getElementById("D3line");

        // Extract the width and height that was computed by CSS.
        var margin = { top: 30, right: 20, bottom: 30, left: 50 },
            height = 190 - margin.top - margin.bottom,
            width = scene_size.width - margin.left - margin.right;
        // width = chartDiv.clientWidth;

        var starting_position_x = 30;
        var starting_position_y = 40;
        var height_veritcal_line = 20;
        var radius_of_circle = 14;
        var center_of_circle_y = 65;
        // var length_multiplier = 300;
        // var start_length = 2 * length_multiplier;
        // var end_length = 3.2 * length_multiplier;
        // var length = end_length - start_length;
        var length = width;

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
        //append A and B
        svg.append("text")
            .attr("x", starting_position_x)
            .attr("y", starting_position_y)
            .style("text-anchor", "start")
            .style("stroke", "#808080")
            .attr("transform", function (d) { return "translate(" + -15 + "," + -5 + ")"; })
            .text('A');
        svg.append("text")
            .attr("x", starting_position_x + length)
            .attr("y", starting_position_y)
            .style("text-anchor", "start")
            .style("stroke", "#808080")
            .attr("transform", function (d) { return "translate(" + 5 + "," + -5 + ")"; })
            .text('B');
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
        this.loadChoice(svg, starting_position_x, starting_position_y, height_veritcal_line, length);

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
