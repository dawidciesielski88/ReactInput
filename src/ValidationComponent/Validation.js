import React from "react";

const validation = (props) => {
  let validationMasssage = "Text long enough";

  if (props.inputLength <= 5) {
    validationMasssage = "Text to short";
  }

  return (
    <div>
      <p>{validationMasssage}</p>
    </div>
  );
};

export default validation;
