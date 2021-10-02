$(document).ready(function(){
          $('.result').attr('disabled', 'true');
    $('.container button.number').on('click',function(){
          $char =$(this).html();
          $valueResult = $('.result').val();
          $('.result').val($valueResult + $char);
    });
    $('.container button.operation').on('click',function(){
              $char = $(this).html();
              $valueOperation = $('.result').val();
              $('.result').val($valueOperation + $char);
    });
    $('.container button.equal').on('click',function(){
              $result = $('.result').val();
              $('.result').val(eval($result));
    });
    $('.container button.clear').on('click',function(){
              $('.result').val('');
    })
});