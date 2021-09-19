'use strict';

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);
  clicks = 0;

  constructor(coords, distance, duration) {
    this.coords = coords;
    this.distance = distance; //in km
    this.duration = duration; //in minutes
  }
  _setDescription() {
    /* // prettier-ignore*/
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }
  click() {
    this.clicks += 1;
  }
}

class Running extends Workout {
  type = 'running';
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this._setDescription();
  }
  calcPace() {
    //min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}
class Cycling extends Workout {
  type = 'cycling';
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
    this._setDescription();
  }
  calcSpeed() {
    //km/hr
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

// const run1 = new Running([39, -12], 5.2, 24, 178);
// const cycling1 = new Cycling([39, -12], 27, 95, 523);
// console.log(run1, cycling1);

class App {
  #map;
  #mapEvent;
  #mapZoomLevel = 13;
  #workouts = [];

  constructor() {
    this._getPosition();

    this._getLocalStorage();

    form.addEventListener('submit', this._newWorkOut.bind(this));

    inputType.addEventListener('change', this._toggleElevationFields);

    containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));
  }

  _getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), () => {
        alert('Could not get your position');
      });
    }
  }
  _loadMap(pos) {
    // console.log(pos);
    const { latitude, longitude } = pos.coords;
    const coords = [latitude, longitude];
    // console.log(latitude, longitude);

    this.#map = L.map('map').setView(coords, this.#mapZoomLevel);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    //Handling click on map
    this.#map.on('click', this._shownForm.bind(this));

    this.#workouts.forEach(work => {
      // this._renderWorkout(work);
      this._renderWorkoutMarker(work);
    });
  }
  _shownForm(mapE) {
    //console.log(pos);
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _hideForm() {
    inputDistance.value = inputDuration.value = inputElevation.value = inputCadence.value =
      '';
    form.style.display = 'none';
    form.classList.add('hidden');

    setTimeout(() => {
      form.style.display = 'grid';
    }, 1000);
  }

  _toggleElevationFields() {
    // console.log('working fine');
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden'); //closet is inverse of querySelector
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkOut(event) {
    const validInputs = (...inputs) =>
      inputs.every(inp => Number.isFinite(inp));

    const allPositive = (...inputs) => inputs.every(inp => inp > 0);

    event.preventDefault();

    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    let workout;

    if (type === 'running') {
      const cadence = +inputCadence.value;
      if (
        //guard class
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      )
        return alert('Input have to be positive numbers');

      const { lat, lng } = this.#mapEvent.latlng;
      workout = new Running([lat, lng], distance, duration, cadence);
    }

    if (type === 'cycling') {
      const elevation = +inputElevation.value;
      if (
        !validInputs(distance, duration, elevation) ||
        !allPositive(distance, duration)
      )
        return alert('Input have to be positive numbers');
      const { lat, lng } = this.#mapEvent.latlng;
      workout = new Cycling([lat, lng], distance, duration, elevation);
    }

    this.#workouts.push(workout);
    console.log(this.#workouts);

    //clear input fields

    //display marker
    const { lat, lng } = this.#mapEvent.latlng;
    const curCoords = [lat, lng];

    this._renderWorkoutMarker(workout);

    this._renderWorkout(workout);
    //hide form
    this._hideForm();
    //set local storage
    this._setLocalStorge();
  }

  _renderWorkoutMarker(workout) {
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 300,
          minWidth: 150,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(
        `${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`
      )
      .openPopup();
  }
  _renderWorkout(workout) {
    let html = `<li class="workout workout--${workout.type}" data-id="${
      workout.id
    }">
    <h2 class="workout__title">Running on April 14</h2>
    <div class="workout__details">
      <span class="workout__icon">${
        workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
      }</span>
      <span class="workout__value">${workout.distance}</span>
      <span class="workout__unit">km</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">⏱</span>
      <span class="workout__value">${workout.duration}</span>
      <span class="workout__unit">min</span>
    </div>`;
    if (workout.type === 'running') {
      html += `<div class="workout__details">
      <span class="workout__icon">⚡️</span>
      <span class="workout__value">${workout.pace.toFixed(1)}</span>
      <span class="workout__unit">min/km</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">🦶🏼</span>
      <span class="workout__value">${workout.cadence}</span>
      <span class="workout__unit">spm</span>
    </div>
  </li>`;
    }

    if (workout.type === 'cycling') {
      // console.log('cycling');
      html += `<div class="workout__details">
        <span class="workout__icon">⚡️</span>
        <span class="workout__value">${workout.speed.toFixed(1)}</span>
        <span class="workout__unit">km/h</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">⛰</span>
        <span class="workout__value">${workout.elevationGain}</span>
        <span class="workout__unit">m</span>
      </div>
    </li>`;
    }
    form.insertAdjacentHTML('afterend', html);
  }

  _moveToPopup(e) {
    const workoutEl = e.target.closest('.workout');
    // console.log(workoutEl);
    if (!workoutEl) return; //guard class
    const workout = this.#workouts.find(
      work => work.id === workoutEl.dataset.id
    );
    // console.log(workout);

    this.#map.setView(workout.coords, this.#mapZoomLevel, {
      animate: true,
      pan: { duration: 1 },
    });

    //using public interface
    workout.click();
  }

  _setLocalStorge() {
    localStorage.setItem('workout', JSON.stringify(this.#workouts));
  }

  _getLocalStorage() {
    const data = JSON.parse(localStorage.getItem('workout'));
    // console.log(data);

    if (!data) return;

    this.#workouts = data;
    this.#workouts.forEach(work => {
      this._renderWorkout(work);
      // this._renderWorkoutMarker(work);
      if (work.type === 'running') {
        Object.setPrototypeOf(work, Running.prototype);
      }
      if (work.type === 'cycling') {
        Object.setPrototypeOf(work, Cycling.prototype);
      }
    });
  }

  reset() {
    localStorage.removeItem('workout');
    location.reload();
  }
}

const app = new App();

//get data from form
//check data validity
//if valid create running or cycling object
//add new obj to array
//render workout on map as marker
//hide form and clear input FileSystem
