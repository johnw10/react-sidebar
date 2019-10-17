import React from "react";
import styled from "styled-components";

const Styleddiv = styled.div`
    width:100%;
    background:#CDDCDC;
    position:fixed;
    top:0;
    left:0;
`;

const StyledH1 = styled.h1`
    margin-left: 20px;
    font-size:4rem;
`;

const Titlebar = () => {
    return(
        <Styleddiv>
        <StyledH1>The Brand</StyledH1>
        </Styleddiv>
    )
    
}

export default Titlebar;