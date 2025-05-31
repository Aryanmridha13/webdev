let stu = [18,"Ashish",5.8,"bpl"]
console.log(stu);
// push function are use to add a particular data or element
//in exsting in last palace of an array
stu.push("Cybrom",20,"hello")
console.log(stu);

//pop function are use to delete an element in existing array
//from the last place

stu.pop()
console.log(stu);


//unshift function are used to add element in frist palce of an existing array
stu.unshift("Aryan",20)
console.log(stu);

//shift function are used to delete first element of an array
stu.shift()
console.log(stu);

// slice function are used to take a particular element of the array

let a = stu.slice(1,4)
console.log(a);

//where 1 is starting position or 4 is ending postion 4 is not inclusive 
//matlad 3 tak calega

//splice function are use add or delete element in an array
stu.splice(1,3)
console.log(stu);
//where 1 is index number or 3 is number of element to delete

//splice function are also used to add multiple element of an array
stu.splice(1,0,"qasim sir",18,69)//where 0 is not deleting anythig in array
console.log(stu);
