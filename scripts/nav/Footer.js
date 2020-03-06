import { YearEstablished } from "./YearEstablished.js"
import { BusinessName } from "./BusinessName.js"
import { ContactList } from "./contact/ContactList.js"

const contentTarget = document.querySelector(".JavaFooter")

export const Footer = () => {
    const businessHTML = BusinessName()
    const yearEstablishedHTML = YearEstablished()
    const contactListHTML = ContactList()

    contentTarget.innerHTML = `
        ${contactListHTML}
        ${businessHTML}
        ${yearEstablishedHTML}
    `
}