import React from "react";
import ReactDOM from "react-dom";

interface Props {
  width?: number;
  height?: number;
  left?: number;
  top?: number;
}

export default class WindowPortal extends React.PureComponent<Props> {
  private containerEl: HTMLElement;
  private externalWindow: Window | null;

  constructor(props: Props) {
    super(props);
    this.containerEl = document.createElement("div");
    this.externalWindow = null;
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.containerEl);
  }

  componentDidMount() {
    this.externalWindow = this.createWindow();
    if (this.externalWindow) {
      this.externalWindow.document.body.appendChild(this.containerEl);
    }
  }

  componentWillUnmount() {
    if (this.externalWindow) {
      this.externalWindow.close();
    }
  }

  createWindow(): Window | null {
    let {
      width = 600,
      height = 400,
      top = 200,
      left = 200
    } = this.props;
    let options = `width=${width},height=${height},left=${left},top=${top}`;
    return window.open("", "", options);
  }
}