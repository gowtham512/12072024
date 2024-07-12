// async function getData(){
//     return "Namaste"
// }

// // console.log(getData())

// a = getData();


const p1 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Promise Resolved value");
        },10000);
});

const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise resolved value2")
    },15000)
})
// function getData(){
        // ja engine will not wait for js engine to be resolved it will move to next line immediately
//     p.then((res)=> console.log(res));
//     console.log("Namaste Javascript");
// }
// getData();

async function handlePromise(){
    const startTime = Date.now();
    console.log("start function\n",startTime/1000)

    const  val2 =await p1;
    const startTime2 = Date.now();
    console.log("time after p1 is resolved",startTime2/1000)
    console.log(Date.now()/1000,"P2 is resolved")
    const  val =await p2;
    console.log(Date.now()/1000,"P2 is resolved")
    console.log("\n")
    console.log(Date.now()/1000),"end of program";


}

handlePromise();









