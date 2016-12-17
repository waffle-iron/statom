import React from "react";
import { Pane, NavGroup, NavTitle, NavGroupItem } from "react-photonkit";

class Sidebar extends React.Component {
  onSelect(index) {
    console.log(`sidebar clicked with ${index}`)
  }

  render() {
    return (
      <Pane ptSize="sm" sidebar>
        <NavGroup activeKey={1} onSelect={this.onSelect}>
          <NavTitle>Workspaces</NavTitle>
          <NavGroupItem eventKey={1} glyph="folder" text="consumer_data" />
          <NavGroupItem eventKey={2} glyph="folder" text="inflation_cpi" />
        </NavGroup>
      </Pane>
    );
  }
}

export default Sidebar;
