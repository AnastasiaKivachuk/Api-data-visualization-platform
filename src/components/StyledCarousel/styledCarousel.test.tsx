import {shallow} from "enzyme";

import StyledCarousel from "./index";


const images = ["https://farm9.staticflickr.com/8617/16789019815_f99a165dc5_o.jpg",
    "https://farm8.staticflickr.com/7619/16763151866_35a0a4d8e1_o.jpg",
    "https://farm9.staticflickr.com/8569/16169086873_4d8829832e_o.png"]

const alt = "Thaicom 6";

const setUp = (props: { alt: string, imagesUrls: string[] } | {}) => shallow(<StyledCarousel {...props} />);

describe("StyledCarousel component", () => {
        it("should render StyledCarousel component", () => {
            const component = setUp({alt: alt, imagesUrls: images})
            expect(component).toMatchSnapshot();
        })

        it("should render StyledCarousel component without props", () => {
            const component = setUp({})
            expect(component).toMatchSnapshot();
        })

        it("check all elements", () => {
            const component = setUp({alt: alt, imagesUrls: images})
            expect(component.find('Styled(div)').length).toBe(3);
            expect(component.find('Styled(img)').length).toBe(3);
            const imgComponents = component.find('Styled(img)').map((item) => item.prop("src"))
            expect(imgComponents).toEqual(images)

        })

        it("check all elements with defaultProps", () => {
            const component = setUp({})
            expect(component.find('Styled(div)').length).toBe(0);
        })
    }
)