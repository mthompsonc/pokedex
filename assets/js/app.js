$(document).ready(function(){
  console.log('ready');
})

  $('#pokesearch').click(function(event){
    let pokeInput= $('#pokeInput').val();
    const pokeURL= ('http://pokeapi.salestock.net/api/v2/pokemon/' + pokeInput);
    const pokeURL2= ('http://pokeapi.salestock.net/api/v2/pokemon-species/' + pokeInput);
    console.log(pokeURL);
    pokeInput = $('#pokeInput').val('');
    $.getJSON(pokeURL, function(data){
      console.log(data.name);
      console.log(pokeURL);
      var containerImg=$('.imgs').empty();
      $.getJSON(pokeURL2, function(data2){
      
      containerImg.append('<div class="container"><div class="row"><div class="col-md-5 col-lg-5"><img id='+data.id+' src="'+ data.sprites.front_default +'" alt="placeholder+image"></div><div class="col-md-7 col-lg-7"><h3>'+ data.name +'</h3><p>'+ data2.flavor_text_entries[1].flavor_text+'</p></div></div></div>');
      })
      
    })
  })

/*

* Función para que aparezcan todos pokemones en página
$.get('http://pokeapi.salestock.net/api/v2/pokemon/?limit=949', (data, status)=> {
  if (status==='success'){
    for(x in data.results){
      var url= data.results[x].url;
      $.get(url, (data, status)=>{
        if (status === 'success'){
          var containerImg = $('.imgs').append('<img id='+data.id+' src="'+ data.sprites.front_default +'" alt="placeholder+image">');
        }
      })
    }
  }
})
*/



