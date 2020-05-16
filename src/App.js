import "@compiled/css-in-js";
import "twin.macro";
import React from "react";

function App() {
  //  This works
  // return <div css={{ display: "flex" }}>Hi</div>;

  // This doesn't
  return <div tw="flex">Hi</div>;
}

export default App;
