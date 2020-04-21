export const draw_arrow_same = (svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2) => {
    // console.log(difference)
    if (difference > 700) {
        for (var x1 = 10, ra = starting_position_y + 10; x1 < difference / 2 && ra <= starting_position_y + height2; x1 = x1 + 30, ra = ra + 3) {
            let e = difference / 1.5

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
        for (var x11 = 10, raa = starting_position_y - height1; x11 < difference / 3 && raa <= starting_position_y + height2; x11 = x11 + 30, raa = raa + 1) {
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
    if (difference < 700 && difference > 500) {
        for (var x0 = 10, r0 = starting_position_y + 10; x0 < difference / 2 && r0 <= starting_position_y + height2; x0 = x0 + 30, r0 = r0 + 3) {
            let e = difference / 1.5

            svg.append("svg:line")
                .attr("x1", starting_position_x + e + x0)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + x0 + e + 2.5)
                .attr("y2", starting_position_y + 10 + 6)
                .style("stroke", "black");

            svg.append("svg:line")
                .attr("x1", starting_position_x + x0 + e)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + x0 + e - 2.5)
                .attr("y2", starting_position_y + 6 + 10)
                .style("stroke", "black");

            svg.append("svg:line")
                .attr("x1", starting_position_x + x0 + e)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + x0 + e)
                .attr("y2", r0)
                .style("stroke", "black");
        }
        for (var x10 = 10, ra0 = starting_position_y - height1; x10 < difference / 3 && ra0 <= starting_position_y + height2; x10 = x10 + 30, ra0 = ra0 + 1.5) {
            svg.append("svg:line")
                .attr("x1", starting_position_x + x10)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + x10 + 3.5)
                .attr("y2", starting_position_y)
                .style("stroke", "black");

            svg.append("svg:line")
                .attr("x1", starting_position_x + x10)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + x10 - 3.5)
                .attr("y2", starting_position_y)
                .style("stroke", "black");
            svg.append("svg:line")
                .attr("x1", starting_position_x + x10)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + x10)
                .attr("y2", ra0)
                .style("stroke", "black");
        }

    }
    if (difference < 500 && difference > 300) {
        for (var x2 = 10, r2 = starting_position_y + 10; x2 < difference / 2 && r2 <= starting_position_y + height2; x2 = x2 + 30, r2 = r2 + 6.5) {
            let e = difference / 1.5

            svg.append("svg:line")
                .attr("x1", starting_position_x + e + x2)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + x2 + e + 2.5)
                .attr("y2", starting_position_y + 10 + 6)
                .style("stroke", "black");

            svg.append("svg:line")
                .attr("x1", starting_position_x + x2 + e)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + x2 + e - 2.5)
                .attr("y2", starting_position_y + 6 + 10)
                .style("stroke", "black");

            svg.append("svg:line")
                .attr("x1", starting_position_x + x2 + e)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + x2 + e)
                .attr("y2", r2)
                .style("stroke", "black");
        }
        for (var x22 = 10, r22 = starting_position_y - height1; x22 < difference / 3 && r22 <= starting_position_y + height2; x22 = x22 + 30, r22 = r22 + 2.5) {
            svg.append("svg:line")
                .attr("x1", starting_position_x + x22)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + x22 + 3.5)
                .attr("y2", starting_position_y)
                .style("stroke", "black");

            svg.append("svg:line")
                .attr("x1", starting_position_x + x22)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + x22 - 3.5)
                .attr("y2", starting_position_y)
                .style("stroke", "black");
            svg.append("svg:line")
                .attr("x1", starting_position_x + x22)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + x22)
                .attr("y2", r22)
                .style("stroke", "black");
        }

    }
    if (difference < 300 && difference > 200) {
        for (var x3 = 10, r3 = starting_position_y + 10; x3 < difference / 2 && r3 <= starting_position_y + height2; x3 = x3 + 30, r3 = r3 + 7) {
            let e = difference / 1.5

            svg.append("svg:line")
                .attr("x1", starting_position_x + e + x3)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + x3 + e + 2.5)
                .attr("y2", starting_position_y + 10 + 6)
                .style("stroke", "black");

            svg.append("svg:line")
                .attr("x1", starting_position_x + x3 + e)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + x3 + e - 2.5)
                .attr("y2", starting_position_y + 6 + 10)
                .style("stroke", "black");

            svg.append("svg:line")
                .attr("x1", starting_position_x + x3 + e)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + x3 + e)
                .attr("y2", r3)
                .style("stroke", "black");
        }
        for (var x33 = 10, r33 = starting_position_y - height1; x33 < difference / 3 && r33 <= starting_position_y + height2; x33 = x33 + 30, r33 = r33 + 3.5) {
            svg.append("svg:line")
                .attr("x1", starting_position_x + x33)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + x33 + 3.5)
                .attr("y2", starting_position_y)
                .style("stroke", "black");

            svg.append("svg:line")
                .attr("x1", starting_position_x + x33)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + x33 - 3.5)
                .attr("y2", starting_position_y)
                .style("stroke", "black");
            svg.append("svg:line")
                .attr("x1", starting_position_x + x33)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + x33)
                .attr("y2", r33)
                .style("stroke", "black");
        }
    }
}