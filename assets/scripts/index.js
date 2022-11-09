const players = [
  { name: "Messi", goals: 25, assists: 120, image: "messi.webp" },
  { name: "Ronaldo", goals: 25, assists: 120, image: "ronaldo.webp" },
  { name: "Neymar", goals: 25, assists: 120, image: "neymar.jpeg" },
  { name: "Pele", goals: 25, assists: 120, image: "pele.jpg" },
  { name: "Maradona", goals: 25, assists: 120, image: "maradona.webp" },
  { name: "Mbappe", goals: 25, assists: 120, image: "mbappe.jpg" },
  { name: "Machado", goals: 25, assists: 120, image: "machado.jpeg" },
];

const expanses = {
  player_expanse: 0,
  total_number: 0,
};

const selectedPlayers = [];

const playersContainer = document.querySelector(".players");
const selectedList = document.querySelector(".selected ol");

const hydrateSelected = () => {
  let html = "";

  selectedPlayers.forEach((player) => {
    html += `<li>${player}</li>`;
  });

  selectedList.innerHTML = html;
  document.querySelector(".selected_count").textContent =
    selectedPlayers.length;

  if (html.length > 0) {
    document.querySelector(".no-player").classList.add("hidden");
  }
};

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
  if (selectedPlayers.length >= 5) {
    return alert("Can't select more than 5");
  }

  if (selectedPlayers.includes(player)) {
    return alert("This player has already been selected");
  } else {
    selectedPlayers.push(player);
    element.classList.add("selected");
    hydrateSelected();
  }
};

const calculatePerPlayer = () => {
  const perPlayer = parseFloat(document.querySelector("#per_player").value);
  if (!perPlayer) {
    return alert("Please type a valid number");
  }
  expanses.player_expanse = perPlayer * selectedPlayers.length;

  const playerExpanse = document.querySelector(".player_expanse");
  playerExpanse.textContent = expanses.player_expanse;
};

const caltulateTotal = () => {
  const managerValue = parseFloat(document.querySelector("#manager").value);
  const coachValue = parseFloat(document.querySelector("#coach").value);

  if (!managerValue || !coachValue) {
    return alert("Please type a valid number");
  }

  expanses.total_number = expanses.player_expanse + managerValue + coachValue;

  const totalExpanse = document.querySelector(".total_number");
  totalExpanse.textContent = expanses.total_number;
};

window.onload = () => {
  hydratePlayers();
};
