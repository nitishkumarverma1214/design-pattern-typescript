import { FileComponent } from "./File";
import { FolderComponent } from "./Folder";

export function compositePattern() {
  const file1 = new FileComponent("notes.txt", 50);
  const file2 = new FileComponent("designPattern.pdf", 200);

  const folder = new FolderComponent("DesignPatterns", [file1, file2]);
  console.log(folder.getComponents());

  folder.addComponent(new FileComponent("patterns.ppt", 230));
  folder.removeComponent(file2);
  console.log(folder.getComponents());
}
