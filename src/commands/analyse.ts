/**
 * 'analyse' command for analysing the syntax of a file
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.0.5
 */
import {Command, flags} from "@oclif/command";
import {KipperCompiler} from "@kipper/base";
import {defaultCliEmitHandler} from "../logger";
import {KipperLogger} from "@kipper/base/lib/logger";
import {KipperParseFile} from "../file-stream";

export default class Analyse extends Command {
  static description = "Analyses a file and validates its syntax";
  static examples = [];

  static args = [
    {
      name: "file",
      required: true,
      description: "The file that should be analysed"
    }
  ];

  static flags = {
    encoding: flags.string({
      default: "utf8",
      description: "The encoding that should be used to read the file"
    })
  };

  async run() {
    const {args, flags} = this.parse(Analyse);
    const logger = new KipperLogger(defaultCliEmitHandler);
    const compiler = new KipperCompiler(logger);

    // Start timer for processing
    const startTime = (new Date()).getTime();

    // Analyse the file
    const file = await KipperParseFile.fromFile(args.file, flags.encoding as BufferEncoding);
    await compiler.syntaxAnalyse(file.stringContent);

    // Finished!
    const endTime = ((new Date().getTime()) - startTime) / 1000;
    await logger.info(`Finished code analysis in ${endTime}s.`);
  }
}
