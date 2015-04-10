$(document).ready(function(){
    $('#div').click(function(){
        var clickBtn = $(this).val();
        var ajaxurl = '',
        data = {'action' : clickBtn};
        $.post(ajaxurl, data, function (response){
            // Response div goes here
            alert("action performed successfully");
        });
    });
});
