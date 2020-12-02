import React, { useEffect } from "react";

function Detail(props) {
  const {
    location: { state },
    history,
  } = props;

  useEffect(() => {
    if (state == undefined) {
      history.push("/");
    }
  }, []);

  return (
    <div className="about__container">
      <span>{state && state.title}</span>
    </div>
  );
}

export default Detail;
