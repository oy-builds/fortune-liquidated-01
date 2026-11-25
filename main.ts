import * as fs from "node:fs";

const line = "You will soon find true balance again: zero, beautifully still, owing nothing to anyone except the lesson learned.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", line, "utf8");
