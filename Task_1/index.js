const citiesAndCountries = {
	'Київ': 'Україна',
	'Нью-Йорк': 'США',
	'Амстердам': 'Нідерланди',
	'Берлін': 'Німеччина',
	'Париж': 'Франція',
	'Лісабон': 'Португалія',
	'Вена': 'Австрія',
};

const result = [];

for (const city in citiesAndCountries) {
  result[result.length] = `${city} - це ${citiesAndCountries[city]}`  
}

console.log(result);