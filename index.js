// Stato del filtro
let westernFilter = false;

// Stato del filtro
let easternFilter = false;

// Funzione asincrona per caricare i team
async function loadTeams() {
  try {
    const response = await fetch("nba-teams.json");
    const data = await response.json();
    renderTeams(data);
  } catch (error) {
    console.error("Error loading JSON:", error);
    const teamsContainer = document.getElementById("teams");
    teamsContainer.innerHTML =
      "<p>Failed to load teams. Please try again later.</p>";
  }
}

// Funzione per renderizzare i team nella pagina
function renderTeams(data) {
  const teamsContainer = document.getElementById("teams");
  teamsContainer.innerHTML = ""; // Svuota il contenitore
  data.forEach((team) => {
    const teamDiv = createTeamElement(team);
    teamsContainer.appendChild(teamDiv);
  });
}

// Funzione per generare l'HTML dei team
function createTeamElement(team) {
  const teamDiv = document.createElement("div");
  teamDiv.className = "team";
  teamDiv.style.cursor = "pointer";
  teamDiv.dataset.conference = team.conference;
  teamDiv.innerHTML = `
      <img src="${team.logo_url}" alt="${team.team_name} Logo">
      <h2>${team.team_name}</h2>
    `;

  teamDiv.addEventListener("click", () => {
    displayTeamDetails(team);
  });

  return teamDiv;
}

// Funzione per visualizzare i dettagli di una squadra
function displayTeamDetails(team) {
  const aside = document.getElementById("teamDetails");
  aside.innerHTML = `
      <button id="closeAside" class="circular-btn" aria-label="Close team detalis">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="white" aria-label="Close Team Details">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <h3>${team.team_name}</h3>
      <img src="${team.logo_url}" alt="${team.team_name} Logo" style="max-width: 100%;">
      <p><strong>City:</strong> ${team.city}, ${team.state}</p>
      <p><strong>Conference:</strong> ${team.conference}</p>
      <p><strong>Division:</strong> ${team.division}</p>
      <p><strong>Foundation:</strong> ${team.foundation}</p>
      <p><strong>Titles:</strong> ${team.nba_titles}</p>
    `;

  aside.classList.add("active"); // Aggiungi la classe per avviare l'animazione
  document.body.style.overflow = "hidden";

  // Aggiunta della funzionalità per chiudere l'aside
  document.getElementById("closeAside").onclick = () => {
    aside.classList.remove("active"); // Rimuovi la classe per nascondere l'aside
    document.body.style.overflow = "auto";
  };
}

// Mostra/nasconde il pulsante di ritorno in cima
window.onscroll = function () {
  const btn = document.getElementById("scrollToTopBtn");
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    btn.style.display = "flex";
  } else {
    btn.style.display = "none";
  }
};

// Funzionalità per scrollare in alto con un'animazione smooth
document.getElementById("scrollToTopBtn").onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// Aggiunta dell'evento al pulsante "Western Conference"
document.getElementById("west").addEventListener("click", function () {
  const teams = document.querySelectorAll(".team"); // Seleziona tutte le squadre

  if (!westernFilter) {
    // Attiva il filtro "Western Conference"
    teams.forEach((team) => {
      const teamConference = team.dataset.conference; // Legge l'attributo data
      if (teamConference !== "Western") {
        team.style.display = "none"; // Nasconde squadre non Western
      } else {
        team.style.display = "block"; // Mostra squadre Western
      }
    });
    westernFilter = true; // Imposta il filtro su attivo
  } else {
    // Disattiva il filtro e mostra tutte le squadre
    teams.forEach((team) => {
      team.style.display = "block";
    });
    westernFilter = false; // Resetta lo stato
  }
});

// Aggiunta dell'evento al pulsante "Western Conference"
document.getElementById("west-dd").addEventListener("click", function () {
  const teams = document.querySelectorAll(".team"); // Seleziona tutte le squadre

  if (!westernFilter) {
    // Attiva il filtro "Western Conference"
    teams.forEach((team) => {
      const teamConference = team.dataset.conference; // Legge l'attributo data
      if (teamConference !== "Western") {
        team.style.display = "none"; // Nasconde squadre non Western
      } else {
        team.style.display = "block"; // Mostra squadre Western
      }
    });
    westernFilter = true; // Imposta il filtro su attivo
  } else {
    // Disattiva il filtro e mostra tutte le squadre
    teams.forEach((team) => {
      team.style.display = "block";
    });
    westernFilter = false; // Resetta lo stato
  }
});

// Aggiunta dell'evento al pulsante "Eastern Conference"
document.getElementById("east").addEventListener("click", function () {
  const teams = document.querySelectorAll(".team"); // Seleziona tutte le squadre

  if (!easternFilter) {
    // Attiva il filtro "Eastern Conference"
    teams.forEach((team) => {
      const teamConference = team.dataset.conference; // Legge l'attributo data
      if (teamConference !== "Eastern") {
        team.style.display = "none"; // Nasconde squadre non Eastern
      } else {
        team.style.display = "block"; // Mostra squadre Eastern
      }
    });
    easternFilter = true; // Imposta il filtro su attivo
  } else {
    // Disattiva il filtro e mostra tutte le squadre
    teams.forEach((team) => {
      team.style.display = "block";
    });
    easternFilter = false; // Resetta lo stato
  }
});

// Aggiunta dell'evento al pulsante "Eastern Conference"
document.getElementById("east-dd").addEventListener("click", function () {
  const teams = document.querySelectorAll(".team"); // Seleziona tutte le squadre

  if (!easternFilter) {
    // Attiva il filtro "Eastern Conference"
    teams.forEach((team) => {
      const teamConference = team.dataset.conference; // Legge l'attributo data
      if (teamConference !== "Eastern") {
        team.style.display = "none"; // Nasconde squadre non Eastern
      } else {
        team.style.display = "block"; // Mostra squadre Eastern
      }
    });
    easternFilter = true; // Imposta il filtro su attivo
  } else {
    // Disattiva il filtro e mostra tutte le squadre
    teams.forEach((team) => {
      team.style.display = "block";
    });
    easternFilter = false; // Resetta lo stato
  }
});

// Funzione per cercare una squadra
document.getElementById("searchInput").addEventListener("input", function () {
  const query = this.value.trim().toLowerCase();
  const teams = document.querySelectorAll(".team");
  let teamFound = false;
  teams.forEach((team) => {
    const teamName = team.querySelector("h2").textContent.toLowerCase();
    if (teamName.includes(query)) {
      team.style.display = "block";
      teamFound = true;
    } else {
      team.style.display = "none";
    }
  });

  // Mostra un messaggio se non ci sono risultati
  const teamsContainer = document.getElementById("teams");
  if (!teamFound) {
    teamsContainer.innerHTML = "<p>No teams match your search.</p>";
  }
});

// Funzione per cercare una squadra
document.getElementById("searchInput-dd").addEventListener("input", function () {
  const query = this.value.trim().toLowerCase();
  const teams = document.querySelectorAll(".team");
  let teamFound = false;
  teams.forEach((team) => {
    const teamName = team.querySelector("h2").textContent.toLowerCase();
    if (teamName.includes(query)) {
      team.style.display = "block";
      teamFound = true;
    } else {
      team.style.display = "none";
    }
  });

  // Mostra un messaggio se non ci sono risultati
  const teamsContainer = document.getElementById("teams");
  if (!teamFound) {
    teamsContainer.innerHTML = "<p>No teams match your search.</p>";
  }
});

// Menù dropdown
document
  .getElementById("dropdownToggle")
  .addEventListener("click", function () {
    const menu = document.getElementById("dropdownMenu");
    menu.classList.toggle("active");
  });

// Chiudi il menu se si clicca fuori
document.addEventListener("click", function (event) {
  const menu = document.getElementById("dropdownMenu");
  const toggle = document.getElementById("dropdownToggle");
  if (!menu.contains(event.target) && !toggle.contains(event.target)) {
    menu.classList.remove("active");
  }
});

// Carica i team all'avvio
loadTeams();