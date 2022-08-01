//Styles
import "../scss/styles.scss";

//Scripts

//Module Design Pattern w/ IIFE
let ref = (function () {
  let privateVar = "this is private";
  let publicVar = "hello world";
  return {
    publicVar: publicVar
  };
})();

console.log(ref.publicVar); //hello world
console.log(ref.privateVar); //undefined
