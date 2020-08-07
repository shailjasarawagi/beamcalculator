import { draw_arrow_same } from './updownsame';
import { draw_arrow_down_up1 } from './trapupsmallerdown';
import { draw_arrow_down_up2 } from './trapupgreaterdown';
export const trap_up_down = (svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2) => {
    if (k === 0 && k !== l) {
        height1 = 10
        height2 = 30
    }
    if (l === 0 && l !== k) {
        height2 = -10
        height1 = 40
    }
    if (l > k && k !== 0) {
        if ((l - k) <= 5) {
            height1 = 40
            height2 = 25
        }
        if ((l - k) > 5 && (l - k) <= 10) {
            height1 = 40
            height2 = 30
        }
        if ((l - k) > 10) {
            height1 = 40
            height2 = 30
        }
    }
    if (l === k) {
        height1 = 30
        height2 = 10
    }
    if (l < k && parseFloat(l) !== 0) {
        if ((k - l) <= 5) {
            height1 = 50
            height2 = 20
        }
        if ((k - l) > 5 && (k - l) <= 10) {
            height1 = 60
            height2 = 25
        }
        if ((k - l) > 10) {
            height1 = 70
            height2 = 30
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
        .attr("y2", starting_position_y - height2)//
        .style("stroke", "black");
    svg.append("svg:line")
        .attr("x1", starting_position_x)
        .attr("y1", starting_position_y + height1)
        .attr("x2", starting_position_x + difference)
        .attr("y2", starting_position_y - height2)//
        .style("stroke", "black");
    svg.append("text")
        .attr("x", starting_position_x)
        .attr("y", starting_position_y + height1 + 10)
        .style("text-anchor", "start")
        .style("stroke", "#808080")
        .text(k + 'N/m');
    svg.append("text")
        .attr("x", starting_position_x + difference)
        .attr("y", starting_position_y - height2)
        .style("text-anchor", "start")
        .style("stroke", "#808080")
        .text(l + 'N/m');
        svg.append("text")
        .attr("x", starting_position_x )
        .attr("y", starting_position_y )
        .style("text-anchor", "start")
        .style("stroke", "#808080")
        .text('d=' + i + 'm');
    svg.append("text")
        .attr("x", starting_position_x + difference)
        .attr("y", starting_position_y )
        .style("text-anchor", "start")
        .style("stroke", "#808080")
        .text('d='+ j + 'm');
    //arrow
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
            .attr("x2", starting_position_x - 3.5 + difference)
            .attr("y2", starting_position_y)
            .style("stroke", "black");
        svg.append("svg:line")
            .attr("x1", starting_position_x + difference)
            .attr("y1", starting_position_y + 10)
            .attr("x2", starting_position_x + 3.5 + difference)
            .attr("y2", starting_position_y)
            .style("stroke", "black");

        draw_arrow_same(svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2)
    }
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
            .attr("x2", starting_position_x - 3.5 + difference)
            .attr("y2", starting_position_y)
            .style("stroke", "black");
        svg.append("svg:line")
            .attr("x1", starting_position_x + difference)
            .attr("y1", starting_position_y + 10)
            .attr("x2", starting_position_x + 3.5 + difference)
            .attr("y2", starting_position_y)
            .style("stroke", "black");
        if (k < l) {
            draw_arrow_down_up1(svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2)
        }
        else {
            draw_arrow_down_up2(svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2)
        }
    }
    if (k === 0 && k !== l) {
        svg.append("svg:line")
            .attr("x1", starting_position_x + difference)
            .attr("y1", starting_position_y + 10)
            .attr("x2", starting_position_x - 3.5 + difference)
            .attr("y2", starting_position_y)
            .style("stroke", "black");
        svg.append("svg:line")
            .attr("x1", starting_position_x + difference)
            .attr("y1", starting_position_y + 10)
            .attr("x2", starting_position_x + 3.5 + difference)
            .attr("y2", starting_position_y)
            .style("stroke", "black");
        if (difference >= 700) {
            for (var i2 = 10, r1 = starting_position_y + height1; i2 < difference && r1 >= starting_position_y - height2; i2 = i2 + 30, r1 = r1 - 1.4) {
                draw_arrow(svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2, i2, r1)
            }
        }
        if (difference < 700 && difference >= 500) {
            for (var i21 = 10, r11 = starting_position_y + height1; i21 < difference && r11 >= starting_position_y - height2; i21 = i21 + 30, r11 = r11 - 1.8) {
                draw_arrow(svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2, i21, r11)
            }
        }
        if (difference < 500 && difference >= 400) {
            for (var i22 = 10, r12 = starting_position_y + height1; i22 < difference && r12 >= starting_position_y - height2; i22 = i22 + 30, r12 = r12 - 2.5) {
                draw_arrow(svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2, i22, r12)
            }
        }
        if (difference < 400 && difference >= 300) {
            for (var i23 = 10, r13 = starting_position_y + height1; i23 < difference && r13 >= starting_position_y - height2; i23 = i23 + 30, r13 = r13 - 3.1) {
                draw_arrow(svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2, i23, r13)
            }
        }
        if (difference < 300 && difference >= 200) {
            for (var i24 = 10, r14 = starting_position_y + height1; i24 < difference && r14 >= starting_position_y - height2; i24 = i24 + 30, r14 = r14 - 4.5) {
                draw_arrow(svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2, i24, r14)
            }
        }
        if (difference < 200 && difference >= 150) {
            for (var i25 = 10, r15 = starting_position_y + height1; i25 < difference && r15 >= starting_position_y - height2; i25 = i25 + 30, r15 = r15 - 6) {
                draw_arrow(svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2, i25, r15)
            }
        }
        if (difference < 150 && difference >= 100) {
            for (var i26 = 10, r16 = starting_position_y + height1; i26 < difference && r16 >= starting_position_y - height2; i26 = i26 + 30, r16 = r16 - 8) {
                draw_arrow(svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2, i26, r16)
            }
        }
    }
    if (l === 0 && k !== l) {
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
        if (difference >= 500) {
            for (var i4 = 10, r4 = starting_position_y + height1; i4 < difference && r4 >= starting_position_y - height2; i4 = i4 + 30, r4 = r4 - 1.5) {
                draw_arrow_up(svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2, i4, r4)
            }
        }
        if (difference >= 450 && difference < 500) {
            for (var i40 = 10, r40 = starting_position_y + height1; i40 < difference && r40 >= starting_position_y - height2; i40 = i40 + 30, r40 = r40 - 1.9) {

                draw_arrow_up(svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2, i40, r40)
            }
        }
        if (difference < 450 && difference >= 350) {
            for (var i41 = 10, r41 = starting_position_y + height1; i41 < difference && r41 >= starting_position_y - height2; i41 = i41 + 30, r41 = r41 - 2.2) {
                draw_arrow_up(svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2, i41, r41)
            }
        }
        if (difference < 350 && difference >= 200) {
            for (var i42 = 10, r42 = starting_position_y + height1; i42 < difference && r42 >= starting_position_y - height2; i42 = i42 + 30, r42 = r42 - 3.2) {
                draw_arrow_up(svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2, i42, r42)
            }
        }
        if (difference < 200 && difference >= 170) {
            for (var i43 = 10, r43 = starting_position_y + height1; i43 < difference && r43 >= starting_position_y - height2; i43 = i43 + 30, r43 = r43 - 5) {

                draw_arrow_up(svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2, i43, r43)
            }
        }
    }
}
const draw_arrow_up = (svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2, j1, r) => {
    svg.append("svg:line")
        .attr("x1", starting_position_x + j1)
        .attr("y1", starting_position_y + 10)
        .attr("x2", starting_position_x + j1 + 2.5)
        .attr("y2", starting_position_y + 10 + 6)
        .style("stroke", "black");
    svg.append("svg:line")
        .attr("x1", starting_position_x + j1)
        .attr("y1", starting_position_y + 10)
        .attr("x2", starting_position_x + j1 - 2.5)
        .attr("y2", starting_position_y + 6 + 10)
        .style("stroke", "black");
    svg.append("svg:line")
        .attr("x1", starting_position_x + j1)
        .attr("y1", starting_position_y + 10)
        .attr("x2", starting_position_x + j1)
        .attr("y2", r)
        .style("stroke", "black");
}
const draw_arrow = (svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2, j1, r) => {
    svg.append("svg:line")
        .attr("x1", starting_position_x + j1)
        .attr("y1", starting_position_y + 10)
        .attr("x2", starting_position_x + j1 + 3.5)
        .attr("y2", starting_position_y)
        .style("stroke", "black");
    svg.append("svg:line")
        .attr("x1", starting_position_x + j1)
        .attr("y1", starting_position_y + 10)
        .attr("x2", starting_position_x + j1 - 3.5)
        .attr("y2", starting_position_y)
        .style("stroke", "black");
    svg.append("svg:line")
        .attr("x1", starting_position_x + j1)
        .attr("y1", starting_position_y + 10)
        .attr("x2", starting_position_x + j1)
        .attr("y2", r)
        .style("stroke", "black");
}
