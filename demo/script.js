// GSAP Animations
gsap.from("header", { duration: 1, y: -50, opacity: 0, ease: "bounce" });
gsap.from("#map", { duration: 1, x: -100, opacity: 0, delay: 0.5 });
gsap.from("#recommendations", { duration: 1, x: 100, opacity: 0, delay: 0.5 });

// Event Listener for Recommendations
document.getElementById("recommend-btn").addEventListener("click", function () {
  const soil = document.getElementById("soil").value;
  const region = document.getElementById("region").value;

  // Mock Recommendations
  const recommendations = {
    loamy: { north: "Wheat", south: "Rice", east: "Corn", west: "Barley" },
    clay: { north: "Sugarcane", south: "Paddy", east: "Soybean", west: "Cotton" },
    sandy: { north: "Millet", south: "Groundnut", east: "Maize", west: "Jowar" },
  };

  // Display Recommendations
  const output = document.getElementById("output");
  output.innerHTML = `<p>Recommended Crop: <strong>${recommendations[soil][region]}</strong></p>`;
});