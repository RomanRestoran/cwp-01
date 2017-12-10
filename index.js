//process.argv.forEach((val,index)=>{console.log(index,val);});

//5th solution
const fs=require('fs');
const path=require('path');
//const pt='C:/Users/Никита/cwp01/summary.js';
let pt = process.argv[2];

const name='\\summary.js';
let pathh=pt+name;
const getfiles="try {\n" +
    "    const fs = require('fs');\n" +
    "    const path = require('path');\n" +
    "    const pathh = '"+pt+"';\n" +
    "    const getFiles = function (dir, files_) {\n" +
    "        files_ = files_ || [];\n" +
    "        let files = fs.readdirSync(dir);\n" +
    "        for (var i in files) {\n" +
    "            var name = dir + '/' + files[i];\n" +
    "            console.log(dir + '/' + files[i]);\n" +
    "            if (fs.statSync(name).isDirectory()) {\n" +
    "                getFiles(name, files_);\n" +
    "            } else {\n" +
    "                files_.push(name);\n" +
    "            }\n" +
    "        }\n" +
    "        return files_;\n" +
    "    };\n" +
    "    getFiles('"+pt+"');\n" +
    "\n" +
    "\n" +
    "    let createdDir=null;\n" +
    "\n" +
    "    function createDir(pathh) {\n" +
    "        let direction = pathh.split('\\\\');\n" +
    "        let prevDir = direction.pop();\n" +
    "        if (prevDir == '') {\n" +
    "            prevDir = direction.pop();\n" +
    "        }\n" +
    "        let newDir = pathh + '/' + prevDir;\n" +
    "        fs.mkdir(newDir, function (err) {\n" +
    "            if (err) {\n" +
    "                console.error('Произошла ошибка при создании директории либо дериктория  с таким именем уже существует');\n" +
    "            }\n" +
    "            else {\n" +
    "                console.error('Директория создана успешно');\n" +
    "            }\n" +
    "        });\n" +
    "        createdDir = newDir;\n" +
    "    };\n" +
    "    createDir(pathh);\n" +
    "\n" +
    "\n" +
    "    function copyFile(firstDir, newDir) {\n" +
    "        fs.readFile('F:\\\\cwp\\\\cwp-01\\\\config.json','utf8', function (err, str) {\n" +
    "            if (err) {\n" +
    "                console.error('Произошла ошибка чтения файла json');\n" +
    "            }\n" +
    "            else {\n" +
    "                let jsonstrr=JSON.stringify(JSON.parse(str));;\n" +
    "                let jsonstr=jsonstrr.replace(/{\"copyright\":|} /i,' ');\n" +
    "                readDir(firstDir,newDir,jsonstr)\n" +
    "            }\n" +
    "        });\n" +
    "    }\n" +
    "    function readDir(firstDir, newDir, jsonstr) {\n" +
    "        fs.readdir(firstDir, function (error, files) {\n" +
    "            files.forEach(function (item) {\n" +
    "                fs.stat(firstDir + '/' + item, function (error, dir) {\n" +
    "                    if (!dir.isDirectory()) {\n" +
    "                        if (path.extname(item).toLowerCase() == '.txt')\n" +
    "                        {writeIntoFile(firstDir, newDir, jsonstr, item);}\n" +
    "                    }\n" +
    "                });\n" +
    "            });\n" +
    "        });\n" +
    "    }\n" +
    "    function writeIntoFile(firstDir, newDir, jsonstr, item) {\n" +
    "        fs.readFile(firstDir + '/' + item, function (err, data) {\n" +
    "            if (err) {\n" +
    "                console.error('Произошла ошибка чтения файла');\n" +
    "            }\n" +
    "            else {\n" +
    "                console.error('Чтение файла завершено');\n" +
    "          let newFile = jsonstr + data.toString() + jsonstr;\n" +
    "                fs.writeFile(newDir + '/' + item, newFile, 'utf8', function (err) {\n" +
    "                    if (err) console.error(\"Произошла ошибка при записи\");\n" +
    "                });\n" +
    "            }\n" +
    "        });\n" +
    "    }\n" +
    "\n" +
    "   copyFile(pathh,createdDir);\n" +
    "fs.watch('"+pt+"', (eventType, filename) => {\n" +
    "  console.log(`event type is: ${eventType}`);\n" +
    "  if (filename) {\n" +
    "    console.log(`filename provided: ${filename}`);\n" +
    "  } else {\n" +
    "    console.log('filename not provided');\n" +
    "  }\n" +
    "});" +
    "}\n" +
    "catch(exception){exception.message.toString();}";

// noinspection JSAnnotator
fs.open(pathh, "w+", 0644, function(err, file_handle) {
    if (!err) {
        fs.write(file_handle,getfiles, null, 'UTF-8', function(err) {
            if (!err) {
                console.log("Текст успешно записан в файл");

            } else {
                console.log("Произошла ошибка при записи");
            }
        });
    } else {
        console.log("Произошла ошибка при открытии");
    }
});

