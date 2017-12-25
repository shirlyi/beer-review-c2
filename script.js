function renderBeers() {
    $('.beers-list li').remove();
    for(var i=0;i<beers.length;i++){
        $('.beers-list').append('<li> name:n'+beers[i].name+' category: '+beers[i].category+' rate:'+beers[i].rate+'</li>');
    }
}
function addBeer(name,category,rate) {
    var beer={
        name: name,
        category: category,
        rate: rate
    }
    beers.push(beer)
    console.log(beers);
}
function post() {
    var bname=$('.beer-input').val();
    var bcategory=$('.category-input').val();
    var rate=$('.rate').val();
    addBeer(bname,bcategory,rate);
    renderBeers();
    console.log(bname,bcategory,rate);
}
function sort() {
    if(sortclick%2===0){
        beers.sort(function(a,b) {
             return a.rate-b.rate;
         });
    }
    else{
        beers.sort(function(a,b) {
            return b.rate-a.rate;
        });
    }
    renderBeers();
    console.log(beers);
    sortclick++;
}
var beers=[];
var sortclick=0;
$('.post-beer').click(post);
$('.sort-beer').click(sort);