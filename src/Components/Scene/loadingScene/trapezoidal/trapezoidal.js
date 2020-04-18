import { trap_up_down } from './trapupdown/trapupdown';
import { trap_up_up } from './trapupup';
import { trap_down_down } from './trapdowndown';
import { trap_down_up } from './trapdownup/trapdownup'

export const trapezoidal = (svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference) => {
    var height1, height2;
    k = parseFloat(k);
    l = parseFloat(l);

    if (x === 'Up' && z === 'Up') {

        trap_up_up(svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2)
    }
    if (x === 'Down' && z === 'Down') {
        trap_down_down(svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2)
    }
    if (x === 'Up' && z === 'Down') {
        trap_up_down(svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2)
    }
    if (x === 'Down' && z === 'Up') {
        trap_down_up(svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2)
    }


}
