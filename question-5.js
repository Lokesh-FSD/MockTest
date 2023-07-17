// We can handle errors in Express.js and Node.js in many ways.

//  - there are mainly 3 ways to handle it:-

// 1) Using try-catch block - Try block tries to execute and catch block catches the error
// 2) Using Async await 
// 3) Using promises  



//  Error handling using try and catch 

function HandleError() {
    try {
        console.log("code executed successfully");
    } catch (error) {
        console.log(error);
    }
}



// using Async await we can handle error

app.get('/Home', async (req, res) => {
    try {
        const finalresult = await AsyncFunction();
        res.json(finalresult);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error occured' });
    }
});



// using Promises 

myAsyncFunction()
    .then((finalResult) => {
       console.log("executed");
    })
    .catch((finalResult) => {
        console.log("error occured");
    });

