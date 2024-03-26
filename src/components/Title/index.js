import React from "react";

import { H1 } from "./styles";

function Title({ children, isMarginLeft }) {
    return <H1 isMarginLeft={isMarginLeft} >{children}</H1>
}

export default Title