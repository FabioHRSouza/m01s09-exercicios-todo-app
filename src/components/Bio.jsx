/*import React from "react";

export class Bio extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>Bio</h3>
        {this.props.children}
      </div>
    );
  }
}*/

import React from "react";

function Bio(props) {
  return (
    <div>
      <h3>Bio</h3>
      {props.children}
    </div>
  );
}
export default Bio;

