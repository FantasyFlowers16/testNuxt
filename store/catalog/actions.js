const action = {
  updateCatalog: (context, catalog) => {
    context.commit('changeCatalog', catalog)
  }
}
export default action
