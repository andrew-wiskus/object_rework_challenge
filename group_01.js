var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

var employees = [atticus, jem, boo, scout];

function createEmp(name, num, salary, rating) {
	this.name = name;
	this.num = num;
	this.salary = salary;
	this.rating = rating;

}

function convertEmp(employeeArray){
	employeeArray.forEach(function(emp, i){
		employeeArray[i] = new createEmp(emp[0], emp[1], emp[2], emp[3]);
	});
	//console.log(employeeArray);
}


function calcBonus (empArray) {
	//document.write("<ul>");
	//document.write("<table style=width:75%>");
	//document.write("<tr><th>Employee Name</th><th>% STI</th><th>New Salary</th><th>Total Bonus</th></tr>");
	convertEmp(empArray);

	empArray.forEach (function(employee, i) {
        var currentEmp = [];
        currentEmp[0] = employee.name;
        var bonus = 0;
        switch (employee.rating) {
        	case 1:
        	case 2: bonus = 0;
        	break;
        	case 3: bonus = 0.04;
        	break;
        	case 4: bonus = 0.06;
        	break;
        	case 5: bonus = 0.1;
        	break;
        	default:

        }
        if (employee.num.length == 4) {
        	bonus += 0.05;
        }
        employee.salary = parseInt(employee.salary);
        if (employee.salary>65000) {
        	bonus -= 0.01;
        }
        if (bonus > 0.13) {
             bonus = 0.13;

        }
        var totalBonus = employee.salary * bonus;
        totalBonus = Math.round(totalBonus);
        currentEmp[3] = totalBonus;
        currentEmp[1] = bonus;
        currentEmp[2] = parseInt(employee.salary) + totalBonus;
       	console.log(currentEmp);
       	//document.write("<li>Name: " + currentEmp[0] + " %STI: " + (currentEmp[1]*100) + "% Salary plus STI: $" + currentEmp[2] + " Total Bonus: $" + currentEmp[3]);
       	//document.write("<tr><td>" + currentEmp[0] + "</td><td>" + (currentEmp[1]*100) + "%</td><td>$" + currentEmp[2] + "</td><td>$" + currentEmp[3] + "</td></tr>")
        });
		//document.write("</ul>");
		//document.write("</table>")
	}
	calcBonus(employees);
