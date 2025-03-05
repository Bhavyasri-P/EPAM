document.addEventListener("DOMContentLoaded", function () {
    // Handle filtering array
    document.getElementById("filterBtn").addEventListener("click", function () {
        const items = ["Mystic Mocha", "Elven Green Tea", "Wizard’s Cookie", "Spellbound Cheesecake", "Dark Roast"];
        const filteredItems = items.filter(item => item.includes("Tea") || item.includes("Mocha"));

        document.getElementById("filteredResult").innerHTML = 
            `🔍 Filtered Items: <b>${filteredItems.join(", ")}</b>`;
    });
});