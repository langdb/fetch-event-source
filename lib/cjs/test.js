"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const parse = __importStar(require("./parse"));
const encoder = new TextEncoder();
const decoder = new TextDecoder();
const msgs = [{ "msg": "" }, { "msg": "Here" }, { "msg": " is" }, { "msg": " an" }, { "msg": " SQL" }, { "msg": " query" }, { "msg": " to" }, { "msg": " create" }, { "msg": " a" }, { "msg": " provider" }, { "msg": " for" }, { "msg": " Open" }, { "msg": "AI" }, { "msg": ":\n\n" }, { "msg": "```" }, { "msg": "sql" }, { "msg": "\n" }, { "msg": "CREATE" }, { "msg": " PROVID" }, { "msg": "ER" }, { "msg": " open" }, { "msg": "_ai" }, { "msg": "_provider" }, { "msg": " ENGINE" }, { "msg": " =" }, { "msg": " Open" }, { "msg": "AI" }, { "msg": "(\n" }, { "msg": " " }, { "msg": " api" }, { "msg": "_key" }, { "msg": " =" }, { "msg": " '" }, { "msg": "your" }, { "msg": "_api" }, { "msg": "_key" }, { "msg": "'\n" }, { "msg": ");\n" }, { "msg": "```" }, { "msg": " \n\n" }, { "msg": "Make" }, { "msg": " sure" }, { "msg": " to" }, { "msg": " replace" }, { "msg": " `'" }, { "msg": "your" }, { "msg": "_api" }, { "msg": "_key" }, { "msg": "'" }, { "msg": "`" }, { "msg": " with" }, { "msg": " your" }, { "msg": " actual" }, { "msg": " Open" }, { "msg": "AI" }, { "msg": " API" }, { "msg": " key" }, { "msg": "." }];
let lineNum = 0;
const next = parse.getLines((line, _fieldLength) => {
    ++lineNum;
    console.log(line);
});
msgs.forEach(msg => {
    next(encoder.encode(`data: ${msg}`));
});
console.log(lineNum);
//# sourceMappingURL=test.js.map