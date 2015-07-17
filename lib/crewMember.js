function CrewMember(type) {

    this.position = type;
    this.currentShip = 'Looking for a Rig';
    this.engageWarpDrive = this.ability;
    this.setsInvisibility = this.ability;
    this.chargePhasers = this.ability;

}

CrewMember.prototype.ability = function() {

    if (this.currentShip === 'Looking for a Rig') {
        return 'had no effect'
    } else {
        switch(this.position) {
            case "Pilot":
                this.currentShip.warpDrive = 'engaged!';
                break;
            case "Defender":
                this.currentShip.cloaked = true;
                break;
            case "Gunner":
                this.currentShip.phasersCharge = 'charged!';
                break;
        }
    };

}

