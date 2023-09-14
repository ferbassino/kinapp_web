import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import getTests from "../../auxiliaries/getTests";
import getLocalStorageUser from "../../auxiliaries/getLocalStorageUser";
import client from "../../api/client";
import { getHour, getDate } from "../../auxiliaries/getDate";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import getCurrentUserTests from "../../auxiliaries/getCurrentUserTests";
import getClientWithId from "../../auxiliaries/getClientwithId";

const EditorMotions = ({ user }) => {
  const navigate = useNavigate();
  const [allUserTests, setAllUserTests] = useState([]);
  const [noData, setNoData] = useState(false);
  const [noDataMessage, setNoDataMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [mov, setMov] = useState("allTests");
  const [clientData, setClientData] = useState([]);
  useEffect(() => {
    getAllTests();
  }, [mov]);

  const getAllTests = async () => {
    setNoData(false);
    setNoDataMessage(``);
    setLoading(true);

    try {
      const allCurrentUserTests = await getCurrentUserTests(user);

      if (allCurrentUserTests.length === 0) {
        setNoData(true);
        setNoDataMessage("no evaluation data found");
      }

      if (mov === "allTests") {
        setAllUserTests(allCurrentUserTests);
        setLoading(false);
      } else {
        setLoading(true);

        const newData = allCurrentUserTests.filter(
          (el) => el.motionType === mov
        );

        if (newData.length === 0) {
          setLoading(false);
          setNoData(true);
          setNoDataMessage(`no evaluation data found to ${mov}`);
        } else {
          setAllUserTests(newData);
          setLoading(false);
        }
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const handleTest = async (el) => {
    const id = el.clientId[0];

    const clientData = await getClientWithId(id);

    navigate("/editor/motion", { state: { el, clientData } });
  };
  const selectMov = (e) => {
    setMov(e.target.value);
  };

  return (
    <div className="container">
      <div className="col">
        <Header title="Tests" />
        {loading ? (
          <>
            <h1>loading tests...</h1>
          </>
        ) : (
          <>
            <ButtonGroup size="lg" className="mb-2">
              <Button value={"allTests"} onClick={(e) => selectMov(e)}>
                Todas
              </Button>

              <Button value={"vector"} onClick={(e) => selectMov(e)}>
                Traslación
              </Button>
              <Button value={"rotacion"} onClick={(e) => selectMov(e)}>
                Rotación
              </Button>

              <Button value={"jump"} onClick={(e) => selectMov(e)}>
                Salto
              </Button>
            </ButtonGroup>
            {noData ? (
              <>
                <h1>{noDataMessage}</h1>
              </>
            ) : (
              <>
                {mov === "allTests" ? (
                  <h2>{`${mov}: ${allUserTests.length}`}</h2>
                ) : (
                  <h2>{`Type: ${mov} ${allUserTests.length}`}</h2>
                )}
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">
                        {/* <img src={logo} className="App-logo" alt="logo" /> */}
                      </th>
                      <th scope="col">Date</th>
                      <th scope="col">Email</th>
                      {mov === "allTests" ? null : <td>Type</td>}
                      <th scope="col">movement</th>
                      <th scope="col">side</th>
                    </tr>
                  </thead>
                  <tbody>
                    <>
                      {allUserTests.map((el, index) => (
                        <tr key={index} onClick={() => handleTest(el)}>
                          <td>{index + 1}</td>
                          <td>{getDate(el.date)}</td>
                          <td>{el.email}</td>
                          {mov === "allTests" ? null : <td>{el.side}</td>}
                          <td>{el.motion}</td>
                          {el.side ? <td>{el.side}</td> : <td>-</td>}
                        </tr>
                      ))}
                    </>
                  </tbody>
                </table>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default EditorMotions;
