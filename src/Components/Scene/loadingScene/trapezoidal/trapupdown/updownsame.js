export const draw_arrow_same = (svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2) => {
    // console.log(difference)
    if (difference > 600) {
        for (var x1 = 10, r1 = starting_position_y + height1; x1 < difference / 3 && r1 >= starting_position_y - height2; x1 = x1 + 30, r1 = r1 - 2.5) {
            svg.append("svg:line")
                .attr("x1", starting_position_x + x1)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + x1 + 2.5)
                .attr("y2", starting_position_y + 10 + 6)
                .style("stroke", "black");

            svg.append("svg:line")
                .attr("x1", starting_position_x + x1)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + x1 - 2.5)
                .attr("y2", starting_position_y + 10 + 6)
                .style("stroke", "black");
            svg.append("svg:line")
                .attr("x1", starting_position_x + x1)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + x1)
                .attr("y2", r1)
                .style("stroke", "black");
        }
        for (var x2 = 10, r2 = starting_position_y + 10; x2 < difference / 3 && r2 >= starting_position_y - height2; x2 = x2 + 30, r2 = r2 - 2.5) {
            let e = difference / 1.5
            svg.append("svg:line")
                .attr("x1", starting_position_x + e + x2)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + x2 + e + 3.5)
                .attr("y2", starting_position_y)
                .style("stroke", "black");

            svg.append("svg:line")
                .attr("x1", starting_position_x + x2 + e)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + x2 + e - 3.5)
                .attr("y2", starting_position_y)
                .style("stroke", "black");

            svg.append("svg:line")
                .attr("x1", starting_position_x + x2 + e)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + x2 + e)
                .attr("y2", r2)
                .style("stroke", "black");
        }
    }
    if (difference < 600 && difference > 300) {
        for (var x3 = 10, r3 = starting_position_y + height1; x3 < difference / 3 && r3 >= starting_position_y - height2; x3 = x3 + 30, r3 = r3 - 3) {
            svg.append("svg:line")
                .attr("x1", starting_position_x + x3)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + x3 + 2.5)
                .attr("y2", starting_position_y + 10 + 6)
                .style("stroke", "black");

            svg.append("svg:line")
                .attr("x1", starting_position_x + x3)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + x3 - 2.5)
                .attr("y2", starting_position_y + 10 + 6)
                .style("stroke", "black");
            svg.append("svg:line")
                .attr("x1", starting_position_x + x3)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + x3)
                .attr("y2", r3)
                .style("stroke", "black");
        }
        for (var x1a = 10, ra = starting_position_y + 10; x1a < difference / 3 && ra >= starting_position_y - height2; x1a = x1a + 30, ra = ra - 4) {
            let e = difference / 1.5
            svg.append("svg:line")
                .attr("x1", starting_position_x + e + x1a)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + x1a + e + 3.5)
                .attr("y2", starting_position_y)
                .style("stroke", "black");

            svg.append("svg:line")
                .attr("x1", starting_position_x + x1a + e)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + x1a + e - 3.5)
                .attr("y2", starting_position_y)
                .style("stroke", "black");

            svg.append("svg:line")
                .attr("x1", starting_position_x + x1a + e)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + x1a + e)
                .attr("y2", ra)
                .style("stroke", "black");
        }
    }
    if (difference < 300 && difference > 100) {
        for (var x11 = 10, raa = starting_position_y + height1; x11 < difference / 3 && raa >= starting_position_y - height2; x11 = x11 + 30, raa = raa - 8) {
            svg.append("svg:line")
                .attr("x1", starting_position_x + x11)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + x11 + 2.5)
                .attr("y2", starting_position_y + 10 + 6)
                .style("stroke", "black");

            svg.append("svg:line")
                .attr("x1", starting_position_x + x11)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + x11 - 2.5)
                .attr("y2", starting_position_y + 10 + 6)
                .style("stroke", "black");
            svg.append("svg:line")
                .attr("x1", starting_position_x + x11)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + x11)
                .attr("y2", raa)
                .style("stroke", "black");
        }
        for (var x5 = 10, r5 = starting_position_y + 10; x5 < difference / 3 && r5 >= starting_position_y - height2; x5 = x5 + 30, r5 = r5 - 12) {
            let e = difference / 1.5
            svg.append("svg:line")
                .attr("x1", starting_position_x + e + x5)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + x5 + e + 3.5)
                .attr("y2", starting_position_y)
                .style("stroke", "black");

            svg.append("svg:line")
                .attr("x1", starting_position_x + x5 + e)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + x5 + e - 3.5)
                .attr("y2", starting_position_y)
                .style("stroke", "black");

            svg.append("svg:line")
                .attr("x1", starting_position_x + x5 + e)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + x5 + e)
                .attr("y2", r5)
                .style("stroke", "black");
        }
    }
}