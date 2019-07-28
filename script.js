var body = document.body;
var container = document.createElement('div');
container.className = "container";
body.append(container);
var num = 1;

while (num <= 100) {
    var p = document.createElement("p");
    p.className = "box";
    if (num % 3 === 0) {
        p.innerText = "fizz";
        container.append(p);
    }
    if (num % 5 === 0) {
        p.innerText = "buzz";
        container.append(p);
    }

    if (num % 3 != 0 && num % 5 != 0) {
        p.innerText = num;
        container.append(p);
    }
    num++;
};


