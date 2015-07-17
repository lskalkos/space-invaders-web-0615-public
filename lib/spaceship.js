//spaceship = new Spaceship('The Krestel', [], 5, 4);

function Spaceship(name, crew, phasers, shields) {

    var crew = crew;

    function isDocked() {
        return crew.length === 0 ? true : false;
    }

    if (crew.length > 0) {
        for (var member in crew) {
            crew[member].currentShip = this;
        }
    };

    this.name = name;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = 'disengaged';
    this.phasersCharge = 'uncharged';
    this.docked = isDocked();
}