const NASA_KEY = "rasmw1660zIkhWPwbHxmsnLNqg8vMqd0nwdbMqDQ";
const MAX_ITEMS = 12;

/*
=========================================================
CUSTOM FRONT-END REQUIREMENT

Student: Elliot Tawk

Requirement:
Design a loading spinner that appears during API calls.

Implementation:
The Spinner class controls the loading spinner on the Asteroids
page. The spinner appears before the NASA NeoWs API request starts
and disappears when the API request finishes, fails, or returns no
matching asteroid results.

This satisfies the custom UI requirement stated in the project brief.
=========================================================
*/

class Spinner {
  constructor(spinnerId) {
    this.spinner = document.getElementById(spinnerId);
  }

  show() {
    if (!this.spinner) return;
    this.spinner.classList.remove("d-none");
  }

  hide() {
    if (!this.spinner) return;
    this.spinner.classList.add("d-none");
  }
}

class AsteroidApp {
  constructor() {
    this.grid = document.getElementById("asteroidGrid");
    this.dateInput = document.getElementById("dateInput");
    this.filterSelect = document.getElementById("filterSelect");
    this.loadButton = document.getElementById("loadButton");
    this.messageBox = document.getElementById("messageBox");
    this.resultCount = document.getElementById("resultCount");
    this.spinner = new Spinner("loadingSpinner");

    if (!this.grid || !this.loadButton) return;

    this.setTodayDate();
    this.bindEvents();
    this.loadAsteroids();
  }

  setTodayDate() {
    if (!this.dateInput) return;

    const today = new Date().toISOString().split("T")[0];
    this.dateInput.value = today;
    this.dateInput.max = today;
  }

  bindEvents() {
    this.loadButton.addEventListener("click", () => {
      this.loadAsteroids();
    });

    if (this.dateInput) {
      this.dateInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          this.loadAsteroids();
        }
      });
    }

    if (this.filterSelect) {
      this.filterSelect.addEventListener("change", () => {
        this.loadAsteroids();
      });
    }
  }

  getSelectedDate() {
    if (!this.dateInput || this.dateInput.value.trim() === "") {
      return new Date().toISOString().split("T")[0];
    }

    return this.dateInput.value;
  }

  getSelectedFilter() {
    if (!this.filterSelect) return "all";
    return this.filterSelect.value;
  }

  buildApiUrl(date) {
    const url = new URL("https://api.nasa.gov/neo/rest/v1/feed");
    url.searchParams.set("start_date", date);
    url.searchParams.set("end_date", date);
    url.searchParams.set("api_key", NASA_KEY);
    return url.toString();
  }

  async loadAsteroids() {
    this.clearPage();

    const selectedDate = this.getSelectedDate();

    this.spinner.show();

    try {
      const apiUrl = this.buildApiUrl(selectedDate);
      const response = await fetch(apiUrl);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        const apiMessage =
          errorData.error?.message ||
          errorData.msg ||
          errorData.message ||
          `NASA API failed with status ${response.status}`;

        throw new Error(apiMessage);
      }

      const data = await response.json();

      let asteroids = this.flattenAsteroids(data.near_earth_objects);
      asteroids = this.filterAsteroids(asteroids);

      if (asteroids.length === 0) {
        this.showEmptyState(selectedDate);
        return;
      }

      this.displayAsteroids(asteroids.slice(0, MAX_ITEMS), asteroids.length);
    } catch (error) {
      this.showMessage(error.message, "danger");
    } finally {
      this.spinner.hide();
    }
  }

  flattenAsteroids(nearEarthObjects) {
    if (!nearEarthObjects) return [];

    const allAsteroids = [];

    Object.values(nearEarthObjects).forEach((dailyAsteroids) => {
      dailyAsteroids.forEach((asteroid) => {
        allAsteroids.push(asteroid);
      });
    });

    return allAsteroids;
  }

  filterAsteroids(asteroids) {
    const selectedFilter = this.getSelectedFilter();

    if (selectedFilter === "hazardous") {
      return asteroids.filter(
        (asteroid) => asteroid.is_potentially_hazardous_asteroid === true
      );
    }

    if (selectedFilter === "safe") {
      return asteroids.filter(
        (asteroid) => asteroid.is_potentially_hazardous_asteroid === false
      );
    }

    return asteroids;
  }

  displayAsteroids(asteroids, totalCount) {
    this.grid.innerHTML = asteroids
      .map((asteroid) => {
        const diameter =
          asteroid.estimated_diameter.kilometers.estimated_diameter_max.toFixed(2);

        const approach =
          asteroid.close_approach_data.length > 0
            ? asteroid.close_approach_data[0]
            : null;

        const speed = approach
          ? Number(approach.relative_velocity.kilometers_per_hour).toFixed(0)
          : "Unknown";

        const missDistance = approach
          ? Number(approach.miss_distance.kilometers).toFixed(0)
          : "Unknown";

        const status = asteroid.is_potentially_hazardous_asteroid
          ? "Potentially Hazardous"
          : "Not Hazardous";

        const badgeClass = asteroid.is_potentially_hazardous_asteroid
          ? "bg-danger"
          : "bg-success";

        return `
          <div class="col-md-4 col-lg-3 mb-4">
            <div class="card space-card h-100">
              <div class="card-body">
                <span class="badge ${badgeClass} mb-3">${status}</span>
                <h5 class="card-title">${asteroid.name}</h5>
                <p class="card-text mb-1">Diameter: ${diameter} km</p>
                <p class="card-text mb-1">Speed: ${speed} km/h</p>
                <p class="card-text">Miss Distance: ${missDistance} km</p>
              </div>
            </div>
          </div>
        `;
      })
      .join("");

    if (this.resultCount) {
      this.resultCount.innerHTML = `Showing ${asteroids.length} asteroid(s) from ${totalCount} matching result(s).`;
    }
  }

  showEmptyState(date) {
    this.grid.innerHTML = `
      <div class="col-12">
        <div class="empty-box text-center">
          <h3>No Asteroids Found</h3>
          <p>NASA returned no asteroid data for ${date} with your selected filter. Try another date or choose All Asteroids.</p>
        </div>
      </div>
    `;
  }

  showMessage(message, type = "danger") {
    if (!this.messageBox) return;

    this.messageBox.innerHTML = `
      <div class="alert alert-${type} text-center">
        ${message}
      </div>
    `;
  }

  clearPage() {
    if (this.grid) this.grid.innerHTML = "";
    if (this.messageBox) this.messageBox.innerHTML = "";
    if (this.resultCount) this.resultCount.innerHTML = "";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("asteroidGrid")) {
    new AsteroidApp();
  }
});