import { Modal } from '@material-ui/core'
import React from 'react'

export default function ExampleModal({ children, gif, isOpen, onClose }) {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <img scr={gif} alt="gif" />
      {children}
    </Modal>
  )
}
