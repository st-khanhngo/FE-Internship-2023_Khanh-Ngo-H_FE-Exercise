// 10. Cho biết kết quả in ra của đoạn code sau.
// console.log('stack [1]');
// setTimeout(function A() { console.log('macro [2]')}, 0); 
// setTimeout(function B() { console.log('macro [3]')}, 0); 
// const p = Promise.resolve();
// p.then(function C() {
//   setTimeout(function D() {
//     console.log('macro [4]');
//     setTimeout(function E() { console.log('macro [5]')});
//     p.then(function F() { console.log('micro [6]') });
//   }, 0);
//   console.log('micro [7]');
// });
// console.log('stack [8]');

// Thứ tự output: stack [1] -> stack [8] -> stack [7] -> macro [2] -> macro [3] -> macro [4] -> micro [6] -> macro [5]
