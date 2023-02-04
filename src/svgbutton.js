import React, { useState } from "react";
import { Button } from "@chakra-ui/react";

const CopySVGButton = ({ svg }) => {
  const [copySuccess, setCopySuccess] = useState("");
  const copyToClipboard = (e) => {
    navigator.clipboard.writeText(svg).then(() => {
      setCopySuccess("Copied!");
      setTimeout(() => setCopySuccess(""), 2000);
    });
  };

  return (
    <Button size="sm" m={2} onClick={copyToClipboard}>
      {!copySuccess && "Copy SVG"}
      {copySuccess && <span>{copySuccess}</span>}
    </Button>
  );
};

export default CopySVGButton;
