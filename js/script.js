const l = document.getElementById("length");
const w = document.getElementById("width");
const c = document.getElementById("calc");
let r = document.getElementById("result");
let arr = g = [];


c.addEventListener("click", (evt) => {
    g[2] = 9;
    prnt(calculate(l.value, w.value));
    evt.preventDefault();
});

function calculate(len, wdt) {
    let s = len * wdt / 4;

    if ((s % 8) == 0) {
        arr[0] = s / 8;
        arr[1] = 0;
        arr[2] = 0;
        return arr;
    } else if (s > 14 && SearchBox(s)) {
        return arr;
    } else if ((s % 6) == 0) {
        arr[0] = 0;
        arr[1] = s / 6;
        arr[2] = 0;
        return arr;
    } else {
        ForArray(s);
        arr[0] = g[0];
        arr[1] = g[1];
        arr[2] = g[2];
        return arr;
    }
}

function returnBalance(q, e, c) {
    let r = q - ((e * 8) + (c * 6));
    if (r > 0) {
        return false;
    }
    r = Math.abs(r);
    if (3 <= r <= 7) {
        let mass = [];
        mass[0] = e;
        mass[1] = c;
        mass[2] = r;
        return mass;
    }
}

function ForArray(w) {
    let f = [];
    for (let m = 0; m <= 29; m++) {
        for (let n = 0; n <= 38; n++) {
            f = returnBalance(w, n, m);
            if (f != "false") {
                if (g[2] != 0 && g[2] != undefined) {
                    if (f[2] < g[2]) {
                        g[0] = f[0];
                        g[1] = f[1];
                        g[2] = f[2];
                    }
                }
            }
        }
    }
}


function SearchBox(b) {
    for (let i = 0; i < 4; i++) {
        if (((b - (i * 6)) % 8) == 0 && ((6 * i) % 6) == 0) {
            arr[0] = (b - (i * 6)) / 8;
            arr[1] = i;
            arr[2] = 0;
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
    if (array[2]) {
        t += `, remaining free seats - ${array[2]}`;
    }
    r.innerHTML = t;
}