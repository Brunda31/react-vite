import React, { FormEvent, useRef } from "react";
import "./Form.css";

const Form: React.FC = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const person = { name: " ", age: 0 };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // if (nameRef.current !== null) console.log(nameRef.current.value);
    // if (ageRef.current != null) console.log(ageRef.current.value);

    if (nameRef.current !== null) person.name = nameRef.current.value;
    if (ageRef.current !== null) person.age = parseInt(ageRef.current.value);
    console.log(person);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input ref={nameRef} id="name" type="text " className="form-control" />
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input ref={ageRef} id="age" type="number" className="form-control" />
        <button>SUBMIT</button>
      </div>
    </form>
  );
};

export default Form;
