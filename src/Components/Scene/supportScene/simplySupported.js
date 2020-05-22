import * as d3 from 'd3';
export const simplySupported = (svg, starting_position_x, starting_position_y, length, height_veritcal_line, radius_of_circle, center_of_circle_y) => {
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