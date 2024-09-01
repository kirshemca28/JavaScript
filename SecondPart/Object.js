// sigleton // object.create // object literals

const JsUser = {
    name: "Kirti",   //Name: Key    Kirti:Value
    "Full Name": "Kirti Shekhar Singh",
    age: 31,
    location: "Patna",
    email: "info@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["Full Name"]);
