import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import getTests from "../../auxiliaries/getTests";
import getLocalStorageUser from "../../auxiliaries/getLocalStorageUser";
import client from "../../api/client";
import { getHour, getDate } from "../../auxiliaries/getDate";
import { useNavigate } from "react-router-dom";

const ReaderMotions = () => {
  const navigate = useNavigate();
  const [allUserTests, setAllUserTests] = useState([]);
  const [noData, setNoData] = useState(false);

  useEffect(() => {
    getAllTests();
  }, []);

  const getAllTests = async () => {
    try {
      //   let all = {};
      const { data } = await getTests();
      const allTests = data.motionTests;

      const allC = await client("/api/clients");
      let allClients = allC.data.clients;

      if (data.success) {
        const { id } = await getLocalStorageUser();
        const { data } = await client.get("/users");
        const users = data.users;
        //search all test for current user
        const user = users.find((el) => el._id === id);
        let allUserT = [];
        allTests.map((el) => {
          if (el.userId[0] === user._id) {
            allUserT.push(el);
          }
        });

        let all = [];
        for (let i = 0; i < allClients.length; i++) {
          allUserT.map((el, index) => {
            if (el.clientId[0] === allClients[i]._id) {
              all.push({ ...allUserT[i], email: allClients[i].email });
            }
          });
        }
        setAllUserTests(all);
      } else {
        console.log("no Data");
      }

      setNoData(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleTest = (el) => {
    navigate("/reader/motion", { state: { el, email: el.email } });
  };

  return (
    <div className="container">
      <Header title={`all tests`} />
      <div className="col">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
              </th>
              <th scope="col">Date</th>
              <th scope="col">Hour</th>
              <th scope="col">Email</th>
              <th scope="col">Segment</th>
              <th scope="col">movement</th>
              <th scope="col">side</th>
            </tr>
          </thead>
          <tbody>
            {allUserTests.map((el, index) => (
              <tr key={index} onClick={() => handleTest(el)}>
                <td>{index + 1}</td>
                <td>{getDate(el.date)}</td>
                <td>{getHour(el.date)}</td>
                <td>{el.email}</td>
                <td>{el.segment}</td>
                <td>{el.motion}</td>
                {el.side ? <td>{el.side}</td> : <td>-</td>}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReaderMotions;
