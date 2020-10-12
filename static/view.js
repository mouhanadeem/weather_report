export default window => {
    const document = window.document
    const table_body = document.getElementById('employee_data')
    const listeners = []

    const listen = l => listeners.push(l)

    const addData = p => {
        const tr = table_body.appendChild(document.createElement('tr'))
        tr.insertCell().appendChild(document.createTextNode(p.value))
        tr.insertCell().appendChild(document.createTextNode(p.type))
        tr.insertCell().appendChild(document.createTextNode(p.unit))
        tr.insertCell().appendChild(document.createTextNode(p.time))
        tr.insertCell().appendChild(document.createTextNode(p.place))
    }

    const update = data => {
        // while(table_body.firstChild) table_body.removeChild(table_body.firstChild)
        data.addData().forEach(addData)
    }
    // const prompt = window.prompt.bind(window)

    return { addData, update, listen, prompt }
}
