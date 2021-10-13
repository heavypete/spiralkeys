import React, { useState } from "react";

//*component function
export default function ThrillaKeys() {
  const [volume, setVolume] = useState(0);
  const handleVolume = (e) => {
    setVolume(e.target.value);
  };
  return <div>Hello</div>;
}
