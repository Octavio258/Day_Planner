
$(document).ready(function () {
    $('.saveBtn').on('click', function() {
        var usrText = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id');
        localStorage.setItem(time, usrText);

        
    });

    $('#Iam9 .description').val(localStorage.getItem('Iam9'));
    $('#Iam10 .description').val(localStorage.getItem('Iam10'));
    $('#Iam11 .description').val(localStorage.getItem('Iam11'));
    $('#Iam12 .description').val(localStorage.getItem('Iam12'));
    $('#Iam1 .description').val(localStorage.getItem('Iam1'));
    $('#Iam2 .description').val(localStorage.getItem('Iam2'));
    $('#Iam3 .description').val(localStorage.getItem('Iam3'));
    $('#Iam4 .description').val(localStorage.getItem('Iam4'));
    $('#Iam5 .description').val(localStorage.getItem('Iam5'));

    
    });