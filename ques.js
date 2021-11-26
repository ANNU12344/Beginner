var Person1 = {
firstName:"ANNU",
lastName:"Dadhan",
officeAdress:"Patna",
};

var Person2 = {
firstName:"Dhruv",
lastName:"JULI",
officeAdress:"GIRIDIH",
};

var Person3 = {
firstName:"Seema",
lastName:"Verma",
officeAdress:"Government collage",
};

document.write("Name: <strong>"+Person1.firstName+"  "+Person1.lastName+"</strong> Addresss:<strong>"+Person1.officeAdress+"</strong></p>");
document.write("Name: <strong>"+Person2.firstName+"  "+Person2.lastName+"</strong> Addresss:<strong>"+Person2.officeAdress+"</strong></p>");
document.write("Name: <strong>"+Person3.firstName+"  "+Person3.lastName+"</strong> Addresss:<strong>"+Person3.officeAdress+"</strong></p>");
//Function to Print Data in Console
function print(){
console.log(Person1);
console.log(Person2);
console.log(Person3);
}
print();
