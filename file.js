const fs = require("fs")
// const { format } = require("path/posix")

fs.readFile("./msg.txt", "utf8", (err, data) => {
    if (err) {
        console.log(err)
    }
    console.log(data)
})


const data = "I am a full stack developer"

fs.writeFile("./about.txt", data, (err) => {
    console.log("completed writing")
})

// append

const name = "\nMalini"

fs.appendFile("./awesome.txt", name, (err) => {
    console.log("completed writing")
})

// task

// const quote = "The road to success is always under construction"
// for (let i = 1; i <= 10; i++) {
//     fs.writeFile(`./backups/test-${i}.html`, quote, (err) => {
//         console.log("Completed writing loop")
//     })
// }

const [, , num] = process.argv
const quote = "The road to success is always under construction"

for (let i = 1; i <= num; i++) {
    fs.writeFile(`./backups/test-${i}.html`, quote, (err) => {
        console.log("Completed writing loop", i)
    })

    // sync --> no callback required
    // fs.writeFileSync(`./backups/test-${i}.html`, quote)
    // console.log("Completed writing loop", i)
}

// copy msg.txt to cool.txt

fs.readFile("./msg.txt", "utf-8", (err, msg) => {
    console.log(msg)
    fs.writeFile("./cool.html", msg, (err) => {
        console.log("Completed msg wrting")
    })
})

// fs.copyFile

// delete

// delete the file removeFile.css
// fs.unlink("./removeFile.CSS", (err) => {
//     console.log("Deleted successfully")
// })

// readdir
// returns an array of all file name in a directory
fs.readdir("./backups", (err, files) => {
    console.log(files)
})

