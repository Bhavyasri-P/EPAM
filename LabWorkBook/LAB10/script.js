let tiles = [];
let emptyIndex = 8;
let timer = 0;
let interval;

const puzzle = document.getElementById("puzzle");
const timerDisplay = document.getElementById("timer");
const info = document.getElementById("info");

// Create tiles
function createTiles() {
  puzzle.innerHTML = '';
  tiles = [];

  for (let i = 1; i <= 8; i++) {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    tile.innerText = i;
    tile.addEventListener("click", () => moveTile(i - 1));
    tiles.push(tile);
  }

  const empty = document.createElement("div");
  empty.classList.add("tile", "empty");
  tiles.push(empty);

  tiles.forEach(tile => puzzle.appendChild(tile));
}

// Move tile
function moveTile(index) {
  const validMoves = [
    index - 3, index + 3,
    index % 3 !== 0 ? index - 1 : -1,
    index % 3 !== 2 ? index + 1 : -1
  ];

  if (validMoves.includes(emptyIndex)) {
    [tiles[index], tiles[emptyIndex]] = [tiles[emptyIndex], tiles[index]];
    emptyIndex = index;
    updatePuzzle();
    checkWin();
  }
}

// Update puzzle grid
function updatePuzzle() {
  puzzle.innerHTML = '';
  tiles.forEach(tile => puzzle.appendChild(tile));
}

// Shuffle tiles
function shuffleTiles() {
  for (let i = 0; i < 100; i++) {
    const movable = [emptyIndex - 3, emptyIndex + 3,
      emptyIndex % 3 !== 0 ? emptyIndex - 1 : -1,
      emptyIndex % 3 !== 2 ? emptyIndex + 1 : -1
    ].filter(i => i >= 0 && i < 9);

    const randomIndex = movable[Math.floor(Math.random() * movable.length)];
    moveTile(randomIndex);
  }
}

// Check for win
function checkWin() {
  const correct = tiles.slice(0, 8).every((tile, i) => tile.innerText == i + 1);
  if (correct && emptyIndex === 8) {
    clearInterval(interval);
    window.alert("🎉 Congratulations! You solved the puzzle in " + timer + " seconds.");
  }
}

// Timer
function startTimer() {
  timer = 0;
  timerDisplay.innerText = `Timer: 0s`;
  interval = setInterval(() => {
    timer++;
    timerDisplay.innerText = `Timer: ${timer}s`;
  }, 1000);
}

// Event listeners
document.getElementById("startBtn").addEventListener("click", () => {
  window.alert("Welcome! Rearrange the numbers in order from 1 to 8.");
  createTiles();
  shuffleTiles();
  startTimer();

  setTimeout(() => {
    window.alert("Hint: Only adjacent tiles to the empty space can be moved.");
  }, 3000);

  info.innerText = `Your browser: ${navigator.userAgent}`;
});

document.getElementById("shuffleBtn").addEventListener("click", () => {
  shuffleTiles();
  clearInterval(interval);
  startTimer();
});

document.getElementById("resetBtn").addEventListener("click", () => {
  createTiles();
  clearInterval(interval);
  timerDisplay.innerText = `Timer: 0s`;
});

createTiles(); // Initialize on load