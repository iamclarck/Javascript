class Character {
	constructor(name, weapon) {
		(this.name = name), (this.weapon = weapon);
	}
	attack() {
		return "attack with " + this.weapon;
	}
}

class Elf extends Character {
	constructor(name, weapon, type) {
		super(name, weapon);
		this.type = type;
	}
}

class Ogre extends Character {
	constructor(name, weapon, color) {
		super(name, weapon);
		this.color = color;
	}
	makeFort() {
		return "Strongest Fort in the world made";
	}
}
const dolby = new Elf("Dolby", "Cloth", "House");
const shrek = new Ogre("Shrek", "club", "green");
console.log(dolby.attack());
console.log(shrek.makeFort());

