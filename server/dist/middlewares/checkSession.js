"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = __importDefault(require("../models"));
exports.default = () => (req, Res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.session && req.session.user) {
        const user = yield models_1.default.User.findOne({
            where: {
                id: req.session.user.id
            },
            raw: true
        });
        if (user) {
            req.user = user;
            delete req.user.password; // delete the password from the session
            req.session.user = user; // refresh the session value
            res.locals.user = user;
        }
        // finishing processing the middleware and run the route
        next();
    }
    else {
        next();
    }
});
//# sourceMappingURL=checkSession.js.map