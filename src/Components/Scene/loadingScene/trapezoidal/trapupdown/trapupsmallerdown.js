export const draw_arrow_down_up1 = (svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2) => {
    // console.log(difference)
    if (difference >= 700) {
        for (var x11 = 10, raa = starting_position_y + height1; x11 < difference / 3 && raa >= starting_position_y - height2; x11 = x11 + 30, raa = raa - 3.5) {
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
        for (var x1 = 10, ra = starting_position_y + 10; x1 < difference / 2 && ra >= starting_position_y - height2; x1 = x1 + 30, ra = ra - 3.5) {
            let e = difference / 2
            svg.append("svg:line")
                .attr("x1", starting_position_x + e + x1)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + x1 + e + 3.5)
                .attr("y2", starting_position_y)
                .style("stroke", "black");

            svg.append("svg:line")
                .attr("x1", starting_position_x + x1 + e)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + x1 + e - 3.5)
                .attr("y2", starting_position_y)
                .style("stroke", "black");

            svg.append("svg:line")
                .attr("x1", starting_position_x + x1 + e)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + x1 + e)
                .attr("y2", ra)
                .style("stroke", "black");
        }

    }
    if (difference < 700 && difference >= 600) {
        for (var x2 = 10, r2 = starting_position_y + height1; x2 < difference / 3 && r2 >= starting_position_y - height2; x2 = x2 + 30, r2 = r2 - 4) {
            svg.append("svg:line")
                .attr("x1", starting_position_x + x2)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + x2 + 2.5)
                .attr("y2", starting_position_y + 10 + 6)
                .style("stroke", "black");

            svg.append("svg:line")
                .attr("x1", starting_position_x + x2)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + x2 - 2.5)
                .attr("y2", starting_position_y + 10 + 6)
                .style("stroke", "black");
            svg.append("svg:line")
                .attr("x1", starting_position_x + x2)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + x2)
                .attr("y2", r2)
                .style("stroke", "black");
        }
        for (var x22 = 10, r22 = starting_position_y + 10; x22 < difference / 2 && r22 >= starting_position_y - height2; x22 = x22 + 30, r22 = r22 - 3) {
            let e = difference / 2
            svg.append("svg:line")
                .attr("x1", starting_position_x + e + x22)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + x22 + e + 3.5)
                .attr("y2", starting_position_y)
                .style("stroke", "black");

            svg.append("svg:line")
                .attr("x1", starting_position_x + x22 + e)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + x22 + e - 3.5)
                .attr("y2", starting_position_y)
                .style("stroke", "black");

            svg.append("svg:line")
                .attr("x1", starting_position_x + x22 + e)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + x22 + e)
                .attr("y2", r22)
                .style("stroke", "black");
        }

    }
    if (difference < 600 && difference >= 450) {
        for (var x3 = 10, r3 = starting_position_y + height1; x3 < difference / 3 && r3 >= starting_position_y - height2; x3 = x3 + 30, r3 = r3 - 4) {
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
        for (var x33 = 10, r33 = starting_position_y + 10; x33 < difference / 2 && r33 >= starting_position_y - height2; x33 = x33 + 30, r33 = r33 - 4) {
            let e = difference / 2
            svg.append("svg:line")
                .attr("x1", starting_position_x + e + x33)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + x33 + e + 3.5)
                .attr("y2", starting_position_y)
                .style("stroke", "black");

            svg.append("svg:line")
                .attr("x1", starting_position_x + x33 + e)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + x33 + e - 3.5)
                .attr("y2", starting_position_y)
                .style("stroke", "black");

            svg.append("svg:line")
                .attr("x1", starting_position_x + x33 + e)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + x33 + e)
                .attr("y2", r33)
                .style("stroke", "black");
        }

    }
    if (difference < 450 && difference >= 350) {
        for (var x11bb = 10, raabb = starting_position_y + height1; x11bb < difference / 3 && raabb >= starting_position_y - height2; x11bb = x11bb + 30, raabb = raabb - 4.5) {
            svg.append("svg:line")
                .attr("x1", starting_position_x + x11bb)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + x11bb + 2.5)
                .attr("y2", starting_position_y + 10 + 6)
                .style("stroke", "black");

            svg.append("svg:line")
                .attr("x1", starting_position_x + x11bb)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + x11bb - 2.5)
                .attr("y2", starting_position_y + 10 + 6)
                .style("stroke", "black");
            svg.append("svg:line")
                .attr("x1", starting_position_x + x11bb)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + x11bb)
                .attr("y2", raabb)
                .style("stroke", "black");
        }
        for (var x1bb = 10, rabb = starting_position_y + 10; x1bb < difference / 2 && rabb >= starting_position_y - height2; x1bb = x1bb + 30, rabb = rabb - 6) {
            let e = difference / 2
            svg.append("svg:line")
                .attr("x1", starting_position_x + e + x1bb)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + x1bb + e + 3.5)
                .attr("y2", starting_position_y)
                .style("stroke", "black");

            svg.append("svg:line")
                .attr("x1", starting_position_x + x1bb + e)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + x1bb + e - 3.5)
                .attr("y2", starting_position_y)
                .style("stroke", "black");

            svg.append("svg:line")
                .attr("x1", starting_position_x + x1bb + e)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + x1bb + e)
                .attr("y2", rabb)
                .style("stroke", "black");
        }

    }
    if (difference < 350 && difference >= 250) {
        for (var xb = 10, rb = starting_position_y + height1; xb < difference / 3 && rb >= starting_position_y - height2; xb = xb + 30, rb = rb - 5) {
            svg.append("svg:line")
                .attr("x1", starting_position_x + xb)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + xb + 2.5)
                .attr("y2", starting_position_y + 10 + 6)
                .style("stroke", "black");

            svg.append("svg:line")
                .attr("x1", starting_position_x + xb)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + xb - 2.5)
                .attr("y2", starting_position_y + 10 + 6)
                .style("stroke", "black");
            svg.append("svg:line")
                .attr("x1", starting_position_x + xb)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + xb)
                .attr("y2", rb)
                .style("stroke", "black");
        }
        for (var xbb = 10, rbb = starting_position_y + 10; xbb < difference / 2 && rbb >= starting_position_y - height2; xbb = xbb + 30, rbb = rbb - 7) {
            let e = difference / 2
            svg.append("svg:line")
                .attr("x1", starting_position_x + e + xbb)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + xbb + e + 3.5)
                .attr("y2", starting_position_y)
                .style("stroke", "black");

            svg.append("svg:line")
                .attr("x1", starting_position_x + xbb + e)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + xbb + e - 3.5)
                .attr("y2", starting_position_y)
                .style("stroke", "black");

            svg.append("svg:line")
                .attr("x1", starting_position_x + xbb + e)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + xbb + e)
                .attr("y2", rbb)
                .style("stroke", "black");
        }

    }
    if (difference < 250 && difference >= 200) {
        for (var xc = 10, rc = starting_position_y + height1; xc < difference / 3 && rc >= starting_position_y - height2; xc = xc + 30, rc = rc - 6) {
            svg.append("svg:line")
                .attr("x1", starting_position_x + xc)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + xc + 2.5)
                .attr("y2", starting_position_y + 10 + 6)
                .style("stroke", "black");

            svg.append("svg:line")
                .attr("x1", starting_position_x + xc)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + xc - 2.5)
                .attr("y2", starting_position_y + 10 + 6)
                .style("stroke", "black");
            svg.append("svg:line")
                .attr("x1", starting_position_x + xc)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + xc)
                .attr("y2", rc)
                .style("stroke", "black");
        }


        for (var xbc = 10, rbc = starting_position_y + 10; xbc < difference / 2 && rbc >= starting_position_y - height2; xbc = xbc + 30, rbc = rbc - 12) {
            let e = difference / 2
            svg.append("svg:line")
                .attr("x1", starting_position_x + e + xbc)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + xbc + e + 3.5)
                .attr("y2", starting_position_y)
                .style("stroke", "black");

            svg.append("svg:line")
                .attr("x1", starting_position_x + xbc + e)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + xbc + e - 3.5)
                .attr("y2", starting_position_y)
                .style("stroke", "black");

            svg.append("svg:line")
                .attr("x1", starting_position_x + xbc + e)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + xbc + e)
                .attr("y2", rbc)
                .style("stroke", "black");
        }

    }
    if (difference < 200 && difference >= 150) {
        for (var xcd = 10, rcd = starting_position_y + height1; xcd < difference / 3 && rcd >= starting_position_y - height2; xcd = xcd + 30, rcd = rcd - 7) {
            svg.append("svg:line")
                .attr("x1", starting_position_x + xcd)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + xcd + 2.5)
                .attr("y2", starting_position_y + 10 + 6)
                .style("stroke", "black");

            svg.append("svg:line")
                .attr("x1", starting_position_x + xcd)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + xcd - 2.5)
                .attr("y2", starting_position_y + 10 + 6)
                .style("stroke", "black");
            svg.append("svg:line")
                .attr("x1", starting_position_x + xcd)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + xcd)
                .attr("y2", rcd)
                .style("stroke", "black");
        }


        for (var xbcd = 10, rbcd = starting_position_y + 10; xbcd < difference / 2 && rbcd >= starting_position_y - height2; xbcd = xbcd + 30, rbcd = rbcd - 14) {
            let e = difference / 2
            svg.append("svg:line")
                .attr("x1", starting_position_x + e + xbcd)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + xbcd + e + 3.5)
                .attr("y2", starting_position_y)
                .style("stroke", "black");

            svg.append("svg:line")
                .attr("x1", starting_position_x + xbcd + e)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + xbcd + e - 3.5)
                .attr("y2", starting_position_y)
                .style("stroke", "black");

            svg.append("svg:line")
                .attr("x1", starting_position_x + xbcd + e)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + xbcd + e)
                .attr("y2", rbcd)
                .style("stroke", "black");
        }

    }
    if (difference < 150 && difference >= 100) {
        for (var xd = 10, rd = starting_position_y + height1; xd < difference / 3 && rd >= starting_position_y - height2; xd = xd + 30, rd = rd - 10) {
            svg.append("svg:line")
                .attr("x1", starting_position_x + xd)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + xd + 2.5)
                .attr("y2", starting_position_y + 10 + 6)
                .style("stroke", "black");

            svg.append("svg:line")
                .attr("x1", starting_position_x + xd)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + xd - 2.5)
                .attr("y2", starting_position_y + 10 + 6)
                .style("stroke", "black");
            svg.append("svg:line")
                .attr("x1", starting_position_x + xd)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + xd)
                .attr("y2", rd)
                .style("stroke", "black");
        }


        for (var xdd = 10, rdd = starting_position_y + 10; xdd < difference / 2 && rdd >= starting_position_y - height2; xdd = xdd + 30, rdd = rdd - 16) {
            let e = difference / 2
            svg.append("svg:line")
                .attr("x1", starting_position_x + e + xdd)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + xdd + e + 3.5)
                .attr("y2", starting_position_y)
                .style("stroke", "black");

            svg.append("svg:line")
                .attr("x1", starting_position_x + xdd + e)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + xdd + e - 3.5)
                .attr("y2", starting_position_y)
                .style("stroke", "black");

            svg.append("svg:line")
                .attr("x1", starting_position_x + xdd + e)
                .attr("y1", starting_position_y + 10)
                .attr("x2", starting_position_x + xdd + e)
                .attr("y2", rdd)
                .style("stroke", "black");
        }

    }
}