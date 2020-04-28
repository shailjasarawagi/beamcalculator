import * as functions from '../Functions/Function';

describe("Function ", () => {
    it('renders correctly', () => {
        let token = localStorage.getItem("token");
        const header = functions.getToken();
        // console.log(header);
        expect(header).toMatchObject({ 'Content-Type': 'application/json', Authorization: 'Bearer ' + token });

    });
});