/**
 * CLI Logger implementing the base logger from '@kipper/base'
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.0.6
 */

import {LogLevel, KipperLogger} from "@kipper/base/lib/logger";
import {ILogObject, ISettingsParam, Logger} from "tslog";

/**
 * Default {@link ISettingsParam} Configuration for the CLI Logger
 */
export const defaultKipperLoggerConfig: ISettingsParam = {
  dateTimePattern: "hour:minute:second",
  displayFilePath: "hidden",
  displayFunctionName: false
};

/**
 * CLI Emit Handler for the {@link KipperLogger}
 * @param level The log level
 * @param msg The log message
 */
export function defaultCliEmitHandler(level: LogLevel, msg: string): ILogObject {
  switch (level) {
    case LogLevel.DEBUG:
      return defaultCliLogger.debug(msg);
    case LogLevel.INFO:
      return defaultCliLogger.info(msg);
    case LogLevel.WARN:
      return defaultCliLogger.warn(msg);
    case LogLevel.ERROR:
      return defaultCliLogger.error(msg);
    case LogLevel.FATAL:
      return defaultCliLogger.fatal(msg);
    case LogLevel.TRACE:
      return defaultCliLogger.trace(msg);
  }
}

/* Default visual CLI logger using a 'tslog' {@link Logger} */
export const defaultCliLogger: Logger = new Logger(defaultKipperLoggerConfig);
