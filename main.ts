import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One dad joke, told straight-faced at the dinner table.
const joke = "I told my wife she should embrace her mistakes. She hugged me.";

// The gate wants 1 to 200 characters of UTF-8 text, so check before we ship it.
if (joke.length < 1 || joke.length > 200) {
  throw new Error(`joke must be 1-200 characters, got ${joke.length}`);
}

// The punchline lands on the last word, as a dad joke should.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), joke, "utf8");
console.log(joke);
