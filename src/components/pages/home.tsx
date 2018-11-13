import React from "react";
import { Typography, Button } from '../mui';
import WindowPortal from '../layout/portals/WindowPortal';
import Counter from './counter';

interface State {
    open: boolean,
    count: number
}
interface Props {

}

class Home extends React.PureComponent<Props, State> {
    state = {
        open: false,
        count: 0
    }

    togglePortal = () => {
        this.setState(s => ({ ...s, open: !s.open }));
    }

    increment = () => {
        console.log("increment");
        this.setState(s => ({ ...s, count: s.count + 1 }));
    }

    render() {
        const message = this.state.open ? "Close Portal" : "Open Portal";
        return (
            <>
                <Typography variant="h2">Home</Typography>
                <Typography variant="h5">Counter: {this.state.count}</Typography>
                <div>
                    <Button onClick={this.increment}>Add One</Button>
                    <Button onClick={this.togglePortal}>{message}</Button>
                </div>
                {this.state.open && (
                    <WindowPortal>
                        <Counter onIncrement={() => this.increment()} count={this.state.count} />
                    </WindowPortal>
                )}
            </>
        )
    }
}

export default Home;