import { CreateFileCommand } from "./CreateFileCommand";
import { DeleteFileCommand } from "./DeleteFileCommand";
import { MyFileSystem } from "./MyFileSystem"
import { ReadFileCommand } from "./ReadFileCommand";
import { UpdateFileCommand } from "./UpdateFileCommand";

export const FileSystemCommandPattern = ()=>{
    const myfileSys = new MyFileSystem();
    myfileSys.addCommand(new CreateFileCommand(`myfile`));
    myfileSys.executeCommand();
    myfileSys.undoCommand();

    myfileSys.addCommand(new CreateFileCommand('DemoFile'))
    myfileSys.addCommand(new ReadFileCommand('DemoFile'))
    myfileSys.addCommand(new UpdateFileCommand('DemoFile', 'I am cat lover', 'I am dog lover'))
    myfileSys.addCommand(new DeleteFileCommand('DemoFile'))


    while(myfileSys.hasCommands()){
        myfileSys.executeCommand();
    }
}