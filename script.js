let user = {
    name:"Sasha"
};

let user2 = {
    age: 17
};

let user3 = {
    place: "Ukraine"
};

let user4 = {
    height: 183
};

Object.assign(user, user2, user3, user4);

for(let key in user){
    console.log(user[key]);
}
 
let userClone = Object.assign({}, user);
for(let key in userClone){
    console.log(userClone[key]);
}

let userJson = JSON.stringify(user);
console.log(userJson);

var contacts = new Map();
contacts.set("Mum", +3801234567899);
contacts.set("Dad", +3801234567899);
contacts.set("Lilbrother", +3801234567899);
contacts.set("Friend1", +3801234567899);
contacts.set("Friend2", +3801234567899);
console.log(contacts);