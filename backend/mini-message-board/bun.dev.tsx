import { $ } from "bun";

await Promise.all([$`bun run --watch src/index.ts`, $`bun run tailwind:watch`]);
