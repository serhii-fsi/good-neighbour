import { faker, fakerEN_GB } from "@faker-js/faker";
import fs from "fs";
import { UniqueEnforcer } from "enforce-unique";

function generateUsers() {
    let users = [];

    const UniqueEnforcerEmail = new UniqueEnforcer();

    for (let i = 1; i <= 10; i++) {
        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();
        const provider = "hotmail.com";
        const email = UniqueEnforcerEmail.enforce(() => {
            return faker.internet.email({ firstName, lastName, provider });
        });
        const phoneNumber = fakerEN_GB.phone.number()
        const about = faker.lorem.paragraph()
        const userName = faker.internet.userName({ firstName: firstName });
        const address = fakerEN_GB.location.streetAddress();
        const postCode = faker.helpers.arrayElement([
            "CV8 2SW",
            "CV8 2TB",
            "CV8 2TD",
            "CV8 2TE",
            "CV8 2NZ",
            "CV32 6DL",
            "CV32 6EF",
            "CV32 6EJ",
            "CV32 6EQ",
            "CV32 6ES",
        ]);
        const age = faker.number.int({ min: 18, max: 95 });
        const avatar = faker.image.avatar();
        const helpOfferedCount = faker.number.int({ min: 0, max: 6 });
        const helprequestedCount = faker.number.int({ min: 0, max: 6 });
        users.push({
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone_number: phoneNumber,
            username: userName,
            address: address,
            post_code: postCode,
            avatar_url: avatar,
            age: age,
            about: about,
            help_offers_count: helpOfferedCount,
            help_requests_count: helprequestedCount,
        });
    }
    return users;
}

let usersArr = generateUsers();
fs.writeFile("users.json", JSON.stringify(usersArr), (err) => {
    if (err) throw err;
    console.log("File saved!");
});

function generateTypes() {
    const typeArr = ["Groceries", "Rides", "Cleaning", "Packages", "DIY"];

    const types = typeArr.map((type) => ({
        type: type,
        description: faker.lorem.paragraph(),
    }));

    return types;
}
let types = generateTypes();

// fs.writeFile("types.json", JSON.stringify(types), (err) => {
//     if (err) throw err;
//     console.log("File saved!");
// });

function generateHelpRequests() {
    let helpRequests = [];

    for (let i = 1; i <= 10; i++) {
        const userID = faker.number.int({ min: 1, max: 10 });
        const typeID = faker.number.int({ min: 1, max: 5 });
        const description = faker.lorem.paragraph();
        const title = faker.lorem.word({ length: { min: 2, max: 5 } });
        const createdAt = faker.date.recent();
        const dateHelpNeeded = faker.date.soon();
        const location = faker.helpers.arrayElement([
            "CV8 2SW",
            "CV8 2TB",
            "CV8 2TD",
            "CV8 2TE",
            "CV8 2NZ",
            "CV32 6DL",
            "CV32 6EF",
            "CV32 6EJ",
            "CV32 6EQ",
            "CV32 6ES",
        ]);
        const requestStatus = faker.helpers.arrayElement([
            "Completed",
            "In progress",
            "Closed",
        ]);
        helpRequests.push({
            user_id: userID,
            type_id: typeID,
            title: title,
            description: description,
            created_at: createdAt,
            req_date: dateHelpNeeded,
            post_code: location,
            status: requestStatus,
        });
    }
    return helpRequests;
}
let helpRequests = generateHelpRequests();

// fs.writeFile("help-requests.json", JSON.stringify(helpRequests), (err) => {
//     if (err) throw err;
//     console.log("File saved!");
// });

function generateComments() {
    let comments = [];

    for (let i = 1; i <= 10; i++) {
        const userID = faker.number.int({ min: 1, max: 10 });
        const helpRequestID = faker.number.int({ min: 1, max: 10 });
        const description = faker.lorem.paragraph();
        const createdAt = faker.date.recent();
        comments.push({
            user_id: userID,
            help_request_id: helpRequestID,
            body_response: description,
            created_at: createdAt,
        });
    }
    return comments;
}
let comments = generateComments();

// fs.writeFile("comments.json", JSON.stringify(comments), (err) => {
//     if (err) throw err;
//     console.log("File saved!");
// });

function generateHelpOffers() {
    let helpOffers = []
    for (let i = 1; i <= 10; i++) {
    const helpRequestStatus = faker.helpers.arrayElement(["Accepted", "In review", "Declined"]);
    const userID = faker.number.int({ min: 1, max: 10 });
    const helpRequestID = faker.number.int({ min: 1, max: 10 });
    helpOffers.push({
        user_id: userID,
        help_request_id: helpRequestID,
        status: helpRequestStatus,
    })
}
return helpOffers
}

let helpOffers = generateHelpOffers()

// fs.writeFile("help-offers.json", JSON.stringify(helpOffers), (err) => {
//     if (err) throw err;
//     console.log("File saved!");
// });
