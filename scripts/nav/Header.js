import { YearEstablished } from "./YearEstablished.js"
import { BusinessName } from "./BusinessName.js"

const contentTarget = document.querySelector(".JavaHeader")

export const Header = () => {
    const businessHTML = BusinessName()
    const yearEstablishedHTML = YearEstablished()

    contentTarget.innerHTML = `
        ${businessHTML}
        ${yearEstablishedHTML}`
}