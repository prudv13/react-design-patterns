import { Fragment, useState } from "react";
import styled from "styled-components";

const ModalBackground = styled.div`
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.5);
`

const ModalBody = styled.div`
    background-color: #fff;
    margin: 10% auto;
    padding: 20px;
    width: 50%;
`

const ControlledModal = ({ shouldShow, onRequestClose, children}) => {
  return (
    <Fragment>
        {
            shouldShow ? (
                <ModalBackground onClick={onRequestClose}>
                    <ModalBody
                        onClick={e => e.stopPropagation()}
                        className="shadow d-flex flex-column gap-2"
                    >
                        <button
                            onClick={onRequestClose}
                            className="btn btn-dark align-self-end"
                        >❌</button>
                        {children}
                    </ModalBody>
                </ModalBackground>
            ) : null
        }
    </Fragment>
  )
}

export default ControlledModal