var createArrBtn = document.querySelector('.create-array-btn')
var valuesArr = document.querySelector('.values-arr')
createArrBtn.addEventListener('click', function(){
    var length = Math.floor((Math.random()*11)+10)
    var arrNumbers = []
    for (var i=0; i<length; i++){
        arrNumbers[i] = Math.floor((Math.random()*91)+10)
    }
    valuesArr.textContent = arrNumbers.join(', ')
})

var addBtn = document.querySelector('#add-btn')
var valuesAfterAdd = document.querySelector('.values-after-add')
addBtn.addEventListener('click', function(){
    var firstArr = valuesArr.textContent.split(',')
    for (var i=0;i<firstArr.length;i++){
        firstArr[i] = parseInt(firstArr[i])
    }
    var checkSortUp = document.querySelector('#sort-up').checked 
    var checkSortDown = document.querySelector('#sort-down').checked 
    var numberPosition = document.querySelector('#number-position').value
    var valueAdd = document.querySelector('#value-add').value
    if (checkSortUp){
        var sortedArr = firstArr.sort()
        console.log(sortedArr)
    }
    else if (checkSortDown){
        var sortedArr = firstArr.sort().reverse()
        console.log(sortedArr)
    }
    else{
        var sortedArr = firstArr
    }
    sortedArr.splice(numberPosition-1,0,valueAdd)
    // Cách 2:
    // for (var i=firstArr.length; i>=numberPosition.value; i--){
    //     firstArr[i] = firstArr[i-1]
    // }
    // firstArr[numberPosition.value-1] = valueAdd.value
    valuesAfterAdd.textContent = sortedArr
})