import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../store/root'
import { SignInForm, SignUpForm } from '../../forms'
import './modal.css'
const Modal = observer(() => {
  const { uiStore } = useStore()

  return (
    <Dialog
      open={uiStore.isOpenedModal}
      onClose={() =>
        uiStore.modalType === 'signIn'
          ? uiStore.setSignInModalOpened(false)
          : uiStore.setSignUpModalOpened(false)
      }
      maxWidth='sm'
      fullWidth={true}>
      {uiStore.modalType === 'signIn' ? <SignInForm /> : <SignUpForm />}
    </Dialog>
  )
})

export default Modal
