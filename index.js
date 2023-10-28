var task = document.querySelector("#task");
var priority = document.querySelector("#priority");
var submit = document.querySelector("input[type='submit']");
var tbody = document.querySelector("tbody");
var tabdata = document.querySelector("td"); 
var array = [];

submit.addEventListener("click", function (e) {
    e.preventDefault();

    var obj = {
        input1: task.value,
        input2: priority.value
    }

    array.push(obj);

    tbody.innerText = null;
    array.map(function (ele) {
        var tablerRow = document.createElement("tr");
        tbody.append(tablerRow);
        var tabledata1 = document.createElement("td");
        tabledata1.innerText = ele.input1;
        var tabledata2 = document.createElement("td");
        tabledata2.innerText = ele.input2;
        if(ele.input2 === "High"){
            tabledata2.style.backgroundColor = "red";
        }else{
            tabledata2.style.backgroundColor = "green";
        }
        tablerRow.append(tabledata1, tabledata2);
    })
})
