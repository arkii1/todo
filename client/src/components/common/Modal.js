import React, { useState, useRef } from 'react'
import propTypes from 'prop-types'
import useOutsideCallback from '../../hooks/useOutsideCallback'

function Modal({ title, content }) {
  const [activeModal, setActiveModal] = useState(false)
  const modalRef = useRef()

  const activateModal = () => setActiveModal(true)
  const deactivateModal = () => setActiveModal(false)

  useOutsideCallback(modalRef, deactivateModal)

  return (
    <>
      <button className="btn" type="button" onClick={activateModal}>
        {title}
      </button>
      {activeModal && (
        <>
          <div className="fixed w-screen h-screen z-50 bg-gray-700/75 inset-0" />
          <div
            ref={modalRef}
            className="fixed p-3 z-50 bg-white inset-x-1/2 inset-y-1/3 w-1/5 rounded-lg h-max"
            style={{ transform: 'translate(-50%, -50%)' }}
          >
            <h3 className="px-1">{title}</h3>
            {content}
          </div>
        </>
      )}
    </>
  )
}

export default Modal

Modal.propTypes = {
  title: propTypes.string.isRequired,
  content: propTypes.node.isRequired,
}
