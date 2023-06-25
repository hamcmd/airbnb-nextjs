"use client";
//@typescript-eslint/no-unused-vars
import { useCallback, useEffect, useState } from "react";

interface ModalProps {
    actionLabel: string
    body?: React.ReactElement
    disabled?: boolean
    footer?: React.ReactElement
    isOpen?: boolean
    onClose: () => void
    onSubmit: () => void
    secondaryAction?: () => void
    secondaryLabel?: string
    title?: string
}

const Modal: React.FC<ModalProps> = ( {
  actionLabel,
  body,
  disabled,
  footer,
  isOpen,
  onClose,
  onSubmit,
  secondaryAction,
  secondaryLabel,
  title,
} ) => {
  const [ showModal, setShowModal ] = useState( isOpen );

  useEffect( () => {
    setShowModal( isOpen );
  }, [ isOpen ] ); 

  const handleClose = useCallback( () => {
    if( disabled ) {
      return;
    }
    setShowModal( false );
    setTimeout( () => {
      onClose();
    }, 300 );
  }, [ disabled, onClose ] );

  const handleSubmit = useCallback( () => {
    if( disabled ) {
      return;
    }

    onSubmit();
  }, [ disabled, onSubmit ] );

  const handleSecondaryAction = useCallback( () => {
    if( disabled || ! secondaryAction ) {
      return;
    }

    secondaryAction();
  }, [ disabled, secondaryAction ] );

  if( ! isOpen ) {
    return null;
  }


  return ( 
    <div></div> 
  );
};

export default Modal;