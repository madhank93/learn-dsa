import parser from "dir-parser";
import fs from "fs";

async function getParseDirectoryStructure() {
  const parsedDirStructure = await parser("./", {
    excludes: [
      ".git",
      ".vscode",
      ".husky",
      "bin",
      "build",
      "coverage",
      "tmp",
      "docs",
      "node_modules",
      "utils",
      "README.md",
      "vite.config.ts",
    ],
    getFiles: true,
    getChildren: true,
    ignores: [],
    includes: [],
  });
  return parsedDirStructure.children;
}

function getFilesAndDir(
  dirFile: (parser.DirInfo | parser.FileInfo)[],
  folderCount: number
) {
  dirFile.forEach((value) => {
    if (value.type === "directory") {
      folderCount++;
      let output = `\n ├${"─".repeat(folderCount)}📂 ${value.name}\n`;
      writeToFile(output);
      getFilesAndDir(value.children, folderCount);
      folderCount--;
    } else if (
      value.type === "file" &&
      (value.ext === ".ts" || value.ext === ".md")
    ) {
      let output = `\n ├${"─".repeat(folderCount + 2)}${
        value.name.includes("spec")
          ? "🧪"
          : value.name.includes("Readme")
          ? "📖"
          : "📜"
      } [${value.name}](${value.path})\n`;

      writeToFile(output);
    }
  });
}

function writeToFile(output: string) {
  fs.writeFileSync("./DIRECTORY.md", output, { flag: "a+" });
}

(async () => {
  const parsedDirectoryStruct = await getParseDirectoryStructure();
  getFilesAndDir(parsedDirectoryStruct, 1);
})();
