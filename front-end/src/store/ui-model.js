import { types } from 'mobx-state-tree'

const UiModel = types
  .model({
    modalType: types.union(types.literal('signIn'), types.literal('signUp')),
    isOpenedModal: types.optional(types.boolean, false),
  })
  .actions((self) => ({
    setSignInModalOpened(val) {
      self.isOpenedModal = val
      self.modalType = 'signIn'
    },
    setSignUpModalOpened(val) {
      self.isOpenedModal = val
      self.modalType = 'signUp'
    },
  }))

export default UiModel
