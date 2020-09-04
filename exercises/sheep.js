

function sheepCount(number) {
    if (sheep === 0) {
        console.log("All sheep jumped over the fence ")
    } else {
        console.log(`${number} sheep have jumped over the fence`)
        sheepCount(number - 1)
    }
}

sheepCount(3)