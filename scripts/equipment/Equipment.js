const Equipment = (equipmentObject) => {
    return `
    <br>
     <ul class="equiment">ID: ${equipmentObject.id}</ul>
     <ul>Serial Number: ${equipmentObject.serialNumber}</ul>
     <ul>Model: ${equipmentObject.model}</ul>
     <ul>It works: ${equipmentObject.isFunctional}</ul>
     <ul>Is under warranty: ${equipmentObject.isUnderWarranty}</ul>
    <br>
    `
}

export default Equipment