import React from "react";
import {Link} from 'react-router-dom';

const note = (props) => {
  return (
    <React.Fragment>
      <p>
        <Link to={"/edit/" + props.id}>
          {props.title}
        </Link>
      </p>
      <p>{props.content}</p>
      <p>{props.time}</p>
    </React.Fragment>
  );
};

export default note;
