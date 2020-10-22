/**
 * My first serverless app
 * 
 * Author:  Anshul Kharbanda
 * Created: 10 - 21 - 2020
 */

// List of possible name parts
const benedict = [
    'Beneficial',
    'Benedryll',
    'Bartholemew',
    'Bartsimpson',
    'Bordedup',
    'Broodfeather',
    'Boredattourney',
    'Battlestar',
    'Buildabear',
    'Beebop',
    'Brokeback'
]
const cumberbatch = [
    'Cucumber',
    'Serverlessapp',
    'Catchafish',
    'Coronavirus',
    'Crabsinmypants',
    'Carpetbombsyria',
    'Cannotretrievefile',
    'Classicalmusic',
    'Cumberlandfarms',
    'Coochiedespenser',
    'Commitviolence',
    'Cardinalsin',
    'Cantwalkontwolegs',
    'Cardtrick',
    'Coolstorybro',
    'Candlestick',
    'Cartoonishfeet',
    'Catherineyouneedtostop',
    'Casualdating'
]

/**
 * Get random value from array
 * 
 * @param {Array} array array of values
 */
function random(array) {
    return array[Math.floor(array.length * Math.random())]
}

/**
 * Get random Benedict Cumberbatch name
 */
module.exports = function getName() {
    return random(benedict) + ' ' + random(cumberbatch)
}