import { Command } from "commander";
import { compile, compileFromFile } from "json-schema-to-typescript";
import * as fs from "fs";

const figlet = require('figlet');
const program = new Command()

// TODO Get auto-version extension working
program
    .version('0.0.1')
    .description('Generate TypeScript interfaces from a JSON Schema')
    .option('-i, --input <input>', 'Path to input JSON Schema file')
    .option('-o, --output <output>', 'Path to output TypeScript file')
    .option('-d, --debug', 'Enable debug logging')
    .parse(process.argv)
   
    const fsPromises = fs.promises
    const options = program.opts()
    let schemaText = ''

    fsPromises.readFile(options.input)
        .then((data) => {
            schemaText = data.toString()
                 console.log('Schema read from'+ options.input)
         })
         .catch((err) => {
            console.error(err)
            return;
          })
         }
        const schema = JSON.parse(data.toString())
             const ts = generateInterface(schema)
             fs.writeFile(options.output, ts, (err) => {
                 if (err) throw err;
                 console.log('Schema written to'+ options.output)
             })
        })
    // TODO Only log if dev or debug mode
    console.log('Schema read from'+ options.input)

    const schema = JSON.parse(data.toString())
    const ts = generateInterface(schema)
    fs.writeFile(options.output, ts, (err) => {
        if (err) throw err;
        console.log('Schema written to'+ options.output)
    })
})
}


console.log(figlet.textSync('Schema-to-ts', { horizontalLayout: 'full' }));