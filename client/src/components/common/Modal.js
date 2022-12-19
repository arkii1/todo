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
        <div className="fixed w-screen h-screen z-50 bg-gray-700/75 inset-0 flex justify-center	">
          <div
            ref={modalRef}
            className="fixed p-3 z-50 bg-white rounded-lg h-max top-8 sm:top-12 md:top-20 p-3"
            style={{ maxWidth: '80%' }}
          >
            <h3>{title}</h3>
            {content}
          </div>
        </div>
      )}
    </>
  )
}

export default Modal

Modal.propTypes = {
  title: propTypes.string.isRequired,
  content: propTypes.node.isRequired,
}
