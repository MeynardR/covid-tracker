import React, { useState } from "react"

const ReadMore = ({ limit, children }) => {

  const [isReadMoreShown, setIsReadMoreShown] = useState(false);

  const toggleBtn = () => {
    setIsReadMoreShown(prevState => !prevState);
  }

  return (
    <React.Fragment>
      {!isReadMoreShown ? children : children }
      <button onClick={toggleBtn}>Read More</button>
    </React.Fragment>
  )
};

export default ReadMore;
