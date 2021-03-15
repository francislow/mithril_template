import m from "mithril";

function DarkLightSwitch() {
    return {
        view: ({ attrs: { state, actions }}) => {
            return m("div.switch", {onclick: () => actions.darkModeToggle()},[
                m('p', "Mode: ", m('span.mode-value-text', `${state.darkMode.active ? 'Dark' : 'Light'}`))
            ])
        }
    }
}

export default DarkLightSwitch