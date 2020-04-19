export const trap_up_up = (svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2) => {
    // console.log(height1, height2)
    k = parseFloat(k);
    l = parseFloat(l);
    if (k === 0) {
        height1 = 10
        height2 = 40
    }
    if (l === 0) {
        height2 = 10
        height1 = 30
    }
    if (l > k && k !== 0) {
        if ((l - k) <= 5) {
            height1 = 20
            height2 = 30
        }
        if ((l - k) > 5 && (l - k) <= 10) {
            height1 = 20
            height2 = 40
        }
        if ((l - k) > 10) {

            height1 = 40
            height2 = 60
        }
    }
    if (l === k) {
        height1 = 30
        height2 = 30
    }
    if (l < k && parseFloat(l) !== 0) {
        if ((k - l) <= 5) {
            height1 = 30
            height2 = 20
        }
        if ((k - l) > 5 && (k - l) <= 10) {
            height1 = 50
            height2 = 30
        }
        if ((k - l) > 10) {
            height1 = 65
            height2 = 50
        }
    }
    svg.append("svg:line")
        .attr("x1", starting_position_x)
        .attr("y1", starting_position_y + 10)
        .attr("x2", starting_position_x)
        .attr("y2", starting_position_y + height1)
        .style("stroke", "black");
    svg.append("svg:line")
        .attr("x1", starting_position_x + difference)
        .attr("y1", starting_position_y + 10)
        .attr("x2", starting_position_x + difference)
        .attr("y2", starting_position_y + height2)
        .style("stroke", "black");
    svg.append("svg:line")
        .attr("x1", starting_position_x)
        .attr("y1", starting_position_y + height1)
        .attr("x2", starting_position_x + difference)
        .attr("y2", starting_position_y + height2)
        .style("stroke", "black");
    svg.append("text")
        .attr("x", starting_position_x)
        .attr("y", starting_position_y + height1 + 10)
        .style("text-anchor", "start")
        .style("stroke", "#808080")
        .text(k);
    svg.append("text")
        .attr("x", starting_position_x + difference)
        .attr("y", starting_position_y + height2 + 10)
        .style("text-anchor", "start")
        .style("stroke", "#808080")
        .text(l);

    if (k !== 0 && l !== 0 && k !== l) {
        svg.append("svg:line")
            .attr("x1", starting_position_x)
            .attr("y1", starting_position_y + 10)
            .attr("x2", starting_position_x + 2.5)
            .attr("y2", starting_position_y + 10 + 6)
            .style("stroke", "black");

        svg.append("svg:line")
            .attr("x1", starting_position_x)
            .attr("y1", starting_position_y + 10)
            .attr("x2", starting_position_x - 2.5)
            .attr("y2", starting_position_y + 10 + 6)
            .style("stroke", "black");
        svg.append("svg:line")
            .attr("x1", starting_position_x + difference)
            .attr("y1", starting_position_y + 10)
            .attr("x2", starting_position_x + 2.5 + difference)
            .attr("y2", starting_position_y + 10 + 6)
            .style("stroke", "black");

        svg.append("svg:line")
            .attr("x1", starting_position_x + difference)
            .attr("y1", starting_position_y + 10)
            .attr("x2", starting_position_x - 2.5 + difference)
            .attr("y2", starting_position_y + 10 + 6)
            .style("stroke", "black");
        // console.log(height1, height2, difference)
        if (height2 > height1) {
            for (var i1 = 10, r = starting_position_y + height1; i1 < difference && r <= starting_position_y + height2; i1 = i1 + 30, r = r + 1) {
                // console.log('hello')
                draw_arrow_up(svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2, i1, r)

            }
        }
        else {
            for (var i4 = 10, r4 = starting_position_y + height1; i4 < difference && r4 >= starting_position_y + height2; i4 = i4 + 30, r4 = r4 - 0.8) {
                // console.log('hello')
                draw_arrow_up(svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2, i4, r4)

            }
        }
    }
    if (k === 0) {

        svg.append("svg:line")
            .attr("x1", starting_position_x + difference)
            .attr("y1", starting_position_y + 10)
            .attr("x2", starting_position_x + 2.5 + difference)
            .attr("y2", starting_position_y + 10 + 6)
            .style("stroke", "black");

        svg.append("svg:line")
            .attr("x1", starting_position_x + difference)
            .attr("y1", starting_position_y + 10)
            .attr("x2", starting_position_x - 2.5 + difference)
            .attr("y2", starting_position_y + 10 + 6)
            .style("stroke", "black");
        if (difference >= 500) {
            // console.log(height1, height2)
            for (var i2 = 10, r1 = starting_position_y + height1; i2 < difference && r1 <= starting_position_y + height2; i2 = i2 + 30, r1 = r1 + 1.1) {
                // console.log('hello')
                draw_start_zero(svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2, i2, r1)

            }
        }
        else if (difference >= 300 && difference < 500) {
            for (var i22 = 10, r11 = starting_position_y + height1; i22 <= difference && r11 <= starting_position_y + height2; i22 = i22 + 30, r11 = r11 + 2.1) {
                // console.log('hello')
                draw_start_zero(svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2, i22, r11)

            }
        }
        else if (difference >= 200 && difference < 300) {
            for (var i23 = 10, r13 = starting_position_y + height1; i23 < difference && r13 <= starting_position_y + height2; i23 = i23 + 30, r13 = r13 + 3.3) {
                // console.log('hello')
                draw_start_zero(svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2, i23, r13)

            }
        }
        else if (difference >= 150 && difference < 200) {
            for (var i24 = 10, r14 = starting_position_y + height1; i24 < difference && r14 <= starting_position_y + height2; i24 = i24 + 30, r14 = r14 + 5.5) {
                // console.log('hello')
                draw_start_zero(svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2, i24, r14)

            }
        }
        else if (difference >= 90 && difference < 150) {
            for (var i25 = 10, r15 = starting_position_y + height1; i25 < difference && r15 <= starting_position_y + height2; i25 = i25 + 30, r15 = r15 + 6.3) {
                // console.log('hello')
                draw_start_zero(svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2, i25, r15)

            }
        }
        else {
            for (var i26 = 10, r16 = starting_position_y + height1; i26 < difference && r16 <= starting_position_y + height2; i26 = i26 + 30, r16 = r16 + 2) {
                draw_start_zero(svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2, i26, r16)
            }
        }
    }
    if (l === 0) {
        svg.append("svg:line")
            .attr("x1", starting_position_x)
            .attr("y1", starting_position_y + 10)
            .attr("x2", starting_position_x + 2.5)
            .attr("y2", starting_position_y + 10 + 6)
            .style("stroke", "black");

        svg.append("svg:line")
            .attr("x1", starting_position_x)
            .attr("y1", starting_position_y + 10)
            .attr("x2", starting_position_x - 2.5)
            .attr("y2", starting_position_y + 10 + 6)
            .style("stroke", "black");
        if (difference > 200) {
            for (var i3 = 10, r2 = starting_position_y + height1; i3 < difference && r2 >= starting_position_y + height2; i3 = i3 + 30, r2 = r2 - 1.7) {
                console.log(difference)
                draw_arrow_up(svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2, i3, r2)

            }
        }
        else {
            for (var i31 = 10, r21 = starting_position_y + height1; i31 < difference && r21 >= starting_position_y + height2; i31 = i31 + 30, r21 = r21 - 6) {
                console.log(difference)
                draw_arrow_up(svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2, i31, r21)

            }
        }
    }

    if (l === k) {
        svg.append("svg:line")
            .attr("x1", starting_position_x)
            .attr("y1", starting_position_y + 10)
            .attr("x2", starting_position_x + 2.5)
            .attr("y2", starting_position_y + 10 + 6)
            .style("stroke", "black");

        svg.append("svg:line")
            .attr("x1", starting_position_x)
            .attr("y1", starting_position_y + 10)
            .attr("x2", starting_position_x - 2.5)
            .attr("y2", starting_position_y + 10 + 6)
            .style("stroke", "black");
        svg.append("svg:line")
            .attr("x1", starting_position_x + difference)
            .attr("y1", starting_position_y + 10)
            .attr("x2", starting_position_x + 2.5 + difference)
            .attr("y2", starting_position_y + 10 + 6)
            .style("stroke", "black");

        svg.append("svg:line")
            .attr("x1", starting_position_x + difference)
            .attr("y1", starting_position_y + 10)
            .attr("x2", starting_position_x - 2.5 + difference)
            .attr("y2", starting_position_y + 10 + 6)
            .style("stroke", "black");

        for (var i5 = 10; i5 < difference; i5 = i5 + 30) {
            // console.log('hello', height2, height1, i5, difference)
            draw(svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2, i5)
        }
    }
}
const draw = (svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j1, k, l, x, z, difference, height1, height2, j) => {
    svg.append("svg:line")
        .attr("x1", starting_position_x + j)
        .attr("y1", starting_position_y + 10)
        .attr("x2", starting_position_x + j + 2.5)
        .attr("y2", starting_position_y + 10 + 6)
        .style("stroke", "black");

    svg.append("svg:line")
        .attr("x1", starting_position_x + j)
        .attr("y1", starting_position_y + 10)
        .attr("x2", starting_position_x + j - 2.5)
        .attr("y2", starting_position_y + 6 + 10)
        .style("stroke", "black");

    svg.append("svg:line")
        .attr("x1", starting_position_x + j)
        .attr("y1", starting_position_y + 10)
        .attr("x2", starting_position_x + j)
        .attr("y2", starting_position_y + height1)
        .style("stroke", "black");

}
const draw_arrow_up = (svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j1, k, l, x, z, difference, height1, height2, j, r) => {
    svg.append("svg:line")
        .attr("x1", starting_position_x + j)
        .attr("y1", starting_position_y + 10)
        .attr("x2", starting_position_x + j + 2.5)
        .attr("y2", starting_position_y + 10 + 6)
        .style("stroke", "black");

    svg.append("svg:line")
        .attr("x1", starting_position_x + j)
        .attr("y1", starting_position_y + 10)
        .attr("x2", starting_position_x + j - 2.5)
        .attr("y2", starting_position_y + 6 + 10)
        .style("stroke", "black");


    svg.append("svg:line")
        .attr("x1", starting_position_x + j)
        .attr("y1", starting_position_y + 10)
        .attr("x2", starting_position_x + j)
        .attr("y2", r)
        .style("stroke", "black");
    // }
}

const draw_start_zero = (svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j1, k, l, x, z, difference, height1, height2, j, r) => {
    console.log(difference)
    svg.append("svg:line")
        .attr("x1", starting_position_x + j + 10)
        .attr("y1", starting_position_y + 10)
        .attr("x2", starting_position_x + j + 2.5 + 10)
        .attr("y2", starting_position_y + 10 + 6)
        .style("stroke", "black");

    svg.append("svg:line")
        .attr("x1", starting_position_x + j + 10)
        .attr("y1", starting_position_y + 10)
        .attr("x2", starting_position_x + j - 2.5 + 10)
        .attr("y2", starting_position_y + 6 + 10)
        .style("stroke", "black");


    svg.append("svg:line")
        .attr("x1", starting_position_x + j + 10)
        .attr("y1", starting_position_y + 10)
        .attr("x2", starting_position_x + j + 10)
        .attr("y2", r)
        .style("stroke", "black");
    // }
}