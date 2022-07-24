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

function getFilesAndDir(dirFile: (parser.DirInfo | parser.FileInfo)[]) {
  dirFile.forEach((value) => {
    if (value.type === "directory") {
      let output = `### ${value.name}\n`;
      writeToFile(output);
      getFilesAndDir(value.children);
    } else if (
      value.type === "file" &&
      (value.ext === ".ts" || value.ext === ".md")
    ) {
      let output = `\n - [${value.name}](${value.path})\n`;
      writeToFile(output);
    }
  });
}

function writeToFile(output: string) {
  fs.writeFileSync("./DIRECTORY.md", output, { flag: "a+" });
}

(async () => {
  const parsedDirectoryStruct = await getParseDirectoryStructure();
  getFilesAndDir(parsedDirectoryStruct);
})();
