const f = require('fs')
// console.log(f)

// async
// f.readFile(__dirname + "/student.txt", "utf8", (err, data) => {
//     if (err) throw (err);
//     console.log(data)
// })
// console.log("my name is sanni")



// const data = f.readFileSync(__dirname + "/student.txt", "utf8");
// console.log(data)
// console.log("hello fullstack")



try {
    f.readFile(__dirname + "/student.txt", "utf8",
        (err, data) => {
            if (err) throw err;
            console.log(data)
        }
    )
} catch (error) {
    console.log(error)
}
console.log("web design full stack")