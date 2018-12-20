export const update = ({commit}, user) => {
  commit('setUserName', user.name)
  commit('setUserDepartment', user.department)
}