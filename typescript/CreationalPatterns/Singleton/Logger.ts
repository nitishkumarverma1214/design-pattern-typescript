export class Logger {
  private static _logger: Logger;

  private constructor() {}

  public static getLogger(): Logger {
    if (!Logger._logger) {
      Logger._logger = new Logger();
    }
    return Logger._logger;
  }

  public writeErrorLog(): void {
    console.log("writing the error logs");
  }
  public writeInfoLog(): void {
    console.log("writing the info logs");
  }
  public writeDebugLog(): void {
    console.log("writing the debug logs");
  }
}
