import React from "react";

interface Props {
  className?: string;
}

const Icon: React.FC<Props> = ({ className }) => {
  return (
    <svg id="i-signout" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="var(--primary)" width="26" height="26" className={className}><g><path d="M28 16 L8 16 M20 8 L28 16 20 24 M11 28 L3 28 3 4 11 4" /></g></svg>
  )
}

export default Icon