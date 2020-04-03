export const greyline = (svg, starting_position_x, starting_position_y, length, height_veritcal_line, radius_of_circle, center_of_circle_y, beamLength) => {
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
        .attr("x", starting_position_x + length / 2)
        .attr("y", starting_position_y * 3.6)
        .style("text-anchor", "middle")
        .style("stroke", "#808080")
        .text(beamLength.value);

}