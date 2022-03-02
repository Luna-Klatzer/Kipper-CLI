/**
 * 'analyse' command for analysing the syntax of a file
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.0.5
 */
import { Command, flags } from "@oclif/command";
import { KipperCompiler } from "@kipper/base";

export default class Analyse extends Command {
  static description = "Analyses a file and validates its syntax";

  // TODO! Add examples when the command moves out of development
  static examples = [];

  static args = [
    {
      name: "file",
      required: true,
      description: "The file that should be analysed and checked"
    }
  ];

  static flags = {
    encoding: flags.string({
      default: "utf16",
      description: "The encoding that should be used to read the file"
    })
  };

  async run() {
    const { args, flags } = this.parse(Analyse);
    const compiler = new KipperCompiler();

    // TODO! Implement reading of file
    // await compiler.syntaxAnalyse(fileContent, true, flags.encoding as BufferEncoding);
  }
}
