import { useEffect, useState } from "react";
import uuid from "react-uuid";
import Mainbar from "./mainbar/Mainbar";
import "./App.css";
import Main from "./main/Main";

function App() {
  const [txt, settxt] = useState(
    localStorage.txt ? JSON.parse(localStorage.txt) : []
  );
  const [activetxt, setactivetxt] = useState(false);

  
  useEffect(() => {
    localStorage.setItem("txt", JSON.stringify(txt));
  }, [txt]);

  const onAddGroup = ({ groupName, groupColor }) => {
    const newGroup = {
      id: uuid(),
      groupName: groupName,
      groupColor: groupColor,
      notes: [],
    };

    settxt([newGroup, ...txt]);
    setactivetxt(newGroup.id);
  };

  const onDeleteGroup = (groupID) => {
    settxt(txt.filter(({ id }) => id !== groupID));
  };

  const onUpdatetxt = (updatedGroup) => {
    const updatedGroupsArr = txt.map((group) => {
      if (group.id === updatedGroup.id) {
        return updatedGroup;
      }


      return group;
    });



    settxt(updatedGroupsArr);
  };

  const getActiveGroup = () => {
    return txt.find(({ id }) => id === activetxt);
  };





  return (
    <div className="App">
      <Mainbar
        txt={txt}
        onAddGroup={onAddGroup}
        onDeleteGroup={onDeleteGroup}
        activetxt={activetxt}
        setactivetxt={setactivetxt}
        getActiveGroup={getActiveGroup}
      />
      <Main activetxt={getActiveGroup()} onUpdatetxt={onUpdatetxt} />
    </div>
  );
}



export default App;