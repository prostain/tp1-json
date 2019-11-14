$.ajax({
    type: 'GET',
    crossDomain : true,
    dataType : "json",
    url : "./choix_js.json",
    success : function(result) {
        console.log(result);
        for (let i = 0; i<result.length;i++) {
            $('#choix').append(`<option value="${result[i].value}">${result[i].label}</option>`);
        }
    }
});

function envoie() {

    $.ajax({
            type: 'POST',
            dataType: 'json',
            url: 'http://miw.spipha.fr:3000/api/contest_js',
            data : {
                name : $('#name').val(),
                choix: $('#choix').val()
            },
            success: function () {

            }
        })
}