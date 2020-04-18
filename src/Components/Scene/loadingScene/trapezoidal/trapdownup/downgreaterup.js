export const draw_arrow_down_up2 = (svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2) => {
    for (var x1 = 10, ra = starting_position_y + 10; x1 < difference / 2 && ra <= starting_position_y + height2; x1 = x1 + 30, ra = ra + 9) {
        let e = difference / 1.4
        // console.log(ra)
        svg.append("svg:line")
            .attr("x1", starting_position_x + e + x1)
            .attr("y1", starting_position_y + 10)
            .attr("x2", starting_position_x + x1 + e + 2.5)
            .attr("y2", starting_position_y + 10 + 6)
            .style("stroke", "black");

        svg.append("svg:line")
            .attr("x1", starting_position_x + x1 + e)
            .attr("y1", starting_position_y + 10)
            .attr("x2", starting_position_x + x1 + e - 2.5)
            .attr("y2", starting_position_y + 6 + 10)
            .style("stroke", "black");

        svg.append("svg:line")
            .attr("x1", starting_position_x + x1 + e)
            .attr("y1", starting_position_y + 10)
            .attr("x2", starting_position_x + x1 + e)
            .attr("y2", ra)
            .style("stroke", "black");
    }
    for (var x11 = 10, raa = starting_position_y - height1; x11 < difference / 2 && raa <= starting_position_y + height2; x11 = x11 + 30, raa = raa + 5) {
        svg.append("svg:line")
            .attr("x1", starting_position_x + x11)
            .attr("y1", starting_position_y + 10)
            .attr("x2", starting_position_x + x11 + 3.5)
            .attr("y2", starting_position_y)
            .style("stroke", "black");

        svg.append("svg:line")
            .attr("x1", starting_position_x + x11)
            .attr("y1", starting_position_y + 10)
            .attr("x2", starting_position_x + x11 - 3.5)
            .attr("y2", starting_position_y)
            .style("stroke", "black");
        svg.append("svg:line")
            .attr("x1", starting_position_x + x11)
            .attr("y1", starting_position_y + 10)
            .attr("x2", starting_position_x + x11)
            .attr("y2", raa)
            .style("stroke", "black");
    }

}



