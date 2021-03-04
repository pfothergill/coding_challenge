import React, { useRef } from "react";

export const QuizLevel3 = ({
  // Here is the list of functions that you should use
  sendName,
  sendPhone,
  sendCookingDone,
  sendProgrammingDone,
  sendWashingDone,
  sendStylingDone
}) => {
  // Create other refs here
  const nameRef = useRef();
  const phoneRef = useRef();
  const cookingRef = useRef();
  const washingRef = useRef();
  const programmingRef = useRef();
  const stylingRef = useRef();

  // Add some code inside this function for sending data from the form to the document
  const applyFormData = (e) => {
    e.preventDefault();
    sendName(nameRef.current.value);
    sendPhone("+375" + phoneRef.current.value);
    sendCookingDone(cookingRef.current.checked);
    sendProgrammingDone(programmingRef.current.checked);
    sendWashingDone(washingRef.current.checked);
    sendStylingDone(stylingRef.current.checked);
  };

  return (
    <form className="document-input" onSubmit={(e) => applyFormData(e)}>
      {/* Name */}
      <label htmlFor="name-input">Name:</label>
      <input id="name-input" placeholder="Teddy Brown" ref={nameRef} />

      {/* Phone */}
      <label htmlFor="phone-input">Phone:</label>
      <input id="phone-input" placeholder="44 123 45 67" ref={phoneRef} />

      <label htmlFor="activities-input">Done:</label>
      <div id="activities-input">
        {/* Cooking checkbox */}
        <input type="checkbox" value="false" id="cooking" ref={cookingRef} />
        <label htmlFor="cooking">Cooked 3 burgers</label>
        <br />

        {/* Washing checkbox */}
        <input type="checkbox" id="washing" ref={washingRef} />
        <label htmlFor="washing">Washed a car</label>
        <br />

        {/* Styling checkbox */}
        <input type="checkbox" id="styling" ref={stylingRef} />
        <label htmlFor="styling">Styled a room</label>
        <br />

        {/* Programming checkbox */}
        <input type="checkbox" id="programming" ref={programmingRef} />
        <label htmlFor="programming">Programmed a form</label>
        <br />
      </div>

      <input type="submit" value="Apply" id="apply-button" />
    </form>
  );
};
