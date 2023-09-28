import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  // getters
  get floors() {
    return this._floors;
  }

  // setters
  set floors(floors) {
    if (typeof floors !== 'number') {
      throw new TypeError('floors must be a number');
    }
    this._floors = floors;
  }

  // methods
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
