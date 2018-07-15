
const state = {
  usersBreedChoice: 'blah'
};



init();

function init(){
  handleSubmit();
}

function handleSubmit(){
  $('form').submit(function(event){
    state.usersBreedChoice = $('.js-query').val();
    $('.js-query').val('');

    getDataFromAPI(state.usersBreedChoice, displayData);
    //handleNextButton();
  });
}

function getDataFromAPI(query, callback){
  $.getJSON(`https://dog.ceo/api/breed/${query}/images/random`, function(data){
    callback(data);
  });
}

function displayData(data){
  let view = `<img src="${data.message}" />
              <button type="submit" class="js-next-btn">Next</button>`

  $('.js-search-results').html(view);
  handleNextButton();
}

function handleNextButton(){
  $('.js-next-btn').on('click', function(data){
    console.log('state is ', state.usersBreedChoice);
    getDataFromAPI(state.usersBreedChoice, displayData);
  });
}




















// end of page
