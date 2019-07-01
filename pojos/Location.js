class LocationCreator {
  constructor(city) {
    this.city = city;
  }
}

  function getLocation() {
    var location = Location.find_by_city(this.city)
  }
  class Location extends LocationCreator {
    constructor(latitude, longitude) {
      super(city)
      this.latitude
    }
  }
module.exports = Location
