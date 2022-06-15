import {shallow} from "enzyme";

import {HOME_ROUTE, LAUNCHES_ROUTE, USERS_ROUTE} from "../../constants/routes.constants";
import Menu from "./index";


const routes = [HOME_ROUTE, HOME_ROUTE, USERS_ROUTE, LAUNCHES_ROUTE]

const component = shallow(<Menu/>);

describe("Menu component", () => {
        it("should render Menu component", () => {
            expect(component).toMatchSnapshot();
        })
        it("check all elements", () => {
            expect(component.find('a').length).toBe(4)
            component.find('ForwardRef').map((item, index) =>
                expect(item.prop('href')).toBe(routes[index]))
        })
    }
)