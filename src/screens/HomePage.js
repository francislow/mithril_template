import m from "mithril"
import DarkLightSwitch from '../library/components/DarkLightSwitch'

function HomePage() {
    return {
        view: ({ attrs: { state, actions }}) => {
            return m(`div#homepage-wrapper${state.darkMode.active ? ".dark-mode": ""}`, [
                m("div.switch-wrapper", m(DarkLightSwitch, { state, actions })),
                m('p.intro-text', "A demonstration of ", m("a[href='https://mithril.js.org/'][target='_blank'].mithril-link", "Mithril.js")),
                m('div.separator'),
                m('p.tagline-text', "Make learning fun, make learning priority."),
                m('div.sign-text-wrapper', [m("img", {src: `${state.darkMode.active ? "src/library/assets/images/smiley_white.png": "src/library/assets/images/smiley_black.png"}`}), m("p", "Francis Low 2021")])
    
            ])
        }
    }
}

export default HomePage