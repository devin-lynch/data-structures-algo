// different ways of solving problems with loops

const everyone: string[] = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];

function findNemo(array: string[]) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'nemo') {
            console.log('Found Nemo!');            
        }
    }
}

findNemo(everyone);

const findNemo2 = array => {
    array.forEach(fish => {
        if (fish === 'nemo') {
            console.log('Found Nemo!');
        }
    })
}


const findNemo3 = array => {
    for (let fish of array) {
        if (fish === 'nemo') {
            console.log('Found Nemo!');
        }
    }
}

findNemo2(everyone)
findNemo3(everyone)

