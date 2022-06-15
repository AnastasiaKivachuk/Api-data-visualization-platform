import {shallow} from "enzyme";
import React from "react";

import Launch from "./index";
import {LaunchWithDetailsFullInterface} from "../../interfaces/lauch.interface";

const MockLaunchData = (status = true) => ({
    details: "Second GTO launch for Falcon 9. The USAF evaluated launch data from this flight as part of a separate certification program for SpaceX to qualify to fly U.S. military payloads and found that the Thaicom 6 launch had \"unacceptable fuel reserves at engine cutoff of the stage 2 second burnoff",
    id: "13",
    launch_date_utc: "2014-01-06T18:06:00.000Z",
    launch_success: status,
    mission_name: "Thaicom 6",
    rocket: {
        rocket_name: "Falcon 9"
    },
    links: {
        article_link: "http://spacenews.com/38959spacex-delivers-thaicom-6-satellite-to-orbit/",
        flickr_images: ['https://farm9.staticflickr.com/8617/16789019815_f99a165dc5_o.jpg', 'https://farm8.staticflickr.com/7619/16763151866_35a0a4d8e1_o.jpg', 'https://farm9.staticflickr.com/8569/16169086873_4d8829832e_o.png'],
        mission_patch_small: "https://images2.imgbox.com/d8/6d/fnqIBEJh_o.png",
        video_link: "https://www.youtube.com/watch?v=AnSNRzMEmCU",
        wikipedia: "https://en.wikipedia.org/wiki/Thaicom_6"
    }
})

const setUp = (props: LaunchWithDetailsFullInterface) => shallow(<Launch {...props}/>);

describe("MockLaunchData component", () => {

    it("should render MockLaunchData component with status true", () => {
        const component = setUp({launch: MockLaunchData()})
        expect(component).toMatchSnapshot();
    })

    it("check all elements", () => {

        const component = setUp({launch: MockLaunchData()})
        const text = ['Thaicom 6', "Date of launch: 06.01.2014, 21:06 PM", "Second GTO launch for Falcon 9. The USAF evaluated launch data from this flight as part of a separate certification program for SpaceX to qualify to fly U.S. military payloads and found that the Thaicom 6 launch had \"unacceptable fuel reserves at engine cutoff of the stage 2 second burnoff", "Rocket: Falcon 9"]
        expect(component.find('ForwardRef(Typography)').length).toEqual(4)
        component.find('ForwardRef(Typography)').map((item, index) =>
            expect(item.text()).toEqual(text[index]))

    })

    it("should render MockLaunchData component with status false", () => {
        const component = setUp({launch: MockLaunchData(false)})
        expect(component).toMatchSnapshot();

    })
})
