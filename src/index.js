export default function characterCheck(name, health) {
    let character = {
        name: name,
        health: health
    }

    let characterStatus = '';

    if (character.health >= 50) {
        characterStatus = 'healthy';
    }
    if (character.health >= 15 && character.health < 50) {
        characterStatus = 'wounded';
    }
    if (character.health < 15) {
        characterStatus = 'critical';
    }

    return characterStatus;
}

