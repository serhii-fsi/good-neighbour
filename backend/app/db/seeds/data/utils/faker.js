import { faker, fakerEN_GB } from "@faker-js/faker";
import fs from "fs";
import { UniqueEnforcer } from "enforce-unique";

function generateUsers() {
    let users = [];

    const UniqueEnforcerEmail = new UniqueEnforcer();
    const UniqueEnforcerPostcode = new UniqueEnforcer()

    for (let i = 1; i <= 10; i++) {
        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();
        const provider = "hotmail.com";
        const email = UniqueEnforcerEmail.enforce(() => {
            return faker.internet.email({ firstName, lastName, provider });
        });
        const phoneNumber = fakerEN_GB.phone.number()
        const about = faker.lorem.paragraph()
        const additionalContacts = faker.lorem.paragraph()

        const userName = faker.internet.userName({ firstName: firstName });
        const address = fakerEN_GB.location.streetAddress();
        const postCode = UniqueEnforcerPostcode.enforce(() => {
            return faker.helpers.arrayElement([
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
    })
        const age = faker.number.int({ min: 18, max: 95 });
        const avatar = faker.image.avatar();
        const helpRadius = faker.number.int({ min: 500, max: 1000 });
        const helpOfferedCount = faker.number.int({ min: 0, max: 6 });
        const helprequestedCount = faker.number.int({ min: 0, max: 6 });
        users.push({
            username: userName,
            email: email,
            avatar_url: avatar,
            age: age,
            first_name: firstName,
            last_name: lastName,
            about: about,
            address: address,
            postcode: postCode,
            phone_number: phoneNumber,
            additional_contacts: additionalContacts,
            help_radius: helpRadius,
            help_offered: helpOfferedCount,
            help_requests: helprequestedCount,
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
    const typeArr = ["Shopping", "Rides", "Cleaning", "Packages", "DIY"];

    const types = typeArr.map((type) => ({
        name: type,
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
        const requestStatus = faker.helpers.arrayElement([
            "completed",
            "active",
            "closed",
            "agreed"
        ]);
        helpRequests.push({
            title: title,
            author_id: userID,
            help_type_id: typeID,
            description: description,
            created_at: createdAt,
            req_date: dateHelpNeeded,
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
            author_id: userID,
            help_request_id: helpRequestID,
            created_at: createdAt,
            description: description,
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
    const helpRequestStatus = faker.helpers.arrayElement(["accepted", "active", "declined"]);
    const userID = faker.number.int({ min: 1, max: 10 });
    const helpRequestID = faker.number.int({ min: 1, max: 10 });
    helpOffers.push({
        helper_id: userID,
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
