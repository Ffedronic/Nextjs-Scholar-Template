import React from "react";

interface SectionTitleProps {
  title: string,
  subtitle: string,
  description?: string
}

function SectionHeading(props: SectionTitleProps) {
  return (
    <div className="section-heading">
      <h2>{props.title}</h2>
      <h3>{props.subtitle}</h3>
      {props.description ? <p>{props.description}</p>: null}
    </div>
  );
}

export default SectionHeading;
