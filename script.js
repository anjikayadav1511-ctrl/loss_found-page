document.getElementById("lostForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Lost item submitted successfully!");
    this.reset();
});

document.getElementById("foundForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Found item submitted successfully!");
    this.reset();
});
