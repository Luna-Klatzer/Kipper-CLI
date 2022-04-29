/**
 * Classes implementing antlr4 streams and providing an interface to interact with the compiler. Extends basic
 * stream functionality from the base kipper module.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.0.3
 */

import {KipperParseStream} from "@kipper/base"
import {promises as fs} from "fs";
import * as path from "path";

/**
 * Valid encodings that Kipper supports.
 * @since 0.1.0
 */
export type KipperEncoding = 'ascii' | 'utf8' | 'utf16le';

/**
 * Array of all valid encodings that Kipper supports.
 * @since 0.1.0
 */
export const KipperEncodings: Array<KipperEncoding> = ['ascii', 'utf8', 'utf16le'];

/**
 * ParserFile class that is used to represent a class that may be given to the
 * compiler to be parsed. This file is a simple wrapper around a file-read and
 * storing as a string in 'stringContent'.
 * @since 0.0.2
 */
export class KipperParseFile extends KipperParseStream {
  private readonly _absolutePath: string;
  private readonly _encoding: BufferEncoding;

  constructor(stringContent: string, fileLocation: string, fileName: string, encoding: BufferEncoding) {
    super(stringContent, fileName, fileLocation);
    this._absolutePath = path.resolve(fileLocation);
    this._encoding = encoding;
  }

  /**
   * Returns the absolute Path of the file.
   */
  get absolutePath(): string {
    return this._absolutePath;
  }

  /**
   * An alternative name to {@link absolutePath}, but this path may be relative.
   * @since 0.1.0
   */
  public get filePath(): string {
    return super.filePath;
  }

  /**
   * Returns the encoding for this specific file
   */
  get encoding(): BufferEncoding {
    return this._encoding;
  }

  /**
   * Creates a new {@link KipperParseFile} instance based on the content of the {@link filePath}
   * @param filePath The path to the file that should be read
   * @param encoding The encoding that should be used to read the file
   * @returns The new {@link KipperParseFile} instance with the set values
   * @since 0.1.0
   */
  static async fromFile(filePath: string, encoding: string | BufferEncoding = 'utf8'): Promise<KipperParseFile> {
    const fileLocation = path.resolve(filePath);
    const name = (() => {
      const items1 = fileLocation.split("\\");
      const items2 = items1[items1.length - 1].split("/");
      return items2[items2.length - 1];
    })()

    // Read in the content of the file
    let content: string = (await fs.readFile(fileLocation, encoding as BufferEncoding)).toString();

    // Standardising the line endings to '\n'
    content = content.replace(/(\r(\n)?)/gi, "\n");

    return new KipperParseFile(content, fileLocation, name, encoding as BufferEncoding);
  }
}
