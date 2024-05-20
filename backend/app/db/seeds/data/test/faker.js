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
            username: userName,
            address: address,
            post_code: postCode,
            avatar_url: avatar,
            age: age,
            help_offers_count: helpOfferedCount,
            help_requests_count: helprequestedCount,
        });
    }
    return users;
}

let usersArr = generateUsers();
// fs.writeFile("users.json", JSON.stringify(usersArr), (err) => {
//     if (err) throw err;
//     console.log("File saved!");
// });

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

function generateRequests() {
    let requests = [];

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
            "Accepted",
            "In progress",
            "Declined",
        ]);
        requests.push({
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
    return requests;
}
let requests = generateRequests();

fs.writeFile("requests.json", JSON.stringify(requests), (err) => {
    if (err) throw err;
    console.log("File saved!");
});

function generateResponses() {
    let responses = [];

    for (let i = 1; i <= 10; i++) {
        const userID = faker.number.int({ min: 1, max: 10 });
        const requestID = faker.number.int({ min: 1, max: 10 });
        const description = faker.lorem.paragraph();
        const createdAt = faker.date.recent();
        const requestStatus = faker.helpers.arrayElement(["Accepted", "In progress", "Declined"]);
        responses.push({
            user_id: userID,
            request_id: requestID,
            body_response: description,
            created_at: createdAt,
            status: requestStatus,
        });
    }
    return responses;
}
let responses = generateResponses();

// fs.writeFile("responses.json", JSON.stringify(responses), (err) => {
//     if (err) throw err;
//     console.log("File saved!");
// });
