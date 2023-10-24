import "./Explorer.css";
import { useState } from "react";
import {
  AiFillFolder,
  AiFillFolderOpen,
  AiFillFile,
  AiFillFileAdd,
  AiFillFolderAdd
} from "react-icons/ai";

export const Explorer = ({ data }) => {
  const [updatedData, setUpdatedData] = useState(data);
  const [adding, setAdding] = useState(false);
  const [addingFolder, setAddingFolder] = useState(false);
  const [input, setInput] = useState("");
  const [expanded, setExpanded] = useState(false);

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter" && input.length > 0) {
      if (adding && addingFolder) {
        console.log("folder inserted");
        setUpdatedData((prev) => ({
          ...prev,
          items: [...prev.items, { name: input, isFolder: true, items: [] }]
        }));
        setInput("");
      } else if (adding && !addingFolder) {
        console.log("file inserted");
        setUpdatedData((prev) => ({
          ...prev,
          items: [...prev.items, { name: input, isFolder: false }]
        }));
        setInput("");
      }
      setAdding(false);
      setAddingFolder(false);
    }
  };
  const addFile = (e) => {
    e.stopPropagation();
    setAdding(true);
    setAddingFolder(false);
    setExpanded(true);
  };

  const addFolder = (e) => {
    e.stopPropagation();
    setAdding(true);
    setAddingFolder(true);
    setExpanded(true);
  };

  const inputOnBlurHandler = () => {
    setAdding(false);
    setAddingFolder(false);
  };

  if (data.isFolder) {
    return (
      <div className="explorer">
        <div className="explorer__root" onClick={() => setExpanded(!expanded)}>
          {expanded ? (
            <AiFillFolderOpen className="primary_icon" />
          ) : (
            <AiFillFolder className="primary_icon" />
          )}{" "}
          {updatedData.name}{" "}
          <AiFillFileAdd className="secondary_icon" onClick={addFile} />
          <AiFillFolderAdd className="secondary_icon" onClick={addFolder} />
        </div>
        <div className="explorer__folder" data-expanded={expanded}>
          {updatedData.items.map((item) => (
            <Explorer key={item.name} data={item} />
          ))}
          {adding && addingFolder && <AiFillFolder className="primary_icon" />}
          {adding && !addingFolder && <AiFillFile className="primary_icon" />}
          {adding && (
            <input
              autoFocus
              onBlur={inputOnBlurHandler}
              onChange={inputHandler}
              onKeyPress={handleEnter}
            />
          )}
        </div>
      </div>
    );
  } else {
    return (
      <div className="explorer__file">
        <AiFillFile className="primary_icon" /> {updatedData.name}
      </div>
    );
  }
};
