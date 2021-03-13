// úkol 1:

function zmenBarvu() {
  document.querySelector(".ctverecek").style.backgroundColor = "green";
}


//úkol 2:

/**
 * Sečte dvě čísla na vstupu a vrátí výsledek

 * @param {int} a
 * @param {int} b
 */

function secti(a, b) {
  let c = a + b;
  return c;
}

document.querySelector("#vysledek").style.display = "none";

function scitej() {
document.querySelector("#vysledek").innerHTML = secti(4, 5);
document.querySelector("#vysledek").style.display = "inline";
}


//úkol 3:
function upozorni() {
  let gratulace = "Gratulace, právě jsi spustila tuto funkci!";
  console.log(gratulace);
  document.querySelector(".ctverecek").textContent = "Gratulace, právě jsi spustila tuto funkci!";
  document.querySelector(".ctverecek").style.lineHeight = "40px";
}

