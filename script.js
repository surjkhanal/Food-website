let query = 'https://www.themealdb.com/api/json/v1/1/filter.php?i='
makeAPICall(query).then(showResults);

// let searchForm = document.forms['search-form-body']
// searchForm.addEventListener('submit', (event) => {
//     event.preventDefault();
//     let text = event.target['search-txt'].value
//     makeAPICall(query + text).then(showResults);
// })

document.querySelector('#search-txt').addEventListener('input', (event) => {
    let text = event.target.value
    makeAPICall(query + text).then(showResults);
    document.querySelector('#result-conatiner h1').innerHTML="Result ..."
})
function showResults(data) {
    let resultBlock = document.querySelector('#result-conatiner #result')
    resultBlock.innerHTML = ''

    data['meals'].forEach(meal => {
        resultBlock.innerHTML += `
        <a href="./food.html?foodId=${meal.idMeal}"> 
            <div class = "food-block" >
            <img src = ${meal.strMealThumb+ "/preview"} alt = "" >
        <span > ${meal.strMeal} </span></div ></a> `
    })
}
async function makeAPICall(req) {
    let res = await fetch(req)
    let data = await res.json()
    return data;
}