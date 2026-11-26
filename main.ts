import { mkdirSync, writeFileSync } from "node:fs";

// One-line roast of our fridge, spoken as the fridge itself.
// 3 beats: 3am setup -> specific grievance -> self-definition closer.
// 168 chars, hard cap 200. Closer uncontracted on purpose: the deadpan
// "I am not cold. I am disappointed." lands like a verdict, matching the
// winning self-definition pattern ("I am not a baby. I am a consequence.").
const LINE =
  "3am. I'm the only thing in this kitchen still awake, standing guard over Brenda's 2019 diet yoghurt and a lightbulb that died in 2021. I am not cold. I am disappointed.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
