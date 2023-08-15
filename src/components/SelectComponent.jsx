import React from "react";
import { Form } from "react-bootstrap";

const SelectComponent = ({ title, onChange, array, className }) => {
  return (
    <Form.Group className={className}>
      <Form.Label>{title}</Form.Label>
      <Form.Select aria-label="Default select example" onChange={onChange}>
        <option>Open this select menu</option>
        {array.map((el) => (
          <option value={el.value} key={el.value}>
            {el.text}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
  );
};

export default SelectComponent;
