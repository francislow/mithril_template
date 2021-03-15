import m from "mithril";
import HomePage from "./HomePage"

function App() {
    return {
        // Rendering
        view: ({ attrs: { state, actions }}) => {
            return [
                m(HomePage, {state, actions, name: "Francissssss"}),
            ]
        },

        // Lifecycle Methods
        // oninit: function(vnode) { },
        // oncreate: function(vnode) { },
        // onbeforeupdate: function(vnode, old) { return true },
        // onupdate: function(vnode) { },
        // onbeforeremove: function(vnode) { },
        // onremove: function(vnode) { },
    }
}

export default App