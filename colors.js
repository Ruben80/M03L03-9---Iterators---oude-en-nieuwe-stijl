let colors = ["yellow", "blue", "red", "orange"];

let i = 0;
while (i < colors.length) {
  console.log(colors[i]);
  i++;
}


for (i = 0; i < Array.length; i++) {
    console.log(colors);
}


colors.forEach(element => console.log(element));


const myColors = {
    colorWall: "black",
    colorFruit: "orange",
    colorCar: "red",
    colorHair: "white",
    colorGras: "green",
  };
  
  for (x in myColors) {
    console.log(myColors[x]);
  }




// function assignGrade(score) {
//     if (score > 90) {
//         return 'A';
//     } else if (score > 80) {
//         return 'B';
//     } else if (score > 70) {
//         return 'C';
//     } else if (score > 65) {
//         return 'D';
//     } else {
//         return 'F';
//     }
// }

//     for (let i = 60; i <= 100; i++){
//      console.log("Voor " + i + " punten, krijg je een " + assignGrade(i));
//     };

// for (let multi = 1; multi <= 10; multi++) {
//     for (let i = 1; i <= 10; i++) {
//       count = i * multi;
//       console.log(i + " x " + multi + " = " + count);
//     }
//   };

// // Bonus
// for (let multiplier = 0; multiplier <= 10; multiplier++) {
//     for (let i = 0; i <= 10; i++) {
//       let result = multiplier * i;
//       console.log(multiplier + " * " + i + " = " + result);
//     }
//   }

// for (let i = 1; i <= 10; i++) {
//     count = i * 9

//     console.log(i + " X 9 = " + count);
// };

// let i;

// for (i = 0; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(i + " is even");
//     } else {
//         console.log(i + " is oneven")
//     }
// };

// for (let i = 0; i <= 20; i++) {
//     if (i % 2 === 0) {
//       console.log(i + " is even");
//     } else {
//       console.log(i + " is oneven");
//     }
//   }
