import React, { useCallback } from "react";

import HighlightBanner from "../components/registration/highlightBanner";

export const useScrollLock = () => {
  const lockScroll = useCallback(() => {
    document.body.style.overflow = "hidden";
  }, []);

  const unlockScroll = useCallback(() => {
    document.body.style.overflow = "";
  }, []);

  return {
    lockScroll,
    unlockScroll,
  };
};

export const useModal = (title, message) => {
  return <HighlightBanner title={title} message={message} />;
};
