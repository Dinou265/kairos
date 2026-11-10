async function loadEvents() {
  const grid = document.getElementById("event-grid");

  try {
    const response = await fetch("events.json");
    const events = await response.json();

    if (!events.length) {
      grid.innerHTML = "<p class='event-meta'>No live events yet.</p>";
      return;
    }

    grid.innerHTML = events.map(event => `
      <article class="event-card">
        <p class="event-meta">${event.dates} · ${event.location}</p>
        <h3>${event.name}</h3>
        <p class="event-meta">${event.theme}</p>
        <p class="event-meta">Deadline: ${event.deadline}</p>
        <a href="${event.registrationLink}" target="_blank" rel="noopener">Register →</a>
      </article>
    `).join("");
  } catch (error) {
    grid.innerHTML = "<p class='event-meta'>Could not load events.</p>";
  }
}

loadEvents();