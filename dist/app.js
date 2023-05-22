"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var core_1 = require("@overnightjs/core");
var UserController_1 = require("./Controller/UserController");
var Database_1 = require("./Database/Database");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super.call(this) || this;
        _this.addController();
        _this.connectDatabase();
        return _this;
    }
    App.prototype.addController = function () {
        var userController = new UserController_1.UserController();
        _super.prototype.addControllers.call(this, [userController]);
    };
    App.prototype.connectDatabase = function () {
        Database_1.AppDataSource.initialize()
            .then(function () { return console.log("DataBase conectada"); })
            .catch(function (error) { return console.log(error); });
    };
    App.prototype.start = function (port) {
        this.app.listen(port, function () {
            console.log('server rodando na porta:', port);
        });
    };
    return App;
}(core_1.Server));
exports.App = App;
//# sourceMappingURL=app.js.map