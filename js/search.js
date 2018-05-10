function myFunction(a) {
    if(a== 5){
        return '<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>'
    }else if(a>= 4.5){
        return '<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i>'
    }else if(a>= 4){
        return '<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-o"></i>'
    }else if(a>= 3.5){
            return '<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i><i class="fa fa-star-o"></i>';
        }else if(a>=3){
            return '<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i>';
        }else if(a>= 2.5){
            return '<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i>';
        }else if(a>= 2){
            return '<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i>';
            }else if(a>= 1.5){
                return '<i class="fa fa-star"></i><i class="fa fa-star-half-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i>';
            }else if(a >= 1){
                return '<i class="fa fa-star"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i>';
                }else if(a>= 0.5){
                    return '<i class="fa fa-star-half-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i>';
                }else{
                    return '<i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i>';
                }
            }
$(function () {

    $('#search').click(function(){
        $('#searchresult').empty();
        var keyword = $('#keyword').val();
        var type = $('#type').val();
        var radius = $('#radius').val();
        PlaceSearch.Search(keyword, type, radius).then(function(data){
            for(var i=0;i<data.length;i++){
                var showstar = myFunction(data[i].rating);
                var row = '<a href="detail.html?placeid=' + data[i].id + '">' + 
                '<div class="row results p-1 m-5 h-100 bgdarktone">' + 
                '<div class="col showimg"><img src=' + data[i].photo + ' class= "w-100 thumbnail" /></div>' +
                '<div class="col showname text-light">' + data[i].name + '</div>' +
                '<div class="col showrate text-light"><span class="sr-only">'+data[i].rating+'</span>' + showstar + '</div>' +
                '</div>' +
                '</a>';
                '<br>';
                $('#searchresult').append(row);
            }
        });
    });    
});
