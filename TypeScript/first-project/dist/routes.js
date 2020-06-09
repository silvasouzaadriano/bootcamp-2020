"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.helloWorld = void 0;
var CreateUser_1 = __importDefault(require("./services/CreateUser"));
function helloWorld(request, response) {
    return response.json({ message: 'Hello World' });
}
exports.helloWorld = helloWorld;
function createUser(request, response) {
    var user = CreateUser_1.default({
        name: "Adriano Souza",
        email: "silva.souza.adriano@gmail.com",
        password: "123456",
        techs: ["NodeJs", "ReactJs", "React Native", {
                stack: 'JavaScript',
                experience: 2
            }],
        repositories: ["nlw1-ecoleta", "bootcamp8-gostack-gobarber"]
    });
    return response.json({ user: user });
}
exports.createUser = createUser;
