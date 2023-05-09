import { useEffect, useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const Sidebar = ({
  txt,
  onAddGroup,
  onDeleteGroup,
  activetxt,
  setactivetxt,
  getActiveGroup,
}) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [groupColor, setGroupColor] = useState("red");

  
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }


  return (
    <div className="Mainbar">
      <div
        className="Mainbar-header"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <h1> Pocket Notes</h1>
        <button
          onClick={openModal}
          style={{
            backgroundColor: "black",
            width: "fit-content",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
            marginTop: "5%",
            paddingBlock: "10px",
            paddingInline: "20px",
            borderRadius: "40px",
            
          }}
        >
          + Create Notes Group
        </button>
      </div>
      <div
        className="Mainbar-notes"
        style={{
          alignItems: "start",
          paddingTop: "20px",
          overflow: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",

 
        }}
      >
        {txt.map(({ id, groupName, groupColor, notes }, key) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "20px",
                width: "100%",
                paddingLeft: "10%",
                paddingBlock: "2%",
                alignSelf: "flex-start",
                marginBlock: "10px",
                justifyContent: "flex-start",
                alignItems: "center",
                borderRadius: "50px 0px 0px 50px",
                backgroundColor: getActiveGroup()
                  ? getActiveGroup().id === id
                    ? "#F7ECDC"
                    : "white"
                  : null,
              }}
              onClick={() => setactivetxt(id)}
              onFocus={(e) => (e.target.style.backgroundColor = "#F7ECDC")}
            >
              <div
                style={{
                  color: "white",
                  fontSize: "23px",
                  backgroundColor: groupColor,
                  height: "59px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "55px",
                  borderRadius: "100%",
              
                }}
              >
                {groupName.split(" ")[0] ? (
                  <p>{groupName.split(" ")[0].toString()[0].toUpperCase()}</p>
                ) : null}
                {groupName.split(" ")[1] ? (
                  <p>{groupName.split(" ")[1].toString()[0].toUpperCase()}</p>
                ) : null}
              </div>
              <p style={{ fontSize: "18px", fontWeight: 700 }}>{groupName}</p>
            </div>
          );
        })}
        { }
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <h2>Create New Notes group</h2>
        <div
          style={{
            justifyContent: "start",
            alignItems: "center",
            gap: "5%",
            display: "flex",
            flexDirection: "row",
            
          }}
        >
          <p style={{ fontWeight: 600 }}>Group Name</p>
          <input
            type="text"
            placeholder="Enter your group name..."
            onChange={(e) => setGroupName(e.target.value)}
            value={groupName}
            style={{
              width: "60%",
              borderRadius: "20px",
              height: "35px",
              paddingLeft: "10px",
            }}
          ></input>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "start",
            alignItems: "center",
            gap: "5%",
          }}
        >
          <p style={{ fontWeight: 600 }}>Group Name</p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <button
              style={{
                width: "30px",
                height: "30px",
                backgroundColor: "red",
                borderRadius: "100%",
                border: groupColor === "red" ? "2px solid black" : "none",
              }}
              onClick={() => setGroupColor("red")}
            ></button>
            <button
              style={{
                width: "30px",
                height: "30px",
                backgroundColor: "black",
                borderRadius: "100%",
                border: groupColor === "black" ? "2px solid black" : "none",
              }}
              onClick={() => setGroupColor("black")}
            ></button>
            <button
              style={{
                width: "30px",
                height: "30px",
                backgroundColor: "green",
                borderRadius: "100%",
                border: groupColor === "green" ? "2px solid black" : "none",
              }}
              onClick={() => setGroupColor("green")}
            ></button>
            <button
              style={{
                width: "30px",
                height: "30px",
                backgroundColor: "yellow",
                borderRadius: "100%",
                border: groupColor === "yellow" ? "2px solid black" : "none",
              }}
              onClick={() => setGroupColor("yellow")}
            ></button>
            <button
              style={{
                width: "30px",
                height: "30px",
                backgroundColor: "brown",
                borderRadius: "100%",
                border: groupColor === "brown" ? "2px solid black" : "none",
              }}
              onClick={() => setGroupColor("brown")}
            ></button>
            <button
              style={{
                width: "30px",
                height: "30px",
                backgroundColor: "purple",
                borderRadius: "100%",
                border: groupColor === "purple" ? "2px solid black" : "none",
              }}
              onClick={() => setGroupColor("purple")}
            ></button>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <button
            style={{
              alignSelf: "flex-end",
              paddingBlock: "10px",
              paddingInline: "40px",
              borderRadius: "10px",
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "black",
              width: "fit-content",
              height: "30px",
              
              marginTop: "5%",
            }}
            onClick={() => {
              onAddGroup({ groupName, groupColor });
              setIsOpen(false);
              setGroupName("");
              setGroupColor("");
            }}
          >
            Create
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Sidebar;

const customStyles = {
  content: {
    left: "50%",
    width: "488px",
    marginRight: "-50%",
    top: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
  },
};