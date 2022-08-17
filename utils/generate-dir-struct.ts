import parser from "dir-parser";
import fs from "fs";

async function getParseDirectoryStructure() {
  const parsedDirStructure = await parser("./", {
    excludes: [
      ".git",
      ".vscode",
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
  let count = folderCount;
  dirFile.forEach((value) => {
    console.log(count, value.name);
    if (value.type === "directory") {
      count++;
      let output = `\n ├──${"──".repeat(count)}⚫ ${value.name}\n`;
      writeToFile(output);
      getFilesAndDir(value.children, count);
      count = count - 1;
    } else if (
      value.type === "file" &&
      (value.ext === ".ts" || value.ext === ".md")
    ) {
      let output = `\n ├──${"──".repeat(count)}➢ ➣ ➤ [${value.name}](${
        value.path
      })\n`;

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
