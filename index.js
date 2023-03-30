/* Your Code Here */

function createEmployeeRecord(employeeArray) {
    return {
      firstName: employeeArray[0],
      familyName: employeeArray[1],
      title: employeeArray[2],
      payPerHour: employeeArray[3],
      timeInEvents: [],
      timeOutEvents: []
    }
  }
  
  function createEmployeeRecords(employeesArray) {
    return employeesArray.map(function(employeeArray) {
      return createEmployeeRecord(employeeArray)
    })
  }
  
  function createTimeInEvent(dateTimeString) {
    const [date, hour] = dateTimeString.split(' ')
    this.timeInEvents.push({
      type: "TimeIn",
      hour: parseInt(hour, 10),
      date
    })
    return this
  }
  
  function createTimeOutEvent(dateTimeString) {
    const [date, hour] = dateTimeString.split(' ')
    this.timeOutEvents.push({
      type: "TimeOut",
      hour: parseInt(hour, 10),
      date
    })
    return this
  }
  
  function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find(function(e) {
      return e.date === date
    })
    const timeOut = this.timeOutEvents.find(function(e) {
      return e.date === date
    })
    return (timeOut.hour - timeIn.hour) / 100
  }
  
  function wagesEarnedOnDate(date) {
    const hoursWorked = hoursWorkedOnDate.call(this, date)
    return hoursWorked * this.payPerHour
  }
  
  function allWagesFor() {
    const eligibleDates = this.timeInEvents.map(function(e) {
      return e.date
    })
  
    const payable = eligibleDates.reduce(function(memo, d) {
      return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0)
  
    return payable
  }
  
  function calculatePayroll(employeeRecords) {
    return employeeRecords.reduce(function(memo, employee) {
      return memo + allWagesFor.call(employee)
    }, 0)
  }
  
  function findEmployeeByFirstName(employees, firstName) {
    return employees.find(function(employee) {
      return employee.firstName === firstName
    })
  }
  
  



/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */



