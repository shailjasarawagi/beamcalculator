import { draw, draw_arrow } from '../trapdowndown/trapDown';
export const trap_down_down = (svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2) => {
    // console.log(height2, height1)
    k = parseFloat(k);
    l = parseFloat(l);
    if (k === 0) {
        height1 = -10
        height2 = 30
    }
    if (l === 0) {
        height2 = -10
        height1 = 30
    }
    if (l > k && k !== 0) {
        if ((l - k) <= 5) {
            height1 = 10
            height2 = 15
        }
        if ((l - k) > 5 && (l - k) <= 10) {
            height1 = 10
            height2 = 25
        }
        if ((l - k) > 10) {

            height1 = 15
            height2 = 30
        }
    }
    if (l === k) {
        height1 = 15
        height2 = 15
    }
    if (l < k && parseFloat(l) !== 0) {
        if ((k - l) <= 5) {
            height1 = 20
            height2 = 10
        }
        if ((k - l) > 5 && (k - l) <= 10) {
            height1 = 30
            height2 = 10
        }
        if ((k - l) > 10) {
            height1 = 40
            height2 = 20
        }
    }


    svg.append("svg:line")
        .attr("x1", starting_position_x)
        .attr("y1", starting_position_y + 10)
        .attr("x2", starting_position_x)
        .attr("y2", starting_position_y - height1)//
        .style("stroke", "black");
    svg.append("svg:line")
        .attr("x1", starting_position_x + difference)
        .attr("y1", starting_position_y + 10)
        .attr("x2", starting_position_x + difference)
        .attr("y2", starting_position_y - height2)//
        .style("stroke", "black");
    svg.append("svg:line")
        .attr("x1", starting_position_x)
        .attr("y1", starting_position_y - height1)//
        .attr("x2", starting_position_x + difference)
        .attr("y2", starting_position_y - height2)//
        .style("stroke", "black");
    svg.append("text")
        .attr("x", starting_position_x)
        .attr("y", starting_position_y - height1 - 10)
        .style("text-anchor", "start")
        .style("stroke", "#808080")
        .text(k);
    svg.append("text")
        .attr("x", starting_position_x + difference)
        .attr("y", starting_position_y - height2)
        .style("text-anchor", "start")
        .style("stroke", "#808080")
        .text(l);

    if (k !== 0 && l !== 0 && k !== l) {
        //arrow
        // console.log(height2, height1)
        svg.append("svg:line")
            .attr("x1", starting_position_x)
            .attr("y1", starting_position_y + 10)
            .attr("x2", starting_position_x - 3.5)
            .attr("y2", starting_position_y)
            .style("stroke", "black");

        svg.append("svg:line")
            .attr("x1", starting_position_x)
            .attr("y1", starting_position_y + 10)
            .attr("x2", starting_position_x + 3.5)
            .attr("y2", starting_position_y)
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

        if (l > k) {
            console.log(difference)
            if (difference >= 700) {
                for (var i0 = 10, r0 = starting_position_y - height1; i0 < difference && r0 >= starting_position_y - height2; i0 = i0 + 30, r0 = r0 - 0.4) {
                    draw_arrow(svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2, i0, r0)

                }
            }
            if (difference < 700 && difference >= 500) {
                for (var i1 = 10, r = starting_position_y - height1; i1 < difference && r >= starting_position_y - height2; i1 = i1 + 30, r = r - 0.6) {
                    draw_arrow(svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2, i1, r)

                }
            }
            if (difference >= 300 && difference < 500) {
                for (var i2 = 10, r2 = starting_position_y - height1; i2 < difference && r2 >= starting_position_y - height2; i2 = i2 + 30, r2 = r2 - 1) {
                    draw_arrow(svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2, i2, r2)

                }
            }
            if (difference >= 200 && difference < 300) {
                for (var i3 = 10, r3 = starting_position_y - height1; i3 < difference && r3 >= starting_position_y - height2; i3 = i3 + 30, r3 = r3 - 1.7) {
                    draw_arrow(svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2, i3, r3)

                }
            }
            if (difference >= 150 && difference < 200) {
                for (var i4 = 10, r4 = starting_position_y - height1; i4 < difference && r4 >= starting_position_y - height2; i4 = i4 + 30, r4 = r4 - 2.3) {
                    draw_arrow(svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2, i4, r4)

                }
            }
            if (difference >= 90 && difference < 150) {
                for (var i5 = 10, r5 = starting_position_y - height1; i5 < difference && r5 >= starting_position_y - height2; i5 = i5 + 30, r5 = r5 - 4) {
                    draw_arrow(svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2, i5, r5)

                }
            }
            if (difference < 90) {
                for (var i6 = 10, r6 = starting_position_y - height1; i6 < difference && r6 >= starting_position_y - height2; i6 = i6 + 30, r6 = r6 - 7) {
                    draw_arrow(svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2, i6, r6)

                }
            }
        }
        else {
            console.log(difference)
            if (difference >= 700) {
                for (var i7 = 10, r7 = starting_position_y - height1; i7 < difference && r7 <= starting_position_y - height2; i7 = i7 + 30, r7 = r7 + 0.6) {
                    // console.log('hello')
                    draw_arrow(svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2, i7, r7)

                }
            }
            if (difference < 700 && difference >= 500) {
                for (var i8 = 10, r8 = starting_position_y - height1; i8 < difference && r8 <= starting_position_y - height2; i8 = i8 + 30, r8 = r8 + 0.8) {
                    // console.log('hello')
                    draw_arrow(svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2, i8, r8)

                }
            }
            if (difference >= 300 && difference < 500) {
                for (var i9 = 10, r9 = starting_position_y - height1; i9 < difference && r9 <= starting_position_y - height2; i9 = i9 + 30, r9 = r9 + 1.2) {
                    // console.log('hello')
                    draw_arrow(svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2, i9, r9)

                }
            }
            if (difference >= 200 && difference < 300) {
                for (var i10 = 10, r10 = starting_position_y - height1; i10 < difference && r10 <= starting_position_y - height2; i10 = i10 + 30, r10 = r10 + 1.7) {
                    // console.log('hello')
                    draw_arrow(svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2, i10, r10)

                }
            }
            if (difference >= 150 && difference < 200) {
                for (var i11 = 10, r11 = starting_position_y - height1; i11 < difference && r11 <= starting_position_y - height2; i11 = i11 + 30, r11 = r11 + 2.2) {
                    // console.log('hello')
                    draw_arrow(svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2, i11, r11)

                }
            }
            if (difference >= 90 && difference < 150) {
                for (var i12 = 10, r12 = starting_position_y - height1; i12 < difference && r12 <= starting_position_y - height2; i12 = i12 + 30, r12 = r12 + 7) {
                    // console.log('hello')
                    draw_arrow(svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2, i12, r12)

                }
            }
            // if (difference < 90) {
            //     for (var i13 = 10, r13 = starting_position_y - height1; i13 < difference && r13 <= starting_position_y - height2; i13 = i13 + 30, r13 = r13 + 9) {
            //         // console.log('hello')
            //         draw_arrow(svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2, i13, r13)

            //     }
            // }

        }
    }
    if (k === 0) {
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


        if (difference >= 500) {
            // console.log(height1, height2)
            for (var i21 = 10, r1 = starting_position_y - height1; i21 < difference && r1 >= starting_position_y - height2; i21 = i21 + 30, r1 = r1 - 1.6) {
                // console.log('hello')
                draw_arrow(svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2, i21, r1)

            }
        }
        if (difference >= 300 && difference < 500) {
            for (var i22 = 10, r22 = starting_position_y - height1; i22 <= difference && r22 >= starting_position_y - height2; i22 = i22 + 30, r22 = r22 - 2.7) {
                // console.log('hello')
                draw_arrow(svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2, i22, r22)

            }
        }
        if (difference >= 200 && difference < 300) {
            for (var i23 = 10, r33 = starting_position_y - height1; i23 < difference && r33 >= starting_position_y - height2; i23 = i23 + 30, r33 = r33 - 5) {
                // console.log('hello')
                draw_arrow(svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2, i23, r33)

            }
        }
        if (difference >= 150 && difference < 200) {
            for (var i24 = 10, r14 = starting_position_y - height1; i24 < difference && r14 >= starting_position_y - height2; i24 = i24 + 30, r14 = r14 - 6) {
                // console.log('hello')
                draw_arrow(svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2, i24, r14)

            }
        }
        if (difference >= 120 && difference < 150) {
            for (var i25 = 10, r15 = starting_position_y - height1; i25 < difference && r15 >= starting_position_y - height2; i25 = i25 + 30, r15 = r15 - 10) {
                // console.log('hello')
                draw_arrow(svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2, i25, r15)

            }
        }

    }
    if (l === 0) {
        svg.append("svg:line")
            .attr("x1", starting_position_x)
            .attr("y1", starting_position_y + 10)
            .attr("x2", starting_position_x - 3.5)
            .attr("y2", starting_position_y)
            .style("stroke", "black");

        svg.append("svg:line")
            .attr("x1", starting_position_x)
            .attr("y1", starting_position_y + 10)
            .attr("x2", starting_position_x + 3.5)
            .attr("y2", starting_position_y)
            .style("stroke", "black");
        console.log(difference)
        // for (var i41 = 10, r41 = starting_position_y - height1; i41 < difference && r41 <= starting_position_y - height2; i41 = i41 + 30, r41 = r41 + 3) {
        //     draw_arrow(svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2, i41, r41)
        // }

        if (difference >= 500) {

            for (var i30 = 10, r20 = starting_position_y - height1; i30 < difference && r20 <= starting_position_y - height2; i30 = i30 + 30, r20 = r20 + 1.7) {
                draw_arrow(svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2, i30, r20)

            }
        }
        if (difference >= 300 && difference < 500) {
            for (var i31 = 10, r21 = starting_position_y - height1; i31 < difference && r21 <= starting_position_y - height2; i31 = i31 + 30, r21 = r21 + 3) {
                draw_arrow(svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2, i31, r21)

            }
        }
        if (difference >= 200 && difference < 300) {
            for (var i32 = 10, r32 = starting_position_y - height1; i32 < difference && r32 <= starting_position_y - height2; i32 = i32 + 30, r32 = r32 + 6) {
                draw_arrow(svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2, i32, r32)

            }
        }
        if (difference >= 150 && difference < 200) {
            for (var i33 = 10, r37 = starting_position_y - height1; i33 < difference && r37 <= starting_position_y - height2; i33 = i33 + 30, r37 = r37 + 6) {
                draw_arrow(svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2, i33, r37)

            }
        }
        if (difference >= 120 && difference < 150) {
            for (var i34 = 10, r34 = starting_position_y - height1; i34 < difference && r34 <= starting_position_y - height2; i34 = i34 + 30, r34 = r34 + 8) {
                draw_arrow(svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2, i34, r34)

            }
        }
    }
    if (l === k) {
        // console.log('hello')
        svg.append("svg:line")
            .attr("x1", starting_position_x)
            .attr("y1", starting_position_y + 10)
            .attr("x2", starting_position_x - 3.5)
            .attr("y2", starting_position_y)
            .style("stroke", "black");

        svg.append("svg:line")
            .attr("x1", starting_position_x)
            .attr("y1", starting_position_y + 10)
            .attr("x2", starting_position_x + 3.5)
            .attr("y2", starting_position_y)
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
        // console.log(height1, height2, difference)
        for (var i55 = 10; i55 < difference; i55 = i55 + 30) {
            // console.log(height1, height2)
            // console.log('hello')
            draw(svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2, i55)
        }
    }
}
