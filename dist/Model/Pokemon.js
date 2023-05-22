"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokemon = void 0;
var typeorm_1 = require("typeorm");
var Pokemon = exports.Pokemon = /** @class */ (function () {
    function Pokemon(name, img, types, stats, moves) {
        this.name = name;
        this.img = img;
        this.types = types;
        this.stats = stats;
        this.moves = moves;
    }
    Pokemon.prototype.getId = function () {
        return this.id;
    };
    Pokemon.prototype.setId = function (id) {
        this.id = id;
    };
    Pokemon.prototype.getName = function () {
        return this.name;
    };
    Pokemon.prototype.setName = function (name) {
        this.name = name;
    };
    Pokemon.prototype.getImg = function () {
        return this.img;
    };
    Pokemon.prototype.setImg = function (img) {
        this.img = img;
    };
    Pokemon.prototype.getTypes = function () {
        return this.types;
    };
    Pokemon.prototype.setTypes = function (types) {
        this.types = types;
    };
    Pokemon.prototype.getStats = function () {
        return this.stats;
    };
    Pokemon.prototype.setStats = function (stats) {
        this.stats = stats;
    };
    Pokemon.prototype.getMoves = function () {
        return this.moves;
    };
    Pokemon.prototype.setMoves = function (moves) {
        this.moves = moves;
    };
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
        __metadata("design:type", String)
    ], Pokemon.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Pokemon.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Pokemon.prototype, "img", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Array)
    ], Pokemon.prototype, "types", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Array)
    ], Pokemon.prototype, "stats", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Array)
    ], Pokemon.prototype, "moves", void 0);
    Pokemon = __decorate([
        (0, typeorm_1.Entity)(),
        __metadata("design:paramtypes", [String, String, Array, Array, Array])
    ], Pokemon);
    return Pokemon;
}());
//# sourceMappingURL=Pokemon.js.map