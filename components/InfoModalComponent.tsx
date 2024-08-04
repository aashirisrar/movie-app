"use client";

import useInfoModal from "@/app/hooks/useInfoModal";
import InfoModal from "./InfoModal";

const InfoModalComponent = () => {
  const { isOpen, onClose } = useInfoModal();

  return <InfoModal visible={isOpen} onClose={onClose} />;
};

export default InfoModalComponent;
