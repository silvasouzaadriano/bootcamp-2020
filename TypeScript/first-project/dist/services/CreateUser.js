"use strict";
/**
 * Criar um usário: name, email, password
 */
Object.defineProperty(exports, "__esModule", { value: true });
function userCreation(_a) {
    var _b = _a.name, name = _b === void 0 ? '' : _b, email = _a.email, password = _a.password, techs = _a.techs, _c = _a.repositories, repositories = _c === void 0 ? [] : _c;
    var user = {
        name: name,
        email: email,
        password: password,
        techs: techs,
        repositories: repositories
    };
    return user;
}
exports.default = userCreation;
;
