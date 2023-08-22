import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const DropdownComp = () => {
  return (
    <>
      <DropdownButton
        className=" bg-dark navbar-dark mt-5 "
        as={ButtonGroup}
        // key={variant}
        id={`dropdown-variants-secondary`}
        variant="secondary"
        title="Seleccionar evaluación"
      >
        <Dropdown.Item eventKey="1">Todos</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="2">Traslación</Dropdown.Item>
        <Dropdown.Item eventKey="3">Caída libre</Dropdown.Item>
        <Dropdown.Item eventKey="4">Salto</Dropdown.Item>
        <Dropdown.Item eventKey="5">Rotación</Dropdown.Item>
        <Dropdown.Item eventKey="5"></Dropdown.Item>

        {/* <Dropdown.Item eventKey="3" active>
          Active Item
        </Dropdown.Item> */}
      </DropdownButton>
    </>
  );
};

export default DropdownComp;
