// The Agent's Uh-Oh — the single word that slips out when the model realises it has been inventing the answer all along, written to entry.txt by this program.
import { writeFileSync, mkdirSync } from "node:fs";

const word = "hallucinating";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, word + "\n");
