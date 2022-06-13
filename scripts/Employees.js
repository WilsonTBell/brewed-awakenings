import { getEmployees } from "./database.js"
import { employeeNumberOrders } from "./Orders.js";
import { getOrders } from "./database.js";

const employees = getEmployees()
const orders = getOrders()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("employee")) {
            const [,employeeId] = itemClicked.id.split("--")

            for (const currentEmployee of employees) {
                if (currentEmployee.id === parseInt(employeeId)) {
                    const numberOfOrders = employeeNumberOrders(currentEmployee)
            
                    window.alert(`${currentEmployee.name} has ${numberOfOrders} orders.`)
                }
            }
        }
    }
)

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

