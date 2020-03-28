const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('stuff worked!');
    } else {
        reject('error it broke');
    }
})

promise.then(result => console.log(result));
/*
// Async and await
async function fetchUser(){
	const response = await fetch('https://jsonplaceholder.typicode.com/users')
	const data = await response.json()
	console.log(data)
}

fetchUser()
*/