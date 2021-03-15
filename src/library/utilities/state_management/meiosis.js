export const meiosis = ({ stream, merge, store }) => {
  const update = stream()

  const states = stream.scan((state, patch) => merge(state, patch), store.initial, update)

  const actions = store.Actions(update, states)

  return { states, update, actions }
}
