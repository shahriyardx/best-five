const players = [
  { name: "Messi", goals: 25, assists: 120, image: "messi.webp" },
  { name: "Ronaldo", goals: 25, assists: 120, image: "ronaldo.webp" },
  { name: "Neyma", goals: 25, assists: 120, image: "neymar.jpeg" },
  { name: "Pele", goals: 25, assists: 120, image: "pele.jpg" },
  { name: "Maradona", goals: 25, assists: 120, image: "maradona.webp" },
  { name: "Mbappe", goals: 25, assists: 120, image: "mbappe.jpg" },
  { name: "Machado", goals: 25, assists: 120, image: "machado.jpeg" },
];

const selectedPlayers = [];

const playersContainer = document.querySelector(".players");

const hydratePlayers = () => {
  let html = "";

  players.forEach((player) => {
    html += `
      <div class="players__player">
        <img src="./assets/images/players/${player.image}" alt="" />

        <div class="players__player-info">
          <h1>${player.name}</h1>

          <p>
            <span>${player.goals} Goals</span>
            <span>·</span>
            <span>${player.assists} Assist</span>
          </p>

          <button onclick="addPlayer(this, '${player.name}')">Select Player</button>
        </div>
      </div>
    `;
  });

  playersContainer.innerHTML = html;
};

const addPlayer = (element, player) => {
  if (selectedPlayers.includes(player)) {
    return alert("This player has already been selected");
  } else {
    selectedPlayers.push(player);
    element.classList.add("selected");
  }
};

window.onload = () => {
  hydratePlayers();
};
