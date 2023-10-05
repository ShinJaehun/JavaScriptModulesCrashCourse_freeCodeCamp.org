// import { sum, sub } from './calc.js';
// 근데 이거 import가 중간에 있어도 오류 발생하는 거 같음...

// default and named export
// import { default as sayYourName } from './whoami.js';
// 이름을 바꿔도 정상 동작한다?!
// import sayYourName from './whoami.js'
// default as 없어도 동작한다??

// console.log(sum(2, 3))
// console.log(sub(9, 1))
// console.log(sayYourName())

// module alias
// import { sum as add, sub } from './calc.js';

// console.log(add(2, 3))

// module namespaces
// import * as calc from './calc.js'

// console.log(calc.sum(2, 3))

// combined export // codesandbox.io에서는 오류 발생
// import * as combine from './combine.js'

// console.log(combine.calc.sum(1,1))
// console.log(combine.channelName())

// multiple import // codesandbox.io에서는 오류 발생

// import {sayHi, sayHola} from './greeting.js'
// if (true) {
//     const { sayHi, sayHola } = await import('./greeting.js')
//     sayHi()
//     sayHola()
// } else {

// }

// const { sayHi, sayHola } = await import('./greeting.js')
const promises = Promise.all([
    await import('./greeting.js'),
    await import('./calc.js')
  ])
  
console.log(promises)

promises.then(result => {
    console.log(result)
    console.log(result[0].sayHola()) // 근데 왜 undefined가 되는거지?
    console.log(result[1].sum(2,3))
})
