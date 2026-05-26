// arrays
let names = ["Jane", "Jill", "John", "jack"];
console.log(names);


console.log(names[3])

let ages = [1,4,3]
let mixArray = ["blegh",1,"ree",2, "ough"]

console.log(mixArray)




//arrays methods

names.forEach((name) => {
    //once for length of 
    console.log("Hey " + name)
}
);

let lastname = names.map((name)=>{
return name + " Jenkins"
});

console.log(lastname);

let filterednames= names.filter((name) => {
    return name.includes('a');
});

console.log(filterednames);

let reducednames = names.reduce((name)=>{
return name + name;
}, names);

console.log(reducednames);

let jackindex = names.indexOf("jack");
console.log(names[jackindex]);
//objects

//literal objects
let student = {
name : "Bob",
class : "WDD131",
grade : "A",
age :  7
}
console.log(student)
console.log(student.name)
                        
const mystudent = `
  <div class="studentinfo">
    <p>${student.class} - ${student.grade}</p>
  </div>
`;

document.getElementById("student-list").innerHTML += mystudent; 