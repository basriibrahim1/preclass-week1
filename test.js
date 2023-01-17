const biodata = {
    name: "Basri Ibrahim",
    email: "basriibrahim67067@gmail.com",
    address: {
        city: "Kota Cimahi",
        streets: "Kp. Sukamaju RT 03 RW 02 No.162",
        postalCode: "40522"
    },
    isMerried: false,
    hobbies: ["Gaming", "Hiking", "Build Computer", "Playing Guitar"]
}

const ganjilGenap = 5

for(let i = 1; i <= ganjilGenap; i++) {
    if(i % 2 === 0) {
        console.log(`${i} adalah bilangan genap`)
    } else {
        console.log(`${i} adalah bilangan ganjil`)
    }
}



const printSegitiga = 5
for(let i = 1; i <= printSegitiga; i++) {
    let baris = '';
    for(let j = 1; j <= i; j++) {
        baris += i;
    }
    console.log(baris)
}