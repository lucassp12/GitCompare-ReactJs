import React, { Fragment } from "react";

import GlobalStyled from "./styles/global";

import Main from "./pages/Main/index";

const App = () => (
  <Fragment>
    <GlobalStyled />
    <Main />;
  </Fragment>
);

export default App;
