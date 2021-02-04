import React from "react";
import Title from "./Title";
import Description from "./Description";

// MainHeader: contiene a Title y Description
export default function MainHeader(props) {
  const { state } = props;
  return (
    <section className="section section__header">
      <Title />
      <Description state={state} />
    </section>
  );
}
