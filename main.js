NomedosEstudantesArray= [];

function submit()
 {

var name1 = domument.getElementById ("NomedosEstudantes1").value;
var name2 = domument.getElementById ("NomedosEstudantes2").value;
var name3 = domument.getElementById ("NomedosEstudantes3").value;
var name4 = domument.getElementById ("NomedosEstudantes4").value;


NomedosEstudantesArray.push(name1);
NomedosEstudantesArray.push(name2);
NomedosEstudantesArray.push(name3);
NomedosEstudantesArray.push(name4);

console.log(NomedosEstudantesArray);

domument.getElementById("displayname").innerHTML = NomedosEstudantesArray;
domument.getElementById("submitButton").style.display = "none";
domument.getElementById("sortButton").style.display = "inline-block";
 }


 function sorting()
 {

NomedosEstudantesArray.sort();

console.log(NomedosEstudantesArray);

domument.getElementById("displayName").innerHTML = NomedosEstudantesArray;


 }

