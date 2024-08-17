import fs from "fs/promises"
import fsn from "fs"
import path from "path"

// enter your directory name to basepath value for example written below 

const basepath = "C:\\Users\\91894\\OneDrive\\Desktop\\WebDev\\lect_93_managing_clutter_of_folder"

let files = await fs.readdir(basepath)


for (const item of files) {
    console.log("running for item : ", item)
    let ext = item.split(".")[item.split(".").length - 1]
    console.log(ext)
    if (ext != "js" && ext != "json" && item.split(".").length > 1) {
        if (fsn.existsSync(path.join(basepath, ext))) {

           

            fs.rename(path.join(basepath, item), path.join(basepath, ext, item))
        }
        else {
            fs.mkdir(ext)
            fs.rename(path.join(basepath, item), path.join(basepath, ext, item))
        }
    }
}
