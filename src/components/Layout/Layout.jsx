import React, { Component } from "react";
import classes from "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import Sidedrawer from "../Navigation/Sidedrawer/Sidedrawer";

class Layout extends Component {
  state = { showSidedrawer: false };
  sidedrawerClosehandler = () => {
    this.setState({ showSidedrawer: false });
  };

  menuClickhandler = () => {
    this.setState(prevState => {
      return { showSidedrawer: !prevState.showSidedrawer };
    });
  };
  render() {
    return (
      <>
        <Toolbar clicked={this.menuClickhandler} />
        <Sidedrawer
          open={this.state.showSidedrawer}
          closed={this.sidedrawerClosehandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </>
    );
  }
}

export default Layout;
