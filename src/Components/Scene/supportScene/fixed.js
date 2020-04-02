export const fixed = (svg, starting_position_x, starting_position_y, length, height_veritcal_line, radius_of_circle, center_of_circle_y) => {
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