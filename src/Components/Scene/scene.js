import React, { Component } from 'react';
import * as d3 from 'd3';
import '../../App.css';
import { point_down, point_up } from '../Scene/loadingScene.js/pointLoad';
import { UDL_down, UDL_up } from '../Scene/loadingScene.js/uniformDL';
import { cantilever } from '../Scene/supportScene.js/cantilever';
import { fixed } from '../Scene/supportScene.js/fixed';
import { simplySupported } from '../Scene/supportScene.js/simplySupported';

class Scene extends Component {
    constructor(props) {
        super(props)
        this.draw = this.draw.bind(this);
    }
    componentDidMount() {
        this.draw()
    }

    componentDidUpdate() {
        this.draw()
    }

    supportchoice = (svg, starting_position_x, starting_position_y, length, height_veritcal_line, radius_of_circle, center_of_circle_y) => {

        if (this.supportChoice.value !== '') {
            if (this.supportChoice.value === 'Cantilever') {
                cantilever(svg, starting_position_x, starting_position_y, length, height_veritcal_line, radius_of_circle, center_of_circle_y)

            }
            if (this.supportChoice.value === 'Simply Supported') {
                simplySupported(svg, starting_position_x, starting_position_y, length, height_veritcal_line, radius_of_circle, center_of_circle_y)
            }
            if (this.supportChoice.value === 'Fixed at both side') {
                fixed(svg, starting_position_x, starting_position_y, length, height_veritcal_line, radius_of_circle, center_of_circle_y)
            }
        }
    }

    loadChoice = (svg, starting_position_x, starting_position_y, height_veritcal_line, length) => {

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
            // console.log(arr3)
            for (let y in arr3) {
                let n = arr3[y].name, m = arr3[y].distance_from_a, p = arr3[y].direction, q = arr3[y].point_load, r = arr3[y].point_moment;
                let a = arr3[y].starting_point_of_udl_from_a, b = arr3[y].ending_point_of_udl_from_a, c = arr3[y].value_of_udl;
                console.log(r)
                //PointLoading 
                if (n === 'Point Loading' && p === 'Down') {
                    let starting_position_x = parseFloat(m) / this.beamLength.value * (30 + length);
                    point_down(svg, starting_position_x, starting_position_y, height_veritcal_line, length, q)
                }
                if (n === 'Point Loading' && p === 'Up') {
                    let starting_position_x = parseFloat(m) / this.beamLength.value * (30 + length);
                    point_up(svg, starting_position_x, starting_position_y, height_veritcal_line, length, q)

                }
                //MomentLoading
                if (n === 'Moment Loading' && p === 'AntiClockwise') {
                    // let starting_position_x = parseFloat(m) / this.beamLength.value * (30 + length);
                }
                if (n === 'Moment Loading' && p === 'Clockwise') {
                }
                //Udl
                if (n === 'Uniform Distributed Load' && p === 'Up') {
                    let starting_position_x = parseFloat(a) / this.beamLength.value * (30 + length);
                    let difference = ((parseFloat(b) - parseFloat(a)) / this.beamLength.value) * (30 + length);
                    UDL_up(svg, starting_position_x, starting_position_y, height_veritcal_line, length, difference, c)

                }
                if (n === 'Uniform Distributed Load' && p === 'Down') {

                    let starting_position_x = parseFloat(a) / this.beamLength.value * (30 + length);
                    let difference = ((parseFloat(b) - parseFloat(a)) / this.beamLength.value) * (30 + length);
                    UDL_down(svg, starting_position_x, starting_position_y, height_veritcal_line, length, difference, c)

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
            .style("text-anchor", "middle")
            .attr("x", starting_position_x + length / 2)
            .attr("y", starting_position_y * 3.6)
            .style("text-anchor", "middle")
            .style("stroke", "#808080")
            .text(this.beamLength.value);
        svg.append("text")
            .style("text-anchor", "middle")
            .attr("x", starting_position_x + length / 2 + 15)
            .attr("y", starting_position_y * 3.6)
            .style("text-anchor", "middle")
            .style("stroke", "#808080")
            .text('(m)');
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
