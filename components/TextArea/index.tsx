import React, { ChangeEvent, HTMLAttributes } from "react";
import { useState } from "react";
import { Container } from "./styles";

interface Args {
  maxHeight?: number
}

const TextArea: React.FC<HTMLAttributes<HTMLTextAreaElement> & Args> = (props, {maxHeight}) => {
  // const [rows, setRows] = useState(1);
  // const rowHeight = 26;
  // const margin = 8;
  // const maxRows = 12

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    // const rows = event.target.rows;
    event.target.style.height = "1px";
    const areaHeight = event.target.scrollHeight;
    event.target.style.height = areaHeight+"px";



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
