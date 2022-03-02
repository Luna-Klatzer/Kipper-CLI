/**
 * 'compile' command for compiling a single file
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.0.5
 */
import { Command, flags } from "@oclif/command";
import { KipperCompiler } from "@kipper/base";
import {KipperLogger} from "@kipper/base/lib/logger";
import {defaultCliEmitHandler} from "../logger";

export default class Compile extends Command {
  static description = "Compiles a Kipper source file file into TypeScript";

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
      default: "utf16",
      description: "The encoding that should be used to read the file"
    })
  };

  async run() {
    const { args, flags } = this.parse(Compile);
    const logger = new KipperLogger(defaultCliEmitHandler);
    const compiler = new KipperCompiler(logger);

    // TODO! Implement reading of file
    // await compiler.compile(fileContent, true, flags.encoding as BufferEncoding);
  }
}
