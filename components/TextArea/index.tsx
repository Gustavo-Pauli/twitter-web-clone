import React, { ChangeEvent, HTMLAttributes } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container } from "./styles";

interface Args {
  divRef?: any;
  maxHeight?: number;
  callback: React.Dispatch<React.SetStateAction<string>>;
}

const TextArea: React.FC<HTMLAttributes<HTMLTextAreaElement> & Args> = (props) => {
  //const [textAreaInput, setTextAreaInput] = useState("");
  let showingScrollbar = false;


  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    props.callback(event.target.value);
    // setTextAreaInput(event.target?.value);

    event.target.style.height = "1px";  // shrink to the minimum height
    const areaHeight = event.target.scrollHeight;

    event.target.style.height = areaHeight+"px";  // set height
    // debug
    // console.log(areaHeight, " > ", props.maxHeight);

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

    // console.log(event.target?.value);
    // props.callback(textAreaInput);
    // setTextAreaInput(event.target?.value);
  }

  // const element = <Container {...props} rows={rows} onChange={event => handleChange(event)}></Container>;


  return <Container {...props} ref={props.divRef} required onChange={event => handleChange(event)}></Container> ;
};

export default TextArea;
