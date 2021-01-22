const l = document.getElementById("length");
const w = document.getElementById("width");
const c = document.getElementById("calc");
let r = document.getElementById("result");
let arr = [];

c.addEventListener("click", (evt) => {
    prnt(calculate(l.value, w.value));
    evt.preventDefault();
});

function calculate(len, wdt) {
    let s = len * wdt / 4;

    if ((s % 8) == 0) {
        arr[0] = s / 8;
        arr[1] = 0;
        return arr;
    } else if (((s % 8) % 6) == 0) {
        arr[0] = Math.floor(s / 8);
        arr[1] = 1;
        return arr;
    } else if ((s % 6) == 0) {
        arr[0] = 0;
        arr[1] = s / 6;
        return arr;
    } else {
        if ((s % 8) < 6) {
            arr[0] = Math.floor(s / 8);
            arr[1] = 1;
            return arr;
        } else {
            arr[0] = Math.ceil(s / 8);
            arr[1] = 0;
            return arr;
        }
    }
}

function prnt(array) {
    let t = "You will need ";
    if (array[0]) {
        t += `${array[0]} packs of 8pcs`;
    }
    if (array[0] && array[1]) {
        t += ", ";
    }
    if (array[1]) {
        t += `${array[1]} packs of 6pcs`;
    }
    r.innerHTML = t;
}