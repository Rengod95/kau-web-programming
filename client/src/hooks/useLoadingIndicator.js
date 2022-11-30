import React, { useState } from "react";

const useLoadingIndicator = () => {
  const [indicatorIsOpen, setIsOpen] = useState(false);

  const openIndicator = () => {
    setIsOpen(() => true);
  };
  const closeIndicator = () => {
    setIsOpen(() => false);
  };

  return {
    indicatorIsOpen,
    openIndicator,
    closeIndicator,
  };
};

export default useLoadingIndicator;
