export const draw_arrow_down_up1 = (svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2) => {
    if (difference >= 700) {
        for (var x1 = 10, ra = starting_position_y + 10; x1 < difference / 2 && ra <= starting_position_y + height2; x1 = x1 + 30, ra = ra + 3.5) {
            let e = difference / 2
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
        for (var x11 = 10, raa = starting_position_y - height1; x11 < difference / 3 && raa <= starting_position_y + height2; x11 = x11 + 30, raa = raa + 4) {
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
    if (difference < 700 && difference >= 600) {
        for (var x2 = 10, r2 = starting_position_y + 10; x2 < difference / 2 && r2 <= starting_position_y + height2; x2 = x2 + 30, r2 = r2 + 5) {
            let e = difference / 2
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
        for (var x22 = 10, r22 = starting_position_y - height1; x22 < difference / 3 && r22 <= starting_position_y + height2; x22 = x22 + 30, r22 = r22 + 4) {
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
    if (difference < 600 && difference >= 450) {
        for (var x3 = 10, r3 = starting_position_y + 10; x3 < difference / 2 && r3 <= starting_position_y + height2; x3 = x3 + 30, r3 = r3 + 7) {
            let e = difference / 2
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
        for (var x33 = 10, r33 = starting_position_y - height1; x33 < difference / 3 && r33 <= starting_position_y + height2; x33 = x33 + 30, r33 = r33 + 5) {
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
    if (difference < 450 && difference >= 350) {
        for (var x4 = 10, r4 = starting_position_y + 10; x4 < difference / 2 && r4 <= starting_position_y + height2; x4 = x4 + 30, r4 = r4 + 8) {
            let e = difference / 2
            svg.append("svg:line")
                .attr("x1", starting_position_x + e + x4)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + x4 + e + 2.5)
                .attr("y2", starting_position_y + 10 + 6)
                .style("stroke", "black");
            svg.append("svg:line")
                .attr("x1", starting_position_x + x4 + e)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + x4 + e - 2.5)
                .attr("y2", starting_position_y + 6 + 10)
                .style("stroke", "black");
            svg.append("svg:line")
                .attr("x1", starting_position_x + x4 + e)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + x4 + e)
                .attr("y2", r4)
                .style("stroke", "black");
        }
        for (var x44 = 10, r44 = starting_position_y - height1; x44 < difference / 3 && r44 <= starting_position_y + height2; x44 = x44 + 30, r44 = r44 + 7) {
            svg.append("svg:line")
                .attr("x1", starting_position_x + x44)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + x44 + 3.5)
                .attr("y2", starting_position_y)
                .style("stroke", "black");
            svg.append("svg:line")
                .attr("x1", starting_position_x + x44)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + x44 - 3.5)
                .attr("y2", starting_position_y)
                .style("stroke", "black");
            svg.append("svg:line")
                .attr("x1", starting_position_x + x44)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + x44)
                .attr("y2", r44)
                .style("stroke", "black");
        }
    }
    if (difference < 350 && difference >= 250) {
        for (var x5 = 10, r5 = starting_position_y + 10; x5 < difference / 2 && r5 <= starting_position_y + height2; x5 = x5 + 30, r5 = r5 + 11.5) {
            let e = difference / 2
            svg.append("svg:line")
                .attr("x1", starting_position_x + e + x5)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + x5 + e + 2.5)
                .attr("y2", starting_position_y + 10 + 6)
                .style("stroke", "black");
            svg.append("svg:line")
                .attr("x1", starting_position_x + x5 + e)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + x5 + e - 2.5)
                .attr("y2", starting_position_y + 6 + 10)
                .style("stroke", "black");
            svg.append("svg:line")
                .attr("x1", starting_position_x + x5 + e)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + x5 + e)
                .attr("y2", r5)
                .style("stroke", "black");
        }
        for (var x55 = 10, r55 = starting_position_y - height1; x55 < difference / 3 && r55 <= starting_position_y + height2; x55 = x55 + 30, r55 = r55 + 11) {
            svg.append("svg:line")
                .attr("x1", starting_position_x + x55)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + x55 + 3.5)
                .attr("y2", starting_position_y)
                .style("stroke", "black");
            svg.append("svg:line")
                .attr("x1", starting_position_x + x55)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + x55 - 3.5)
                .attr("y2", starting_position_y)
                .style("stroke", "black");
            svg.append("svg:line")
                .attr("x1", starting_position_x + x55)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + x55)
                .attr("y2", r55)
                .style("stroke", "black");
        }
    }
    if (difference < 250 && difference >= 200) {
        for (var x6 = 10, r6 = starting_position_y + 10; x6 < difference / 2 && r6 <= starting_position_y + height2; x6 = x6 + 30, r6 = r6 + 15) {
            let e = difference / 2
            svg.append("svg:line")
                .attr("x1", starting_position_x + e + x6)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + x6 + e + 2.5)
                .attr("y2", starting_position_y + 10 + 6)
                .style("stroke", "black");
            svg.append("svg:line")
                .attr("x1", starting_position_x + x6 + e)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + x6 + e - 2.5)
                .attr("y2", starting_position_y + 6 + 10)
                .style("stroke", "black");
            svg.append("svg:line")
                .attr("x1", starting_position_x + x6 + e)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + x6 + e)
                .attr("y2", r6)
                .style("stroke", "black");
        }
        for (var x66 = 10, r66 = starting_position_y - height1; x66 < difference / 3 && r66 <= starting_position_y + height2; x66 = x66 + 30, r66 = r66 + 15) {
            svg.append("svg:line")
                .attr("x1", starting_position_x + x66)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + x66 + 3.5)
                .attr("y2", starting_position_y)
                .style("stroke", "black");
            svg.append("svg:line")
                .attr("x1", starting_position_x + x66)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + x66 - 3.5)
                .attr("y2", starting_position_y)
                .style("stroke", "black");
            svg.append("svg:line")
                .attr("x1", starting_position_x + x66)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + x66)
                .attr("y2", r66)
                .style("stroke", "black");
        }
    }
    if (difference < 200 && difference >= 150) {
        for (var x7 = 10, r7 = starting_position_y + 10; x7 < difference / 2 && r7 <= starting_position_y + height2; x7 = x7 + 30, r7 = r7 + 19) {
            let e = difference / 2
            svg.append("svg:line")
                .attr("x1", starting_position_x + e + x7)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + x7 + e + 2.5)
                .attr("y2", starting_position_y + 10 + 6)
                .style("stroke", "black");
            svg.append("svg:line")
                .attr("x1", starting_position_x + x7 + e)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + x7 + e - 2.5)
                .attr("y2", starting_position_y + 6 + 10)
                .style("stroke", "black");
            svg.append("svg:line")
                .attr("x1", starting_position_x + x7 + e)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + x7 + e)
                .attr("y2", r7)
                .style("stroke", "black");
        }
        for (var x77 = 10, r77 = starting_position_y - height1; x77 < difference / 3 && r77 <= starting_position_y + height2; x77 = x77 + 30, r77 = r77 + 20) {
            svg.append("svg:line")
                .attr("x1", starting_position_x + x77)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + x77 + 3.5)
                .attr("y2", starting_position_y)
                .style("stroke", "black");
            svg.append("svg:line")
                .attr("x1", starting_position_x + x77)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + x77 - 3.5)
                .attr("y2", starting_position_y)
                .style("stroke", "black");
            svg.append("svg:line")
                .attr("x1", starting_position_x + x77)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + x77)
                .attr("y2", r77)
                .style("stroke", "black");
        }
    }
}
