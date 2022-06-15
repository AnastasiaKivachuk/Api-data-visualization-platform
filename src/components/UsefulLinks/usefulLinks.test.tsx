import {shallow} from "enzyme";
import React from "react";

import ArticleIcon from "@mui/icons-material/Article";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SchoolIcon from "@mui/icons-material/School";

import UsefulLinks from "./index";

const MockLinks = {
    article_link: "http://spacenews.com/38959spacex-delivers-thaicom-6-satellite-to-orbit/",
    flickr_images: ['https://farm9.staticflickr.com/8617/16789019815_f99a165dc5_o.jpg', 'https://farm8.staticflickr.com/7619/16763151866_35a0a4d8e1_o.jpg', 'https://farm9.staticflickr.com/8569/16169086873_4d8829832e_o.png'],
    mission_patch_small: "https://images2.imgbox.com/d8/6d/fnqIBEJh_o.png",
    video_link: "https://www.youtube.com/watch?v=AnSNRzMEmCU",
    wikipedia: "https://en.wikipedia.org/wiki/Thaicom_6"
}

const component = shallow(<UsefulLinks launchLinks={MockLinks}/>);

describe("UsefulLinks component", () => {
        it("should render Menu component", () => {
            expect(component).toMatchSnapshot();
        })
        it("check all elements", () => {
            expect(component.find('a').length).toBe(3)
        })

        it("check  getLinks links method", () => {
            const result = [
                "http://spacenews.com/38959spacex-delivers-thaicom-6-satellite-to-orbit/", "https://www.youtube.com/watch?v=AnSNRzMEmCU", "https://en.wikipedia.org/wiki/Thaicom_6"
            ]

            component.find('ForwardRef').map((item, index) =>
                expect(item.prop('href')).toBe(result[index]))

        })

    }
)