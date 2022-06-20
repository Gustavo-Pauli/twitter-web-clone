import React, { ChangeEvent, HTMLAttributes } from "react";
import { useState } from "react";
import { Container } from "./styles";

interface Args {
  maxHeight?: number
}

const TextArea: React.FC<HTMLAttributes<HTMLTextAreaElement> & Args> = (props) => {
  // const [rows, setRows] = useState(1);
  // const rowHeight = 26;
  // const margin = 8;
  // const maxRows = 12
  let showingScrollbar = false;

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    // shrink to the minimum height
    event.target.style.height = "1px";
    const areaHeight = event.target.scrollHeight;
    event.target.style.height = areaHeight+"px";
    console.log(areaHeight, " > ", props.maxHeight);

    // show scrollbar if needed
    if (props.maxHeight !== undefined) {
      if (!showingScrollbar && areaHeight > props.maxHeight) {
        console.log("auto");
        event.target.style.overflow = "auto";
        showingScrollbar = true;
      } 
      else if (showingScrollbar && areaHeight <= props.maxHeight) {
        console.log("hidden");
        event.target.style.overflow = "hidden";
        showingScrollbar = false;
      }
    }



    // const idealRows = Math.ceil((areaHeight - margin) / rowHeight);

    /*
    console.log(Math.ceil((areaHeight - margin) / rowHeight), areaHeight);

    if (rows !== idealRows) {
      setRows(idealRows);
    }
    */
    
  }

  // const element = <Container {...props} rows={rows} onChange={event => handleChange(event)}></Container>;


  return <Container {...props} required onChange={event => handleChange(event)}></Container> ;
};

export default TextArea;
