/**
 * My first serverless app!
 * 
 * Author:  Anshul Kharbanda
 * Created: 10 - 22 - 2020
 */
'use strict';

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
    'Brokeback',
    'Brunswick',
    'Bethlehem',
    'Babbawabba',
    'Beetlejuice',
    'Borrowmoney',
    'Backalley',
    'Bonesaw',
    'Bonjovi',
    'Boogaloo',
    'Brunomars',
    'Buyapackofcigarettes'
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
    'Casualdating',
    'Caca',
    'Cartridgeisempty'
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
 * Get name of Benedict Cumberbatch
 */
module.exports.getname = async event => {
    let string = random(benedict) + ' ' + random(cumberbatch)
    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'text/plain'
        },
        body: string
    }
}