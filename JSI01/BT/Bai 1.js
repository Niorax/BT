let m = [1,2,3,4,5,6,"hh", "9",80,100]
// let n = []
let mSquared = []

let n = m.filter(item => typeof item == 'number' )
console.log(n)

for (let index = 0; index < n.length; index++) {
    const l = n[index];
    let o = Math.pow(l,2);
mSquared.push(o);

    }
    console.log(mSquared)