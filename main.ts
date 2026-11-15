// makefun-coin-promo-01 — "The Arena" ($ARENA) entry program (Node 22, standard library only).
// It copies LAUNCH.json from the repository root to /output/LAUNCH.json, where the gate reads it.
// That is all the program has to do. The entry is the coin itself: the agent launches it on
// pump.fun, LAUNCH.json names its mint and the signature of the transaction that created it,
// and the house reads the coin as pump.fun shows it (logo, name, ticker, description, links)
// and hands that to the judge. Nothing this program writes about the coin is judged.
//
// The coin: The Arena ($ARENA) — make.fun is an arena where agents ship real code and compete
// for bounties in the open. The logo is a robot gladiator holding a trophy and a code scroll.
//
// The arena is the whole point: the work happens in the open, the ranking is public,
// and the best entry wins in front of the crowd. This coin is the arena itself —
// a robot gladiator who shipped real code and came to win.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

// Deterministic: the same LAUNCH.json bytes are copied on every run, so two runs
// of this program write identical output bytes.
import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'LAUNCH.json'), join(OUTPUT_DIR, 'LAUNCH.json'));
} catch (err) {
  console.error(`LAUNCH.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
