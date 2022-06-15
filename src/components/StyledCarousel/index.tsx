import React from "react";
import styled from "@emotion/styled";

import ArrowCircleRightSharpIcon from "@mui/icons-material/ArrowCircleRightSharp";
import ArrowCircleLeftSharpIcon from "@mui/icons-material/ArrowCircleLeftSharp";
import Carousel from "react-material-ui-carousel";

type Props = {
    imagesUrls: string[],
    alt: string
}

const StyledCarousel = ({imagesUrls, alt}: Props): JSX.Element => {

    const StyledMuiCarousel = styled(Carousel)`
      width: 100%;
    `
    const WrapImg = styled.div`
      display: flex;
      justify-content: center;
    `

    const Img = styled.img`
      max-height: 400px;
    `

    return (
        <StyledMuiCarousel
            NextIcon={<ArrowCircleRightSharpIcon/>}
            PrevIcon={<ArrowCircleLeftSharpIcon/>}
        >
            {imagesUrls?.map((img) =>
                <WrapImg key={img}>
                    <Img src={img} alt={alt}/>
                </WrapImg>)}
        </StyledMuiCarousel>
    )
}

StyledCarousel.defaultProps = {
    alt: '',
    imagesUrls: []
}

export default StyledCarousel
