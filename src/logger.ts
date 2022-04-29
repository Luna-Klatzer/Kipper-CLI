/**
 * CLI Logger implementing the base logger from '@kipper/base'
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.0.6
 */

import {KipperLogger, LogLevel} from "@kipper/base";
import {ILogObject, ISettingsParam, Logger} from "tslog";

/**
 * Default {@link ISettingsParam} Configuration for the CLI Logger.
 */
export const defaultKipperLoggerConfig: ISettingsParam = {
  dateTimePattern: "hour:minute:second",
  displayFilePath: "hidden",
  displayFunctionName: false
};

/**
 * Default visual CLI {@link Logger logger}.
 */
export const defaultCliLogger: Logger = new Logger(defaultKipperLoggerConfig);

/**
 * CLI Emit Handler for the {@link KipperLogger}.
 * @param level The log level.
 * @param msg The log message.
 * @returns The log object that the {@link Logger} returned.
 */
export function defaultCliEmitHandler(level: LogLevel, msg: string): ILogObject {
  switch (level) {
    case LogLevel.DEBUG:
      return defaultCliLogger.debug(msg);
    case LogLevel.UNKNOWN:
    case LogLevel.INFO:
      return defaultCliLogger.info(msg);
    case LogLevel.WARN:
      return defaultCliLogger.warn(msg);
    case LogLevel.ERROR:
      return defaultCliLogger.error(msg);
    case LogLevel.FATAL:
      return defaultCliLogger.trace(msg);
  }
}

