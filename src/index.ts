import pino from "pino";

const stdoutLogger = pino.default(process.stdout);
const stderrLogger = pino.default(process.stderr);

for (let i = 0; i < 50; i++) {
  stdoutLogger.info(`Hello, Oxie! ${i}`);
  stderrLogger.error(`Hello, Oxie! ${i}`);
}
