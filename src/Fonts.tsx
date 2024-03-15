import React from "react";
import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
    @font-face{
        font-family:'Body Font';
        font-style:normal;
        font-weight:400;
        src:local('Amoera'),url(https://fonts.cdnfonts.com/s/107547/amoera-personal-use-only.woff) format('woff');
    }
    @font-face {
        font-family: 'Heading Font';
        font-style: normal;
        font-weight: 400;
        src: local(''), url('https://fonts.cdnfonts.com/s/107503/Beyonders-6YoJM.woff') format('woff');
    }
      `}
  />
);

export default Fonts;
