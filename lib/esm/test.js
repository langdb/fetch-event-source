import * as parse from './parse';
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