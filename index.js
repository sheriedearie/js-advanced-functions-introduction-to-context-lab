// Your code here
function createEmployeeRecord (info){
    return {
        firstName: info[0],
        familyName: info[1],
        title: info[2],
        payPerHour: info[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(things){
    // created a function for createEmployeeRecords, gave it things
    return things.map(function(info){
        // creates two records with .map
        // returns things.map which creates a new array without 
        // changing the original one...the origional one being stored
        // in the above function
            return createEmployeeRecord(info)
            // process an Array of Arrays into an Array of employee records
        })
    }

function createTimeInEvent(employee, timeStamp){
    const [date, hour] = timeStamp.split(' ')
    employee.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })
    return employee
}

function createTimeOutEvent(employee, timeStamp){
    const [date, hour] = timeStamp.split(' ')
    employee.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })

    return employee
}

function hoursWorkedOnDate(employee, date){
    const inEvent = employee.timeInEvents.find(function(e){
        return e.date === date
    })
    const outEvent = employee.timeOutEvents.find(function(e){
        return e.date === date
        // calculate hours worked when given a record and date
    })
    return (outEvent.hour - inEvent.hour) / 100
    // calculate that the employee worked for 2 hours
// array.find(function(currentValue, index, arr),thisValue)
}

function wagesEarnedOnDate(employee, date){
    const money = hoursWorkedOnDate(employee, date)
    *employee.payPerHour
    return parseFloat(money.toString())
    // calculates how much money was earned per hour
}

function allWagesFor(employee){
    const dates = employee.timeInEvents.map(function(e){
        return e.date
        // allWagesFor aggregates all the dates' wages and adds them together
    })

const wages = dates.reduce(function(memo, e){
    return memo + wagesEarnedOnDate(employee, e)
}, 0)

return wages
}
// calculates that the employee earned 378 dollars

function calculatePayroll(employeeArray){
    return employeeArray.reduce(function(memo, rec){
        return memo + allWagesFor(rec)
    }, 0)
}

function findEmployeeByFirstName(srcArray, firstName){
    return srcArray.find(function(rec){
        return rec.firstName === firstName
    })
}