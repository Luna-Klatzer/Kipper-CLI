/**
 * 'compile' command for compiling a single file
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.0.5
 */
import { Command, flags } from "@oclif/command";
import { KipperCompiler } from "@kipper/base";

export default class Compile extends Command {
  static description = "Compiles a file into it's js-counterpart with it's typescript types added";

  // TODO! Add examples when the command moves out of development
  static examples = [];

  static args = [
    {
      name: "file",
      required: true,
      description: "The file that should be compiled"
    }
  ];

  static flags = {
    encoding: flags.string({
      default: "utf8",
      description: "The encoding that should be used to read the file"
    })
  };

  async run() {
    const { args, flags } = this.parse(Compile);
    const compiler = new KipperCompiler();

    // TODO! Implement reading of file
    // await compiler.compile(fileContent, true, flags.encoding as BufferEncoding);
  }
}
