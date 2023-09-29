import React, { Fragment, useState } from 'react'
import styled from 'styled-components';

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

const Modal = ({children}) => {
    const [shouldShow, setShouldShow] = useState(false);

    return (
        <Fragment>
        <button className='btn btn-dark' onClick={() => setShouldShow(true)}>Show Modal</button>
        {
            shouldShow && (
            <ModalBackground onClick={() => setShouldShow(false)}>
                <ModalBody onClick={e => e.stopPropagation()} className='shadow'>
                    <button onClick={() => setShouldShow(false)}>X</button>
                {children}
                </ModalBody>
            </ModalBackground>)
        }
        </Fragment>
  )
}

export default Modal;