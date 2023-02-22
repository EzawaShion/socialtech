$(function() {
  $('.button-more').on('mouseover', function(){
    $(this).animate({
      opacity: 0.5,
      marginLeft: 20,
    },100);
  });

  $('.button-more').on('mouseout', function(){
    $(this).animate({
      opacity: 1.0,
      marginLeft: 0,
    },100);
  });

  $('.carousel').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 5000,
    arrows: false,
  });

  

    // お問い合わせフォームの入力チェック
  
  $('.submit').on('click', function(e){
    e.preventDefault();

    let result = inputCheck();

    let error = result.error;
    let message = result.message;

    if(error == false){
      $.ajax({
        url: 'https://api.staticforms.xyz/submit',
        type: 'POST',
        dataType: 'json',
        data: $('#form').serialize(),
        success: function (result) {
          alert('お問い合わせを送信しました。')
        },
        error: function (xhr, resp, text) {
          alert('お問い合わせを送信できませんでした。')
        }
      })
    }else{
      alert(message);
    }
  });

  $('#firstName').blur(function(){
    inputCheck();
  });

  $('#lastName').blur(function(){
    inputCheck();
  });

  $('#tel').blur(function (){
    inputCheck();
  });

  $('#email').blur(function () {
    inputCheck();
  });

  $('#password').blur(function () {
    inputCheck();
  });

  $('#birthday').blur(function () {
    inputCheck();
  });

  $('#check').click(function () {
    inputCheck();
  });


  
  function inputCheck() {
    let result;
    let error = false;
    let message = "";

    if($('#firstName').val() == ""){
      $('#firstName').css('background-color', '#f79999');
      error = true;
      message += "姓を入力して下さい。 \n";
    }else{
      $('#firstName').css('background-color', '#fafafa');
    }

    if($('#lastName').val() == ""){
      $('#lastName').css('background-color', '#f79999');
      error = true;
      message += "名を入力して下さい。 \n";
    }else{
      $('#lastName').css('background-color', '#fafafa');
    }

    if($('#tel').val() =="" ||$('#tel').val().indexOf('-') == -1){
      $('#tel').css('background-color', '#f79999');
      error = true;
      message += '電話番号の入力または「-」を入れて下さい \n';
    }else{
      $('#tel').css('background-color', '#fafafa');
    }

    if($('#email').val() == "" || $('#email').val().indexOf('@') == -1 || $('#email').val().indexOf('.') == -1 ){
      $('#email').css('background-color', '#f79999');
      error = true;
      message += "メールアドレスの入力またはメールアドレス内には「＠」「.」を用いて下さい。 \n"
    }else{
      $('#email').css('background-color', '#fafafa');
    }

    if($('#password').val() == ""){
      $('#password').css('background-color', '#f79999');
      error = true;
      message += "パスワードを入力して下さい。 \n";
    }else{
      $('#password').css('background-color', '#fafafa');
    }

    if($('#birthday').val() == ""){
      $('#birthday').css('background-color', '#f79999')
      error = true;
      message += "生年月日を選択して下さい。 \n";
    }else{
      $('#birthday').css('background-color', '#fafafa');
    }

    if($('#check').prop('checked') == false){
      error = true;
      message += "個人情報の取り扱いに同意していただける場合はチェックボックにチェックして下さい。";
    }

    if(error == true){
      $('.submit').attr('src', 'images/button-submit.png');
    }else{
      $('.submit').attr('src', 'images/button-submit-blue.png');
    }

    result = {
      error: error,
      message: message
    }

    // 戻り値としてエラーがあるかどうかを返す
    return result;


  }
  





});