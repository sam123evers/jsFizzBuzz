var body = document.body;
var text = "";
var p = document.createElement("p");

var num = 1;

while (num <= 100) {
    if (num % 3 === 0) {
        text += "fizz \n";
    }
    if (num % 5 === 0) {
        text += "buzz \n";
    }

    if (num % 3 != 0 && num % 5 != 0) {
        text += (num + "\n");
    }
    num++;
};

p.innerText = text;
body.append(p);