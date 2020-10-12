const model = 
(
    datas, 
    // employees, 
    filter = () => true) => 
    {
    // const employeeMap = {}
    // employees.forEach(e => employeeMap[e.employeeId] = e)

    const addData = () => datas.map(d => ({...d})).filter(filter)

    const updateData = p => model(datas.map(pp => p.id == pp.id? p : pp), filter)
    // const addEmployee = e => model(persons, employees.concat(e), filter)

    const filtered = filter => model(datas
        // , employees
        , filter )

    const all = () => model(datas
        // , employees
        )

    return { addData, updateData, filtered, all }
}

export default model