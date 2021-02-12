var x = 0;
function plusFunction() {
    document.getElementById('displayNumbers').innerHTML = ++x;
}
function minusFunction() {
    document.getElementById('displayNumbers').innerHTML = --x;
}
function resetFunction() {
    document.getElementById('displayNumbers').innerHTML = x=0;
}