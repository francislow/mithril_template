import m from "mithril";
import App from './screens/App'
import merge from "mergerino"
import stream from "mithril/stream"
import { meiosis } from "./library/utilities/state_management/meiosis"
import { store } from "./library/utilities/state_management/store"

const { states, actions } = meiosis({ stream, merge, store })

m.mount(document.body, {
    view: () => {
        return m(App, { state: states(), actions })
    }
})

states.map(() => m.redraw())