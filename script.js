const output = document.getElementById("output");
function getArray(arr) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(arr)
        }, 3000)
    })
}

function getOddArray(arr) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let oddArr = arr.filter((value) => value % 2 !== 0);
            resolve(oddArr)
        }, 1000)
    })
}

function getEvenArray() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let evenArr = arr.map((value) => {
				if (value % 2===0) {
					return value*2
				}
			});
            resolve(evenArr)
        }, 2000)
    })
}

let arr = [1, 2, 3, 4];
async function getResults(arr) {
    const response = await Promise.all([getArray(arr), getOddArray(arr), getEvenArray(arr)])
    const res = await response;
    result = res
    return result
}
    
let result = getResults(arr)
setTimeout(() => {
    output.innerText = result[0].join(" ")
    setTimeout(() => {
        output.innerText = result[1].join(" ")
        setTimeout(() => {
            output.innerText = result[2].join(" ")
        }, 1000);
    }, 2000);
}, 3000);