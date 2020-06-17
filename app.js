import { promises } from 'fs'

const { readFile, writeFile } = promises

async function init() {
  await createStatesWithCities()
  await numberOfCities('RS')
  await orderCitiesPerState('more')
  await orderCitiesPerState('less')
  await lengthCityNameByState('longest')
  await lengthCityNameByState('shortest')
}

init()

//generate item 1 - state.json containing name of the cities
async function createStatesWithCities() {
  try {
    const states = JSON.parse(await readFile('./files/Estados.json'))
    const cities = aJSON.parse(await readFile('./files/Cidades.json'))

    states.forEach((state) => {
      const filteredCities = cities
        .filter((city) => city.Estado === state.ID)
        .map((city) => {
          return city.Nome
        })
      const stateWithCities = {
        Id: state.ID,
        UF: state.Sigla,
        Name: state.Nome,
        Cities: JSON.stringify(filteredCities),
        Number_of_cities: filteredCities.length,
      }
      writeFile(`./states/${state.Sigla}.json`, JSON.stringify(stateWithCities))
    })
  } catch (err) {
    console.log(err)
  }
}

//generate item 2 - displays the number of cities that the state passed as a parameter has
async function numberOfCities(uf) {
  const cities = JSON.parse(await readFile(`./states/${uf}.json`))
  console.log(`\n===> ${cities.Name} has ${cities.Number_of_cities} cities`)
}

// generate item 3 - array with 5 states with more cities (then pass "more" as order parameter) and
// generate item 4 - array with 5 states with less cities (should pass "less" as a parameter)
async function orderCitiesPerState(order) {
  const states = JSON.parse(await readFile('./files/Estados.json'))
  const cities = JSON.parse(await readFile('./files/Cidades.json'))

  const list = []

  states.forEach((state) => {
    let filteredCities = cities.filter((city) => city.Estado === state.ID)
      .length
    list.push({ state: state.Sigla, cities: filteredCities })
    list.sort((a, b) => b.cities - a.cities)
  })

  if (order === 'more') {
    const moreCities = []
    list.slice(0, 5).forEach((element) => {
      moreCities.push(`${element.state} - ${element.cities}`)
    })
    console.log('\n===> States with more cities:')
    console.log(moreCities)
  }

  if (order === 'less') {
    const lessCities = []
    list.slice(-5).forEach((element) => {
      lessCities.push(`${element.state} - ${element.cities}`)
    })
    console.log('\n===> States with less cities:')
    console.log(lessCities)
  }
}

//generate item 5 - list of longest city name of each state  and
//generate item 6 - shortest city name of each state
async function lengthCityNameByState(length) {
  const states = JSON.parse(await readFile('./files/Estados.json'))
  const result = []
  if (length === 'longest') {
    console.log('\n===> Longest name of city per state:')
    for (const state of states) {
      const city = await lengthCityName(state.Sigla, 'longest')
      result.push(`${city} - ${state.Sigla}`)
    }
    console.log(result)
  }
  if (length === 'shortest') {
    console.log('\n===> Shortest name of city per state:')
    for (const state of states) {
      const city = await lengthCityName(state.Sigla, 'shortest')
      result.push(`${city} - ${state.Sigla}`)
    }
    console.log(result)
  }
}

//this function is used above
async function lengthCityName(uf, length) {
  const data = JSON.parse(await readFile(`./states/${uf}.json`))
  const listOfCities = JSON.parse(data.Cities)

  listOfCities.sort().sort((a, b) => {
    if (length === 'longest') {
      return b.length - a.length
    }
    if (length === 'shortest') {
      return a.length - b.length
    }
  })
  return listOfCities[0]
}
