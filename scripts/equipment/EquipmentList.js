
import Equipment from "./Equipment.js"
import { useEquipment } from "./equipmentDataProvider.js"


const EquipmentList = () => {

    const contentElement = document.querySelector(".equipment_list")
    
    const equipmentObjectArray = useEquipment()

    for (const equipmentObject of equipmentObjectArray) {
     const landmarkHTMLRepresentation= Equipment(equipmentObject)

     contentElement.innerHTML += landmarkHTMLRepresentation
    }
    
    }

    export default EquipmentList