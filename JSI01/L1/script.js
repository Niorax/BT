
let student = [
    {
        name: "NVA",
        age: 16,
        course: ["mindX 01", "mindX 02", "mindX 03"]
    },
    {
        name: "NVB",
        age: 18,
        course: ["mindX 01", "mindX 02", "mindX 04"]
    },
    {
        name: "NVC",
        age: 17,
        course: ["mindX 01", "mindX 03", "mindX 04"]
    },
    {
        name: "NVD",
        age: 15,
        course: ["mindX 01", "mindX 02", "mindX 03"]
    }
]


// Lay ten tu tuoi

// let findage = prompt("Độ tuổi cần tìm")
// let findstudent = []

// for (let index = 0; index < student.length; index++) {
//     const HS = student[index];

//     if (findage == HS.age) findstudent.push(HS)
// }

// findstudent.length == 0 ? alert("Không có học sinh trong độ tuổi cần tìm") : console.log(findstudent)

// Rút gọn

// let findage = prompt("Độ tuổi cần tìm")

// let findstudent = student.filter(item => item.age == findage)
// findstudent.length == 0 ? alert("Không có học sinh trong độ tuổi cần tìm") : console.log(findstudent)

// Lấy tên từ khoá học

// let findcourse = prompt("Khoá học cần tìm")

// let studentname = [0]

// for (let index = 0; index < student.length; index++) {
//     const Hs = student[index];
//     for (let i = 0; i < Hs.course.length; i++) {
//         let item = Hs.course[i];
//         if (findcourse == item) studentname.push(Hs.name)
//     }
// }
// console.log(studentname);

// Rút gọn

let findcourse = prompt("Khoá học cần tìm")

let studentname = student.filter(HS => {
    let khoahoc = HS.course.filter(item => item == findcourse)
    if (khoahoc.length == 0) return false
    else return true
//     khoahoc.length == 0 ? false : true
})

console.log(studentname.map(HS => HS.name))