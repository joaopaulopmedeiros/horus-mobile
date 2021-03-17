import { SvgXml } from "react-native-svg";
import React from "react";

const verified = `<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
width="14.000000pt" height="14.000000pt" viewBox="0 0 14.000000 12.000000"
preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,14.000000) scale(0.100000,-0.100000)"
fill="#1477F8" stroke="none">
<path d="M30 122 c-29 -24 -32 -78 -5 -98 44 -32 105 -5 105 47 0 55 -58 85
-100 51z m58 -48 c-14 -15 -31 -23 -37 -20 -16 10 -14 26 2 20 8 -3 20 2 27
11 7 8 17 15 23 15 7 0 0 -12 -15 -26z"/>
</g>
</svg>
`

const VerifiedIcon = () => <SvgXml xml={verified}/>

export default VerifiedIcon;