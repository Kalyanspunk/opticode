"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReview = void 0;
const ai_service_1 = __importDefault(require("../services/ai.service"));
const getReview = async (req, res) => {
    try {
        const code = req.body.code;
        if (!code) {
            res.status(400).send("Prompt is required");
            return;
        }
        const response = await (0, ai_service_1.default)(code);
        res.send(response);
    }
    catch (error) {
        console.error("Error in getReview:", error);
        res.status(500).send("Internal Server Error");
    }
};
exports.getReview = getReview;
//# sourceMappingURL=ai.controller.js.map