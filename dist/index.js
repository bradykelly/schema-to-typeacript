"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const figlet = require('figlet');
const program = new commander_1.Command();
// TODO Get auto-version extension working
program
    .version('0.0.1')
    .description('Generate TypeScript interfaces from a JSON Schema')
    .option('-i, --input <input>', 'Path to input JSON Schema file')
    .option('-o, --output <output>', 'Path to output TypeScript file')
    .parse(process.argv);
console.log(figlet.textSync('Schema-to-ts', { horizontalLayout: 'full' }));
//# sourceMappingURL=index.js.map