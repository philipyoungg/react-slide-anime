import React, { Component } from "react";
import Anime from "react-anime";
import styled from "styled-components";
import { range } from "ramda";

const Slide = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  opacity: ${p => (p.offset ? p.offset / 10 : 0)}
  left: ${p => (p.offset ? p.offset * 100 : 0)}%
  background: red;
`;

class App extends Component {
  render() {
    return (
      <div className="w-100 vh-100 relative overflow-hidden">
        <Anime
          duration={3000}
          easing="easeInOutQuad"
          direction="alternate"
          loop={true}
          translateX={[0, "-1000vw"]}
        >
          <div>
            {range(1, 11).map(i => <Slide offset={i} />)}
          </div>
        </Anime>
      </div>
    );
  }
}

export default App;
