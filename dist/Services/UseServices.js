"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
var UserRepository_1 = require("./../Repositories/UserRepository");
var UserService = /** @class */ (function () {
    function UserService(userRepository) {
        if (userRepository === void 0) { userRepository = new UserRepository_1.UserRepository(); }
        this.userRepository = userRepository;
        this.userRepository = userRepository;
    }
    UserService.prototype.createUser = function (user) {
        throw new Error('Method not implemented.');
    };
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=UseServices.js.map