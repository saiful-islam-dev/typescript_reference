{

//  destractruing 

const user = {
    id: 654,
    name: {
        firstName: "John",
        middleName: "Wick",
        lastName: "Doe" 
    },
    address: "USA",
    contactNo: "0190000000"
}

const { contactNo, name : {middleName: midName} } = user;
// array destructuring

const myFriends = ["chandler", "joey", "ross", "rachel", "monica", "phoebe"];

const [, , bestFriend, ...rest] = myFriends;


}