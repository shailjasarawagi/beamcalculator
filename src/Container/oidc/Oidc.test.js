import React from "react";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Oidc from "../oidc/Oidc";
// import App from "../src/App";
import { MemoryRouter } from 'react-router';
import PipingDB from "../PipingDB/PipingDB";
import App2 from "../oidc/App2";

configure({ adapter: new Adapter() });

describe("<Oidc/>", () => {

    it('renders correctly', () => {
        const component = shallow(<Oidc />);
        expect(component).toMatchSnapshot();
    });


    // test('invalid path should redirect to 404', () => {
    //     const wrapper = mount(
    //         <MemoryRouter initialEntries={['/']}>
    //             <Oidc />
    //         </MemoryRouter>
    //     );
    //     expect(wrapper.find(PipingDB)).toHaveLength(0);
    //     expect(wrapper.find(App2)).toHaveLength(1);
    // });

    // test('valid path should not redirect to 404', () => {
    //     const wrapper = mount(
    //         <MemoryRouter initialEntries={['/pdb']}>
    //             <Oidc />
    //         </MemoryRouter>
    //     );
    //     expect(wrapper.find(PipingDB)).toHaveLength(1);
    //     expect(wrapper.find(App2)).toHaveLength(0);
    // });

});