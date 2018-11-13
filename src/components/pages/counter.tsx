import React from "react";
import { compose } from "recompose";
import { Typography, Button } from "../mui";
import { withDrawerAndTitleBar } from "../layout/DrawerAndTitleBar";

interface Props {
  count: number;
  onIncrement: () => void
};

const Counter: React.SFC<Props> = ({ count, onIncrement }) => {
  const onClick = () => {
    console.log("clicked");
    onIncrement();
  }
  return (
    <>
      <Typography variant="h4">
        Counter: {count}
      </Typography>
      <Button onClick={onClick}>Add One</Button>
    </>
  )
}

export default Counter;