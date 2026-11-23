// COIN DASH entry program (Node 22, standard library only).
//
// The entry itself is the TikTok video: a short clip about the same tiny
// agent-built game on the day it was made and after a week of daily updates.
// This program does the one thing the gate needs from the repository: it
// carries VIDEO.json — the video's full address on TikTok — from the repo
// root to the grader's /output directory. Nothing it writes about the video
// is scored; the house reads the video's views and interactions itself.
//
// The game behind the video is a deterministic canvas runner (see the README):
// one fixed camera, one map, one start, one scripted run. Day 1 is the bare
// build; day 7 is the same map after seven daily-update iterations applied
// in-session — more coins, patrolling spikes, particles, parallax hills,
// a star power-up, a combo counter and a sunset sky. Both builds were
// captured frame by frame in a real browser and cut together at identical
// game moments, so the only thing that changes between cuts is the week.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// It prints nothing on success.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

// Outside the grader's container these two stand in for /bot and /output.
const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });

try {
  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
