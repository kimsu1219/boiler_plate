import './style.css'
import 'core-js'
import 'core-js/stable'
import "@babel/polyfill";
import img from './google.png'

const imgBox = document.createElement('img')
imgBox.setAttribute('src', img)
document.body.appendChild(imgBox)

const box1 = document.getElementById('box1')
box1.innerText = "test"
const arr =[]
for (let i=0; i<10; i++) {
  arr.push(i)
}
const newMap = arr.map((curr, idx)=>{
  return curr*2
})
console.log(newMap)
console.log('open test')

// const sleep = (ms) => new Promise(res=>setTimeout(res, ms))
// const asyncFunction = async () => {
//   await sleep(3000)
//   await console.log('async')
// };
// asyncFunction()

// // const objChain = {a: {b: {c: {d: {e: 0}}}}};
// // console.log(objChain?.a?.b?.c ?? 100);

// class PublicField {
//   value = 3;
//   print() {
//     console.log(this.value);
//   }
// }
// console.log(new PublicField())
// class PrivateField {
//   #value = 0;
//   constructor(value) {
//     this.#value = value;
//   }
//   print() {
//     console.log(this.#value);
//   }
// }
// // console.log(PrivateField)
// console.log(new PrivateField(5))
// console.log(new PrivateField(5).print())
