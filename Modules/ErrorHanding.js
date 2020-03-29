function fails() {
    try {
        throw new Error("Opps! you made a mistake");
        console.log("this works");
    } catch (error) {
        console.log(error.message);
    } finally {
        console.log("still good");
    }
}

console.log(fails());

// Promises

Promise.resolve("asyncfail")
    .then(response => {
        throw new Error("#1 fail");
        return response;
    })

.catch(err => {
    console.log(err);
})(
    // By using async await
    async function() {
        try {
            await Promise.reject("Oppsie!");
        } catch (err) {
            console.log(err);
        }
        console.log("is this still good?");
    }
)();