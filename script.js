var numberOne = null
var lastNumber = null
var operator = null

function didTapNumeric(value) {  
    var input = document.querySelector("input")
    if (input.value == '0') {
        input.value = value
    } else {
        input.value = input.value + value
    }
}

function appendSeparator() {
    var input = document.querySelector("input")
    if (input.value.endsWith(".")) {
        return
    }
    input.value = input.value + "."
}

function negate() {
    var input = document.querySelector("input")
    input.value = -parseFloat(input.value)
}

function reset() {
    var input = document.querySelector("input")
    numberOne = null
    lastNumber = null
    operator = null
    input.value = 0
}

function applyPercent() {
    var input = document.querySelector("input")
    input.value = parseFloat(input.value) * 0.01
}

function equal() {
    var input = document.querySelector("input")
    var total;
    if (lastNumber == null) {
        lastNumber = parseFloat(input.value);
    }

    switch (operator) {
        case "add":
            total = numberOne + lastNumber;
            break
        case "substract":
            total = numberOne - lastNumber;
            break
        case "divide":
            total = numberOne / lastNumber;
            break
        case "multiple":
            total = numberOne * lastNumber;
            break
    }
    input.value = total
    numberOne = total
}

function didTapOption(option) {
    var input = document.querySelector("input")
    numberOne = parseFloat(input.value)
    lastNumber = null
    operator = option
    input.value = ""
}