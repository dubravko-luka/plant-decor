import React, { memo } from "react";
import styled from "styled-components";

const Wrapper = styled.div<{ sm?: string, any?: string }>`
  transform: translateY(${({ sm }) => sm});
  transition: all .3s linear;

  @media (max-width: 639px) {
    transform: translateY(${({ any }) => any});
  }
`;

const Home: React.FC = () => {

  return (
    <>

      <Wrapper>
        {/*  */}
      </Wrapper >
    </>
  )
}

export default memo(Home)