import parser from "dir-parser";
import { render } from "mustache";
import fs from "fs";

async function getParseDirectoryStructure() {
  const parsedDirStructure = await parser("./", {
    excludes: [
      ".git",
      ".vscode",
      "bin",
      "build",
      "docs",
      "node_modules",
      "utils",
    ],
    getFiles: true,
    getChildren: true,
    ignores: [],
    includes: [],
  });
  return parsedDirStructure.children;
}

let header = `### {{name}}\n`;
let link = `\n[{{name}}]({{{path}}})\n`;

async function getFilesAndDir(dirFile: (parser.DirInfo | parser.FileInfo)[]) {
  dirFile.forEach((value) => {
    if (value.type === "directory") {
      let output = render(header, value);
      writeToFile(output);
      getFilesAndDir(value.children);
    } else if (value.type === "file" && value.ext === ".ts") {
      let output = render(link, value);
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
