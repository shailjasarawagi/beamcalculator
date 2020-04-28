import React from "react";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App2 from "../oidc/App2";
import { cleanup } from '@testing-library/react';
// import { MemoryRouter } from 'react-router-dom'
// import MockAdapter from 'axios-mock-adapter';
import axios from "axios";


afterEach(cleanup);

configure({ adapter: new Adapter() });



describe('Layout', () => {
    it('should render the component without errors', () => {
        const wrapper = mount(
            <App2.WrappedComponent />
        );
        expect(wrapper).toMatchSnapshot();
    });
    describe('App2', () => {
        test('async test', async () => {
            const asyncMock = jest.fn().mockResolvedValue();
            await asyncMock();

        });
        it('success', async () => {
            const asyncMock = jest.fn().mockResolvedValue();
            const spyOn = jest.spyOn(console, 'log');
            asyncMock(<App2.WrappedComponent />);
            await
                expect(spyOn).toHaveBeenCalledTimes(0);
            spyOn.mockRestore();
        });

    });


    it('a post request should be made', () => {
        const wrapper = mount(
            <App2.WrappedComponent />
        );
        const postSpy = jest.spyOn(axios, 'get');
        // console.log(postSpy);
    });


    // it('accepts a callback that returns an axios request', function () {
    //     const wrapper = mount(
    //         <MemoryRouter initialEntries={[{ pathname: '/' }]}>
    //             <App2 />
    //         </MemoryRouter>,
    //     );
    //     var instance;
    //     var mock = new MockAdapter(instance);
    //     mock
    //         .onGet('/oidc/auth/request/')
    //         .reply(404, { data: 'aaa' })


    //     return axios.get('/oidc/auth/request/').then(function (response) {
    //         expect(response.status).toEqual(404);

    //     });
    // });
});







