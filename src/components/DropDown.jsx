import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const DropdownComp = (props) => {
  const { handleSearch, userName } = props;
  return (
    <>
      <DropdownButton
        className=" bg-dark navbar-dark mt-5 "
        as={ButtonGroup}
        // key={variant}
        id={`dropdown-variants-secondary`}
        variant="secondary"
        title="Navegar"
      >
        <h6>General</h6>
        <Dropdown.Item
          eventKey="1"
          onClick={() => handleSearch("introduction")}
        >
          Introducción
        </Dropdown.Item>
        <Dropdown.Item eventKey="2" onClick={() => handleSearch("deviceUse")}>
          Uso del dispositivo
        </Dropdown.Item>
        <Dropdown.Item eventKey="3" onClick={() => handleSearch("statistics")}>
          Estadísticas
        </Dropdown.Item>
        <Dropdown.Item
          eventKey="4"
          onClick={() => handleSearch("documentation")}
        >
          Documentación
        </Dropdown.Item>
        <Dropdown.Divider />
        <h6>Área de {userName}</h6>
        <Dropdown.Item eventKey="5" onClick={() => handleSearch("home")}>
          Home
        </Dropdown.Item>
        <Dropdown.Item eventKey="6" onClick={() => handleSearch("clients")}>
          Clientes
        </Dropdown.Item>
        <Dropdown.Item eventKey="6" onClick={() => handleSearch("tests")}>
          Evaluaciones
        </Dropdown.Item>
        <Dropdown.Item eventKey="7" onClick={() => handleSearch("apps")}>
          Apps
        </Dropdown.Item>
        <Dropdown.Item
          eventKey="8"
          onClick={() => handleSearch("userStatistics")}
        >
          Tus estadísticas
        </Dropdown.Item>
        <h6>Otros</h6>
        <Dropdown.Item eventKey="9" onClick={() => handleSearch("jornadas")}>
          Jornadas
        </Dropdown.Item>

        {/* <Dropdown.Item eventKey="3" active>
          Active Item
        </Dropdown.Item> */}
      </DropdownButton>
    </>
  );
};

export default DropdownComp;
