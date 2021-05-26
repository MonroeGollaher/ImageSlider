import React from "react";

import BeforeAfterSlider from "react-before-after-slider";

import Before from "./assets/imgs/CornBW.jpg";
import After from "./assets/imgs/Corn.JPG";

import { Wrapper } from "./styles";

const ImageSlider = () => {
  return (
    <Wrapper>
      <BeforeAfterSlider
        before={Before}
        after={After}
        width={1920}
        height={1080}
      />
    </Wrapper>
  );
};

export default ImageSlider;
