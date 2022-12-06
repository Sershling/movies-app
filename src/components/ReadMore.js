import React, { useState } from "react";
import { Badge } from "react-bootstrap";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 200) + " " : text + " "}
      <Badge
        style={{ cursor: "pointer" }}
        bg="dark"
        onClick={toggleReadMore}
        className="read-or-hide"
      >
        {isReadMore ? "...read more" : "show less"}
      </Badge>
    </p>
  );
};

export default ReadMore;
