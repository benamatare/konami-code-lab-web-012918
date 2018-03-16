const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
// up, up, down, down, left, right, left, right, b, a = 10

let index = 0;




function init() {
  document.addEventListener("keydown", onKeyDownhandler) // Listens for the user input commands
  function  onKeyDownhandler(event) {
    const key = parseInt(event.detail || event.which);
    (key === code[index]) ? index++ : index = 0
     if (index === code.length){
      alert ('i hate arren');
    document.removeEventListener("keydown", onKeyDownhandler)
    index = 0;
    }
  }
}
