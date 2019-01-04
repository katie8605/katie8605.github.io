$(document).ready(function() {
    $('#submit').click(function(){
        
        //check if the field is empty
        if($('#list').val() =='') {
            alert('The Field Cannot be blank!');
        } else {
            var isChecked = $('#important').prop('checked');
            var list = $('#list').val();
            
            //find the current date and time
            var date = new Date();
            var minute; 
            var dateCreated = addZero((date.getMonth() + 1 )) + '/' + addZero(date.getDate()) + '/' + date.getFullYear() + ' ' + addZero(date.getHours()) + ':' + addZero(date.getMinutes());
            
            //check if the check box is selected
            if(isChecked) {
                $('ul').prepend('<div class="info important-list"><li>' + list + "</li>" + '<span class="time">Date created: '+ dateCreated + '</span>' + '<a class="delete" href="#"><i class="far fa-trash-alt"></i></a><a class="edit" href="#"><i class="fas fa-pen far"></i></a></div>');
            } else {
                $('ul').append('<div class="info"><li>' + list + "</li>" + '<span class="time">Date created: '+ dateCreated + '</span>' + '<a class="delete" href="#"><i class="far fa-trash-alt"></i></a><a class="edit" href="#"><i class="fas fa-pen far"></i></a></div>');
            } // end if statement
            
            //uncheck the check box
            $('#important').prop('checked', false);
            
            //clear the field
            $('#list').val(''); 
                        
        } // end if statement         
    }); //end submit
    
    
    //delete             
    $(document).on("click",".delete",function(){
        $(this).parent().remove();
    });
    
    //edit
    $(document).on("click",".edit",function(){
        $(this).parent().children().hide();
        
        //add the text field and icons
        var editInput = '<div id="revision"><input type="text" id="edit-list" class="edit-text"><a href="#" class="ok"><i class="icon fas fa-check"></i></a><a href="#" class="cancel"><i class="icon fas fa-times"></i></a></div>';
        $(this).after(editInput);
        
        //ok
        $(this).parent('.info').on("click",".ok",function(){
            var editedList = $(this).parent().children('.edit-text').val();
            
            //check if the field is empty
            if (editedList == '') {
                alert('Cannot be blank')
                $(this).preventDefault();
            } else {
                
                //find the current date and time
                var date = new Date();
                var dateCreated = addZero((date.getMonth() + 1 )) + '/' + addZero(date.getDate()) + '/' + date.getFullYear() + ' ' + addZero(date.getHours()) + ':' + addZero(date.getMinutes());
                $(this).parent().parent().find('span').replaceWith('<span class="time">' + "Date modified: " + dateCreated + "</span>");
                
                //replace the list
                $(this).parent().parent().children('li').replaceWith("<li>" + editedList + "</li>");
                $(this).parent().parent().children().show();
                $(this).parent().remove();
            } // end if statement
        }); // end ok
        
        //cancel
        $('.info').on("click",".cancel",function(){
            $(this).parent().parent().children().show();
            $(this).parent().remove();
        }); // end cancel            
    }); // end edit
}); // end ready
            
            
function addZero(i) {
    if (i < 10) {
        i = "0" + i;
     }
    return i;
}
        