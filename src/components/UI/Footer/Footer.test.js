import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Footer from "./Footer";

configure({ adapter: new Adapter() });
describe("<Footer/>", () => {
  it('renders correctly', () => {
  const links = 
  [{link: 'www.calcgen.com', text: 'Calcgen'}];   
  const component = shallow(<Footer links={links} />);
   expect(component).toMatchSnapshot();
  });
    });
 


