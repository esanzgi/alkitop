import React, { useState } from "react";
import { OpinionModal } from "./OpinionModal";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceGrinBeam, faMinus } from "@fortawesome/free-solid-svg-icons";
import { UserProfileCircle } from "../Icons";
import { useUserContext } from "@/context/userContext";

export const OpinionInput = ({ onSubmit, user, product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const inputRef = useRef(null);
  console.log('RATINGS OPINION', product)

  const handleOpenModal = () => {
    setIsModalOpen(true);
    inputRef.current.blur();
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="d-flex align-items-center col-10 col-md-8">
      <UserProfileCircle user={user} height={50} width={50} />
      <input
        ref={inputRef}
        type="text"
        className="form-control form-control-lg shadow border-success ms-2"
        placeholder={`Zure iritzia eman... `}
        onFocus={handleOpenModal}
        readOnly
      />

      <OpinionModal isOpen={isModalOpen} onClose={handleCloseModal} onSubmit={onSubmit} product={product} />
    </div>
  );
};
