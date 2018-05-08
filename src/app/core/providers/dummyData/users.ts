import { User } from "../../models/user";

export let onlineUsers : User[] = [
  {
    email: "test@test.dk",
    photoUrl: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png",
    age: 25,
    displayName: "VectorC",
    country:"Denmark",
    firstname:"Flemming",
    lastname: "Jensen",
    online: true,
    clan: "",
    rank: "MasterGuardian",
    favweap: "AK 47"
  },
  {
    email: "test2@test.dk",
    photoUrl: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png",
    age: 15,
    displayName: "Trucker",
    country:"Denmark",
    firstname:"Hans",
    lastname: "Gormsen",
    online: false,
    clan: "Ninja in darkness",
    rank: "Silver 2",
    favweap: "AWP"
  },
  {
    email: "test3@test.dk",
    photoUrl: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png",
    age: 42,
    displayName: "Biker",
    country:"Denmark",
    firstname:"Ole",
    lastname: "Vedel",
    online: true,
    clan: "We will rock you!",
    rank: "Global Elite",
    favweap: "Colt"
  }
]
