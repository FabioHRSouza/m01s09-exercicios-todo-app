/*import React from "react";

export class Avatar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <img
        src={this.props.src}
        className="img-thumbnail"
        alt={this.props.alt}
      />
    );
  }
}*/

import React from "react";

function Avatar(props) {
  return (
    <img
      src={props.src}
      className="img-thumbnail"
      alt={props.alt}
    />
  );
}
export default Avatar;
