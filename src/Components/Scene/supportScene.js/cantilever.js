export const cantilever = (svg, starting_position_x, starting_position_y, length, height_veritcal_line, radius_of_circle, center_of_circle_y) => {
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