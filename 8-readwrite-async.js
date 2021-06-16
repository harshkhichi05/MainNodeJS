const { readFile , writeFile } =  require('fs')

console.log("Start the task");
readFile("./content/first.txt", "utf8", (err, result)=>{
    if(err){
        console.log(err)
        return
    }
    const first  = result

    readFile("./content/second.txt","utf8", (err, res)=>{
        if(err){
            console.log(err)
            return
        }
     const second= res
     writeFile("./content/async-write.txt",`Here is the result: ${first}, ${second}`, (err,result)=>{
        if(err){
            console.log(err)
            return
        }
        console.log("Done With the task");
    }) 
    })

})
console.log("Starting the next task");

