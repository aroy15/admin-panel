$(document).ready(function(){
 // Sidebar show hide
 $("#menuBar").click(function(){
   $(this).toggleClass('active');
    $("#sidebarNav").toggleClass("nav-active");
    // $("#settingsList").addClass('opacity-h-0');
    // $("#navAccordion").removeClass('opacity-h-0');
    $("#mainItem").toggleClass("main_item-active");
  });
  // Settings list show hide
  $("#settings-icon").click(function(){
    $("#navAccordion").addClass('opacity-h-0');
    $("#settingsList").removeClass('opacity-h-0');
    $("#settings-icon img").addClass('active');
  });
  $("#settingBack").click(function(){
    $("#navAccordion").removeClass('opacity-h-0');
    $("#settingsList").addClass('opacity-h-0');
    $("#settings-icon img").removeClass('active');
  });
 // preloader jquery plugin active
  if($('body').find('.preloader-js').length){
    $('.preloader-js').preloadinator({
      minTime: 600
    });
    setTimeout(function(){ $('.preloader-js').addClass('d-none'); }, 700);
  }
  // Logout Icons looping animation
  $('.logout-icon').click(function(){
    $('.lgt_icons').attr('src','./resources/img/icons/loop.png');
    $('.lgt_icons').addClass('looping');  
    setTimeout(function(){ 
      $('.lgt_icons').attr('src','./resources/img/icons/logout.png');
      $('.lgt_icons').removeClass('looping');   
    }, 2000);
  });

  // $('.preloader-js').delay(500).queue('fx', function() { $(this).addClass('d-none'); });
  // setTimeout(function(){ $('.preloader-js').addClass('display-none'); }, 800);
  // body header text hide show
  $('#iIcon').click(function(){
    $('.bheadertext').slideToggle();
  });
  // multiple global information icon in a page
  $('.image-info').click(function(){
    $('.info-details').slideToggle();
  });
  // upload media center show hide
  $("#build-media-center-tab").click(function(){
    $("#uploadImagebtn").removeClass("d-none");
  });
  $("#build-pixabay-tab").click(function(){
    $("#uploadImagebtn").addClass("d-none");
  });
  $("#build-preview-tab").click(function(){
    $("#uploadImagebtn").addClass("d-none");
  });
  // dismiss anything this is global
  $('.dismiss-click-js').click(function(){
    $(this).parents('.dismiss-container-js').fadeOut(500, function(){$(this).remove();}); 
  });
  // support ticket chat 
  // $(".msg-box").keypress(function(e){
  //   if (e.keyCode == 13 && !e.shiftKey){        
  //       e.preventDefault();
  //       //now call the code to submit your form
        
  //       return;
  //   }       
  // });

  /*======== Auto follow/Unfollow, Like, Comment three pages JS code======== */
  $('#afulcExpandBtn').click(function(){
    $('.afulc_rightarea').addClass('active');
    $('.afulc_leftarea').removeClass('active');
    $('.afulc_left_arrow').hide();
    $('#afulcCollapseBtn').show(1000);
    $('.afulc_content_inner').addClass('active');
    $('.afulc_le_sec').addClass('active');
  });
  $('#afulcCollapseBtn').click(function(){
    $('.afulc_rightarea').removeClass('active');
    $('.afulc_leftarea').addClass('active');
    $('.afulc_content_inner').removeClass('active');
    $(this).hide();
    $('.afulc_left_arrow').show();
    $('.afulc_le_sec').removeClass('active');
  });
  /*=====X=== End of Auto follow/Unfollow, Like, Comment three pages JS code====X==== */

  /* ======= Image Selected & Deleted======== */
   // Drop & drag Dropzone js
   if( $('body').find('#mediaDropZone').length) {
    $("#mediaDropZone").dropzone({ url: "/file/post" });
   }
  //  magnific-popup active
  if( $('body').find('.media-gallery-js').length) {
    $('.media-gallery-js').magnificPopup({
      type: 'image',
      delegate: 'a',
      gallery: {
        enabled: true
      }
    });
  }
  // count media image number & alert empty message
  $('*').click(function(){
    $('#mImgCount').text($(".media-gallery-js .img-check-container").length);
    if($(".media-gallery-js .img-check-container").length !== 0){
      $(".empty-msg").hide();
    }else{
      $(".empty-msg").show();
    }
  });

  if($(".media-gallery-js .img-check-container").length !== 0){
    $(".empty-msg").hide();
  }else{
    $(".empty-msg").show();
  }

  $('.d-icon').click(function(){ 
    $('.img-checkbox').attr("type", 'checkbox');
      $('.d-icon').addClass('display-none');
      $('.d-icon-text').removeClass('display-none');
      // magnific-popup de-active
      $('.media-gallery-js').off('click');
      // attribute rename
      $('a.img-link[href]').each(function() {
        var $t = $(this);
        $t.attr({
          noHref: $t.attr('href')
          })
          .removeAttr('href');
      });
  });
  $('.d-icon-text').click(function(){ 
    $('.img-checkbox:checkbox:checked').parents('.img-check-container').fadeOut(500, function(){$(this).remove();}); 
      if($('.img-checkbox').prop("checked") == false){
        $('.d-icon-text').addClass('display-none');
        $('.d-icon').removeClass('display-none');

    }
    secondOne();
  });
  function secondOne() {      
    $('.img-checkbox').attr("type", 'text');
    // attribute rename
    $('a.img-link[noHref]').each(function() {
      var $t = $(this);
      $t.attr({
          href: $t.attr('noHref')
        })
        .removeAttr('noHref');
    });
    // magnific-popup active
    $('.media-gallery-js').magnificPopup({
      type: 'image',
      delegate: 'a',
      gallery: {
        enabled: true
      }
    });
  } 
});

/*======= Fullscreen icon function =======*/
$(function() {    
  // $(".fullscreen-supported").toggle($(document).fullScreen() != null);
  // $(".fullscreen-not-supported").toggle($(document).fullScreen() == null);  
  $(document).bind("fullscreenchange", function(e) {
     console.log("Full screen changed.");
     $(".full-screen-wrap .top-left").toggleClass('animMoveRight');
     $(".full-screen-wrap .top-left-horiz").toggleClass('animMoveDown');
     $(".full-screen-wrap .top-right").toggleClass('animMoveLeft');
     $(".full-screen-wrap .top-right-horiz").toggleClass('animMoveDown');
     $(".full-screen-wrap .bottom-left").toggleClass('animMoveRight');
     $(".full-screen-wrap .bottom-left-horiz").toggleClass('animMoveUp');
     $(".full-screen-wrap .bottom-right").toggleClass('animMoveLeft');
     $(".full-screen-wrap .bottom-right-horiz").toggleClass('animMoveUp');
     //text($(document).fullScreen() ? "Full screen enabled" : "Full screen disabled");
  });  
  $(document).bind("fullscreenerror", function(e) {
     console.log("Full screen error.");
    //  $("#status").text("Browser won't enter full screen mode for some reason.");
  });  
});
/*===X=== End of Fullscreen icon function ====X==*/

//affiliate link copy
function copyLinkFun() {
  var copyText = document.getElementById("affiliateLink");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  
  var tooltip = document.getElementById("linkToolTip");
  tooltip.innerHTML = "Copied !";
  $("#linkToolTip").removeClass('dismiss-w-h');
}

function outCopyFun() {
  var tooltip = document.getElementById("linkToolTip");
  tooltip.innerHTML = "";
  $("#linkToolTip").addClass('dismiss-w-h');
}
//Social Statistic Your page link copy
function copyPageLink() {
  var copyText = document.getElementById("yourPageLink");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  
  var tooltip = document.getElementById("yourPageText");
  tooltip.innerHTML = "Copied !";
  $("#yourPageText").removeClass('dismiss-w-h');
}

function outPageLink() {
  var tooltip = document.getElementById("yourPageText");
  tooltip.innerHTML = "";
  $("#yourPageText").addClass('dismiss-w-h');
}

// var active_sub_menu = $('li.show-more ul li').find('.selected');
if( $('body').find('#color1').length) {
//  // color mobileFrame for background changer
var cl1  = document.getElementById("color1");
  cl1.style.background = cl1.innerHTML;
var cl2  = document.getElementById("color2");
  cl2.style.background = cl2.innerHTML;
var cl3  = document.getElementById("color3");
  cl3.style.background = cl3.innerHTML;
var cl4  = document.getElementById("color4");
  cl4.style.background = cl4.innerHTML;
var cl5  = document.getElementById("color5");
  cl5.style.background = cl5.innerHTML;
var cl6  = document.getElementById("color6");
  cl6.style.background = cl6.innerHTML;
}
function clr1(){
  var bgcolor = document.getElementById("color1").innerHTML;
    document.getElementById("mobileFrame").style.background = bgcolor;
}
function clr2(){
  var bgcolor = document.getElementById("color2").innerHTML;
    document.getElementById("mobileFrame").style.background = bgcolor;
}
function clr3(){
  var bgcolor = document.getElementById("color3").innerHTML;
    document.getElementById("mobileFrame").style.background = bgcolor;
}
function clr4(){
  var bgcolor = document.getElementById("color4").innerHTML;
    document.getElementById("mobileFrame").style.background = bgcolor;
}
function clr5(){
  var bgcolor = document.getElementById("color5").innerHTML;
    document.getElementById("mobileFrame").style.background = bgcolor;
} 
function clr6(){
  var bgcolor = document.getElementById("color6").innerHTML;
    document.getElementById("mobileFrame").style.background = bgcolor;
} 

$(".color-icon").click(function() {
  $(".color-icon").removeClass("active");
    $(this).addClass("active"); 
});
$(document).ready(function(){
  // Social Tab shortable with jQuery-UI
  if($('body').find('#socialTabList').length){
    $('#socialTabList').sortable({
      axis:"y"
    });
    $('#mobileFrameArea').perfectScrollbar();
  }  
 //social icon show hide by checkbox
 $('#socialShowHide').click(function(){
  if($(this).prop("checked") == false){
      $('.social-logo').fadeOut();
  }
  else if($(this).prop("checked") == true){
    $('.social-logo').fadeIn();
    }
  });
  // social button show hide
  $('#instagramMark').click(function(){
    if($(this).prop("checked") == false){
        $('.instagram').fadeOut();
    }
    else if($(this).prop("checked") == true){
      $('.instagram').fadeIn();
      }
    });
  $('#facebookMark').click(function(){
    if($(this).prop("checked") == false){
        $('.facebook').fadeOut();
    }
    else if($(this).prop("checked") == true){
      $('.facebook').fadeIn();
      }
    });
  $('#youtubeMark').click(function(){
    if($(this).prop("checked") == false){
        $('.youtube').fadeOut();
    }
    else if($(this).prop("checked") == true){
      $('.youtube').fadeIn();
      }
    });
    // border radius control for social button
  $('#switchBtn').click(function(){
    if($(this).prop("checked") == false){
        $('.social-btn').removeClass('b-r-10');
    }
    else if($(this).prop("checked") == true){
      $('.social-btn').addClass('b-r-10');
      }
  });
  // Switch box for social icon rounded active for collection page
 $('#social-settings-tab').click(function(){
  $('#switchRounded').addClass('dismiss-w-h');
  // $('.mobile-format').removeClass('mt-mobile-frame fade-in-custom-animation');
  $('.print-icon').addClass('d-none');
 });
  $('#social-collection-tab').click(function(){
			$('#switchRounded').removeClass('dismiss-w-h');
			// $('.mobile-format').removeClass('mt-mobile-frame fade-in-custom-animation');
			$('.print-icon').addClass('d-none');
  });
  $('#social-statistics-tab').click(function(){
			$('#switchRounded').addClass('dismiss-w-h');
			// $('.mobile-format').addClass('mt-mobile-frame fade-in-custom-animation');
			$('.print-icon').removeClass('d-none');
  });
  // Total Statistics One custom js without chart
  if( $('#totalStatisticsOne').find('.your-social-collections').length) {
    $('#openLink').attr('href', $('#linkInput').val());
  }

  // Total Statistics Percentage
  $(".progress-ts").each(function(){  
    var $bar = $(this).find(".bar");
    var $val = $(this).find(".percent-js");
    var perc = parseInt( $val.text(), 10);

    $({p:0}).animate({p:perc}, {
      duration: 3000,
      easing: "swing",
      step: function(p) {
        $bar.css({
          transform: "rotate("+ (45+(p*1.8)) +"deg)", // 100%=180° so: ° = % * 1.8
          // 45 is to add the needed rotation to have the green borders at the bottom
        });
        $val.text(p|0);
      }
    });
  });
  // End of Total Statistics Percentage 
  /*=====Owl Carousel Activation Start=======*/
  if($('body').find('.owl-carousel').length){
    // Campaign Carousel
    $(".campaign-carousel").owlCarousel({
      loop:false,
      margin:30,
      nav:true,
      navText:['<img src="resources/img/icons/left_arrow.png" alt="previous">','<img src="resources/img/icons/right_arrow.png" alt="next">'],
      responsive:{
          0:{
              items:1
          },
          991:{
              items:2
          },
          1200:{
            items:3
          }
      }
    });
  }    
  /*====X===End of Owl Carousel Activation ===X=====*/

  /*=======Form Validations start ========*/ 
  // Form Validation for New Support Submit---------
  if($('body').find('#tiktSubmit').length){
    $('#tiktSubmit').click(function(){
      // for Subject input
      var tiktSubLngth = $('#tiktSubj').val();
      var tiktMsgLength = $('#tiktMsg').val();
      if(tiktSubLngth == '' && tiktMsgLength == ''){
        $('#tiketSubError').html('please fill the subject');
        $('#tiktMsgError').html('please fill the messege');
        return false;
       }else if(tiktSubLngth == ''){
        $('#tiketSubError').html('please fill the subject');
        return false;
       }else if(tiktMsgLength == '' ){
        $('#tiktMsgError').html('please fill the messege');
        return false;
       }
      
      if(tiktSubLngth.length > 200){
        $('#tiketSubError').show();
        $('#tiketSubError').html('The subject should be within 200 characters');
        return false;
      }else{
        $('#tiketSubError').hide();
      }
      // for messege input      
      if(tiktMsgLength.length > 4000){
        $('#tiktMsgError').show();
        $('#tiktMsgError').html('The Messege should be within 4000 characters');
        return false;
      }else{
        $('#tiktMsgError').hide();
      }    
    });
  }
  //  Form Validation for Chat for support ticket Submit---------
   if($('body').find('#chatMsgSubmit').length){
    $('#chatMsgSubmit').click(function(){
      // for Subject input
      var chatTiktLngth = $('#chatSupportMsg').val();
      if(chatTiktLngth.length == ''){
        $('#chatMsgError').show();
        $('#chatMsgError').html('*Please fill the messege');
        return false;
      }
      if(chatTiktLngth.length > 1000){
        $('#chatMsgError').show();
        $('#chatMsgError').html('Messege should be within 1000 characters');
        return false;
      }else{
        $('#chatMsgError').hide();
      }
      
    });
  }
   // Form Validation for Add Caption Template---------
   if($('body').find('#addCapSubmit').length){
    $('#addCapSubmit').click(function(){
      // for Subject input
      var addCapSubLngth = $('#addCapSubj').val();
      var addCapMsgLength = $('#addCapMsg').val();
      if(addCapSubLngth == '' && addCapMsgLength == ''){
        $('#addCapSubjError').html('please fill the subject');
        $('#addCapMsgError').html('please fill the messege');
        return false;
       }else if(addCapSubLngth == ''){
        $('#addCapSubjError').html('please fill the subject');
        return false;
       }else if(addCapMsgLength == '' ){
        $('#addCapMsgError').html('please fill the messege');
        return false;
       }
      
      if(addCapSubLngth.length > 200){
        $('#addCapSubjError').show();
        $('#addCapSubjError').html('The subject should be within 200 characters');
        return false;
      }else{
        $('#addCapSubjError').hide();
      }
      // for messege input      
      if(addCapMsgLength.length > 4000){
        $('#addCapMsgError').show();
        $('#addCapMsgError').html('The Messege should be within 4000 characters');
        return false;
      }else{
        $('#addCapMsgError').hide();
      }    
    });
  }
  /*=====X==End Form Validations start =====X===*/

  /*=======Chat meseage image upload ========*/
  // for Support ticket 
  $('#fileUplodChat').on('change', function(){
    $('#filesData').empty();
    var fileUplodChat =  $('#fileUplodChat');
    var fileChatLengths = fileUplodChat[0].files.length;
    var fileChatItems = fileUplodChat[0].files;
    var frag = "";

    if(fileChatLengths > 0){
      for(var i = 0; i < fileChatLengths; i++){
        var fileUploadName = fileChatItems[i].name;
        frag += "<span>" + fileUploadName + ", </span>"
      }
      $('#filesData').append(frag);
    }
  });
  // for new support ticket
  $('#newSTikit').on('change', function(){
    $('#newSTikitData').empty();
    var newUplodChat =  $('#newSTikit');
    var newChatLengths = newUplodChat[0].files.length;
    var newChatItems = newUplodChat[0].files;
    var newfrag = "";

    if(newChatLengths > 0){
      for(var i = 0; i < newChatLengths; i++){
        var newUploadName = newChatItems[i].name;
        newfrag += "<span>" + newUploadName + ", </span>"
      }
      $('#newSTikitData').append(newfrag);
    }
  });
   // for Social Customize
   $('#imageUpload').on('change', function(){
    $('#sCustomizeUpData').empty();
    var scUplodimg =  $('#imageUpload');
    var scUploadLengths = scUplodimg[0].files.length;
    var scUploadItems = scUplodimg[0].files;
    var scOutputData = "";

    if(scUploadLengths > 0){
      for(var i = 0; i < scUploadLengths; i++){
        var scUploadName = scUploadItems[i].name;
        scOutputData += "<span>" + scUploadName + ", </span>"
      }
      $('#sCustomizeUpData').append(scOutputData);
    }
  });
  /*=====X==End Chat meseage image upload =====X===*/ 

});


/* ============== social statistics Chart.js S-Curve Code below=========  */
if( $('body').find('#myChart').length) {
  // Monthly values
  var monthLabel = ["Jan", "Feb", "Mar", "Apr", "May"];
  var monthDataOne = [22,15,75,70,85];
  var monthDataTwo = [30,32,25,80,50];
  // Yearly values
  var yearLabel = [2020,2021,2022,2023,2024];
  var yearDataOne = [10,15,50,65,90];
  var yearDataTwo = [50,77,52,65,70];
  // Weekly values
  var weekLabel = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var weekDataOne = [10,20,25,5,50,65,90];
  var weekDataTwo =  [50,20,35,7,52,65,70];
  // Daily values
  var dailyLabel = [01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
  var dailyDataOne = [10,20,25,5,50,65,90,10,20,25,5,50,65,90,10,20,25,5,50,65,90,10,20,25,5,50,65,90,55,30,42];
  var dailyDataTwo =  [25,5,50,65,90,10,20,55,5,25,75,50,65,90,23,20,25,5,25,40,50,65,90,10,20,44,77,90,34,56,85];
  // Chart js active for social statistics
  var ctx = document.getElementById('myChart').getContext('2d');
  // Gradient color One
  var gradientOne = ctx.createLinearGradient(0, 0, 0, 450);
  gradientOne.addColorStop(0, 'rgba(31, 120, 180, 0.5)');
  gradientOne.addColorStop(1, 'rgba(31, 120, 180, 0)');
  // Gradient Color Two
  var gradientTwo = ctx.createLinearGradient(0, 0, 0, 450);
  gradientTwo.addColorStop(0, 'rgba(232, 212, 32, 0.5)');
  gradientTwo.addColorStop(1, 'rgba(232, 212, 32, 0)');

  var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'line',
      // The data for our dataset
      data: {
        labels:monthLabel,
          datasets: [{
              label: 'My First dataset',
              borderColor: 'rgb(31, 120, 180)',
              pointBackgroundColor: 'rgb(31, 120, 180)',
              backgroundColor:gradientOne,
              data:monthDataOne
          },
          {
            label: 'My First dataset',
            borderColor: 'rgb(232, 212, 32)',
                      pointBackgroundColor: 'rgb(232, 212, 32)',
                      backgroundColor:gradientTwo,
                      data:monthDataTwo
          }
        ]
      },
      // Configuration options go here
      options: {
        scales: {
          xAxes: [{
            gridLines: {
              display:false,
              drawBorder:true,
            }
          }],
          yAxes: [{
            ticks:{
              min: 0,
              stepSize: 10,
            },
            gridLines: {
              display:false,
              drawBorder:true,
            }
          }]
        },
        legend: {
          display: false
        },
      }
  });

    $( "select#socialUpdateChart" )
    .change(function() {
      // Monthly
      $( "select option#monthlyS:selected" ).each(function() {
        chart.data.labels = monthLabel;
        chart.data.datasets[0].data = monthDataOne;
        chart.data.datasets[1].data = monthDataTwo;
        chart.update();
      });
      // yearly
      $( "select option#yearlyS:selected" ).each(function() {
        chart.data.labels = yearLabel;
        chart.data.datasets[0].data = yearDataOne;
        chart.data.datasets[1].data = yearDataTwo;
        chart.update();
      });
      // weekly
      $( "select option#weeklyS:selected" ).each(function() {
        chart.data.labels = weekLabel;
        chart.data.datasets[0].data = weekDataOne;
        chart.data.datasets[1].data = weekDataTwo;
        chart.update();
      });
      // Daily
      $( "select option#dailyS:selected" ).each(function() {
        chart.data.labels = dailyLabel;
        chart.data.datasets[0].data = dailyDataOne;
        chart.data.datasets[1].data = dailyDataTwo;
        chart.update();
      });
    })
    .trigger( "change" );
}
/* =======X======= End of Chart.js social statistics S-Curve ====X=====  */

/* ============== Total Statistics code started Chart.js =========  */
if( $('body').find('#totalStatistics').length) {
  /* ====== This codes for bar chart border radius========= */
  var randomScalingFactor = function() {
    return (Math.random() > 0.5 ? 1.0 : 1) * Math.round(Math.random() * 100);
  };
  
  // draws a rectangle with a rounded top
  Chart.helpers.drawRoundedTopRectangle = function(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    // top right corner
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    // bottom right	corner
    ctx.lineTo(x + width, y + height);
    // bottom left corner
    ctx.lineTo(x, y + height);
    // top left	
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
  };
  
  Chart.elements.RoundedTopRectangle = Chart.elements.Rectangle.extend({
    draw: function() {
      var ctx = this._chart.ctx;
      var vm = this._view;
      var left, right, top, bottom, signX, signY, borderSkipped;
      var borderWidth = vm.borderWidth;
  
      if (!vm.horizontal) {
        // bar
        left = vm.x - vm.width / 2;
        right = vm.x + vm.width / 2;
        top = vm.y;
        bottom = vm.base;
        signX = 1;
        signY = bottom > top? 1: -1;
        borderSkipped = vm.borderSkipped || 'bottom';
      } else {
        // horizontal bar
        left = vm.base;
        right = vm.x;
        top = vm.y - vm.height / 2;
        bottom = vm.y + vm.height / 2;
        signX = right > left? 1: -1;
        signY = 1;
        borderSkipped = vm.borderSkipped || 'left';
      }
  
      // Canvas doesn't allow us to stroke inside the width so we can
      // adjust the sizes to fit if we're setting a stroke on the line
      if (borderWidth) {
        // borderWidth shold be less than bar width and bar height.
        var barSize = Math.min(Math.abs(left - right), Math.abs(top - bottom));
        borderWidth = borderWidth > barSize? barSize: borderWidth;
        var halfStroke = borderWidth / 2;
        // Adjust borderWidth when bar top position is near vm.base(zero).
        var borderLeft = left + (borderSkipped !== 'left'? halfStroke * signX: 0);
        var borderRight = right + (borderSkipped !== 'right'? -halfStroke * signX: 0);
        var borderTop = top + (borderSkipped !== 'top'? halfStroke * signY: 0);
        var borderBottom = bottom + (borderSkipped !== 'bottom'? -halfStroke * signY: 0);
        // not become a vertical line?
        if (borderLeft !== borderRight) {
          top = borderTop;
          bottom = borderBottom;
        }
        // not become a horizontal line?
        if (borderTop !== borderBottom) {
          left = borderLeft;
          right = borderRight;
        }
      }
  
      // calculate the bar width and roundess
      var barWidth = Math.abs(left - right);
      var roundness = this._chart.config.options.barRoundness || 0.5;
      var radius = barWidth * roundness * 0.1;//This is border radius borderRadius
      
      // keep track of the original top of the bar
      var prevTop = top;
      
      // move the top down so there is room to draw the rounded top
      top = prevTop + radius;
      var barRadius = top - prevTop;
  
      ctx.beginPath();
      ctx.fillStyle = vm.backgroundColor;
      ctx.strokeStyle = vm.borderColor;
      ctx.lineWidth = borderWidth;
  
      // draw the rounded top rectangle
      Chart.helpers.drawRoundedTopRectangle(ctx, left, (top - barRadius + 1), barWidth, bottom - prevTop, barRadius);
  
      ctx.fill();
      if (borderWidth) {
        ctx.stroke();
      }
  
      // restore the original top value so tooltips and scales still work
      top = prevTop;
    },
  });
  
  Chart.defaults.roundedBar = Chart.helpers.clone(Chart.defaults.bar);
  
  Chart.controllers.roundedBar = Chart.controllers.bar.extend({
    dataElementType: Chart.elements.RoundedTopRectangle
  });
  /* ===X====Ends of Bar chart Border Radius===X==== */
  /*------------yAxis Number suffix like 1000 = 1k 1000000 = 1M-------- */
  var numberSuffixK = function(value) {
    var ranges = [
      { divider: 1e6, suffix: 'M' },
      { divider: 1e3, suffix: 'k' }
    ];
    function formatNumber(n) {
      for (var i = 0; i < ranges.length; i++) {
          if (n >= ranges[i].divider) {
            return (n / ranges[i].divider).toString() + ranges[i].suffix;
          }
      }
      return n;
    }
    return formatNumber(value);
  }
  /*--X--- end of suffix 1000 = 1k ---X-- */
  
  /*-------===Total Statistics One 1st bar chart====------ */
  if( $('#totalStatistics').find('#tStatisticOneOne').length) {
    // Monthly values
    var monthLabel_TsOneOne = ["Jan", "Feb", "Mar", "Apr", "May", "June"];
    var monthDataOne_TsOneOne = [400, 2800, 4500,1000,500,3400];
    var monthDataTwo_TsOneOne = [2200, 3000, 2000, 1000,3800,2000];
    // Yearly values
    var yearLabel_TsOneOne = [2020,2021,2022,2023,2024,2025];
    var yearDataOne_TsOneOne = [1000,1500,5000,6500,9000,3000];
    var yearDataTwo_TsOneOne = [5000,7700,5200,6500,7000,2000];
    // Weekly values
    var weekLabel_TsOneOne = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var weekDataOne_TsOneOne = [1000,2000,2500,2300,5000,1300,1500];
    var weekDataTwo_TsOneOne =  [1100,4200,3500,2400,1700,900,300];
    // Daily values
    var dailyLabel_TsOneOne = [01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
    var dailyDataOne_TsOneOne = [100,200,250,50,500,650,900,100,200,250,50,500,650,900,100,200,250,50,500,650,900,100,200,250,50,500,650,900,550,300,420];
    var dailyDataTwo_TsOneOne =  [250,50,500,650,900,100,200,550,50,250,750,500,650,900,230,200,250,50,250,400,500,650,900,100,200,440,770,900,340,560,850];
    // Step Size yAxis
    var stepSizeMonthly_TsOneOne = 1000;
    var stepSizeYearly_TsOneOne = 1000;
    var stepSizeWeekly_TsOneOne = 500;
    var stepSizeDaily_TsOneOne = 100;
    // Connect with canvas ID
    var ctxTsOneOne = document.getElementById("tStatisticOneOne").getContext('2d');
    var dataTsOne = {
        labels: monthLabel_TsOneOne,
        datasets: [{
            label: "My First dataset",
            fillColor: "#560620",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "#560620",
            highlightStroke: "rgba(220,220,220,1)",
            backgroundColor:'#4A90E2',
            data: monthDataOne_TsOneOne
        },
        {
          label: "My First dataset",
          fillColor: "#560620",
          strokeColor: "rgba(220,220,220,0.8)",
          highlightFill: "#560620",
          highlightStroke: "rgba(220,220,220,1)",
          backgroundColor:'#4A90E2',
          data: monthDataTwo_TsOneOne
        }
      ]
    };
    var chart_TsOneOne = new Chart(ctxTsOneOne, {
        type: 'roundedBar',
        data: dataTsOne,
        options: {
            barRoundness: 1,
            scales: {
              xAxes: [{
                categoryPercentage: 1,
                barPercentage: 0.7,
                gridLines: {
                  display: false,
                  drawBorder: true
                }
              }],
              yAxes: [{
                ticks: {
                  stepSize: stepSizeMonthly_TsOneOne,
                  callback: numberSuffixK
                },
                gridLines: {
                  display: false,
                  drawBorder: true
                }
            }]
            },
            legend: {
              display:false
            }
        }
    });
   
    $( "select#totalStatisticsOneSelect" )
    .change(function() {
      // Monthly
      $( "select option#monthlyTsOneOne:selected" ).each(function() {
        chart_TsOneOne.data.labels = monthLabel_TsOneOne;
        chart_TsOneOne.data.datasets[0].data = monthDataOne_TsOneOne;
        chart_TsOneOne.data.datasets[1].data = monthDataTwo_TsOneOne;
        chart_TsOneOne.options.scales.yAxes[0].ticks.stepSize = stepSizeMonthly_TsOneOne;        
        chart_TsOneOne.update();      
      });
    
      // yearly
      $( "select option#yearlyTsOneOne:selected" ).each(function() {
        chart_TsOneOne.data.labels = yearLabel_TsOneOne;
        chart_TsOneOne.data.datasets[0].data = yearDataOne_TsOneOne;
        chart_TsOneOne.data.datasets[1].data = yearDataTwo_TsOneOne;
        chart_TsOneOne.options.scales.yAxes[0].ticks.stepSize = stepSizeYearly_TsOneOne;
        chart_TsOneOne.update();
      });
      // weekly
      $( "select option#weeklyTsOneOne:selected" ).each(function() {
        chart_TsOneOne.data.labels = weekLabel_TsOneOne;
        chart_TsOneOne.data.datasets[0].data = weekDataOne_TsOneOne;
        chart_TsOneOne.data.datasets[1].data = weekDataTwo_TsOneOne;
        chart_TsOneOne.options.scales.yAxes[0].ticks.stepSize = stepSizeWeekly_TsOneOne;
        chart_TsOneOne.update();
      });
      // Daily
      $( "select option#dailyTsOneOne:selected" ).each(function() {
        chart_TsOneOne.data.labels = dailyLabel_TsOneOne;
        chart_TsOneOne.data.datasets[0].data = dailyDataOne_TsOneOne;
        chart_TsOneOne.data.datasets[1].data = dailyDataTwo_TsOneOne;
        chart_TsOneOne.options.scales.yAxes[0].ticks.stepSize = stepSizeDaily_TsOneOne;
        chart_TsOneOne.update();
      });
    })
    .trigger( "change" );
  }
  /*-----X--===End of Total Staristics One 1st bar chart===---X--- */
  /*-------===Total Statistics One 2nd Bar chart====------ */
  if( $('#totalStatistics').find('#tStatisticOneTwo').length) {
    // Weekly values
    var weekLabel_TsOneTwo = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var weekData_TsOneTwo = [310,410,250,320,300, 260,330];
    // Connect with canvas ID
    var ctxTsOneTwo = document.getElementById("tStatisticOneTwo").getContext('2d');
    var dataTsOneTwo = {
        labels: weekLabel_TsOneTwo,
        datasets: [{
            label: "My First dataset",
            fillColor: "#560620",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "#560620",
            highlightStroke: "rgba(220,220,220,1)",
            backgroundColor:'#6172E2',
            data: weekData_TsOneTwo
        }
      ]
    };
    var chartTsOneTwo = new Chart(ctxTsOneTwo, {
        type: 'roundedBar',
        data: dataTsOneTwo,
        options: {
            barRoundness: 1,
            scales: {
              xAxes: [{
                categoryPercentage: 1,
                barPercentage: 0.7,
                gridLines: {
                  display: false,
                  drawBorder: true
                }
              }],
              yAxes: [{
                ticks: {
                  beginAtZero: true,
                  min: 0,
                  stepSize: 100,
                  callback: numberSuffixK
                },
                gridLines: {
                  display: false,
                  drawBorder: true
                }
            }]
            },
            legend: {
              display:false
            }
        }
    });   
  }
  /*-----X--===End of Total Staristics One 2nd bar chart===---X--- */
  /*-------===Total Statistics Two 1st bar chart====------ */
  if( $('#totalStatistics').find('#tStatisticTwoOne').length) {
    // Monthly values
    var monthLabel_TsTwoOne = ["Jan", "Feb", "Mar", "Apr", "May", "June"];
    var monthDataOne_TsTwoOne = [400, 2800, 4500,1000,500,3400];
    var monthDataTwo_TsTwoOne = [2200, 3000, 2000, 1000,3800,2000];
    // Yearly values
    var yearLabel_TsTwoOne = [2020,2021,2022,2023,2024,2025];
    var yearDataOne_TsTwoOne = [1000,1500,5000,6500,9000,3000];
    var yearDataTwo_TsTwoOne = [5000,7700,5200,6500,7000,2000];
    // Weekly values
    var weekLabel_TsTwoOne = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var weekDataOne_TsTwoOne = [1000,2000,2500,2300,5000,1300,1500];
    var weekDataTwo_TsTwoOne =  [1100,4200,3500,2400,1700,900,300];
    // Daily values
    var dailyLabel_TsTwoOne = [01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
    var dailyDataOne_TsTwoOne = [100,200,250,50,500,650,900,100,200,250,50,500,650,900,100,200,250,50,500,650,900,100,200,250,50,500,650,900,550,300,420];
    var dailyDataTwo_TsTwoOne =  [250,50,500,650,900,100,200,550,50,250,750,500,650,900,230,200,250,50,250,400,500,650,1900,100,200,440,770,900,340,560,850];
    // Step Size yAxis
    var stepSizeMonthly_TsTwoOne = 1000;
    var stepSizeYearly_TsTwoOne = 1000;
    var stepSizeWeekly_TsTwoOne = 500;
    var stepSizeDaily_TsTwoOne = 100;
    // Connect with canvas ID
    var ctxTsTwoOne = document.getElementById("tStatisticTwoOne").getContext('2d');
    var dataTsTwoOne = {
        labels: monthLabel_TsTwoOne,
        datasets: [{
            label: "My First dataset",
            fillColor: "#560620",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "#560620",
            highlightStroke: "rgba(220,220,220,1)",
            backgroundColor:'#4A90E2',
            data: monthDataOne_TsTwoOne
        },
        {
          label: "My First dataset",
          fillColor: "#560620",
          strokeColor: "rgba(220,220,220,0.8)",
          highlightFill: "#560620",
          highlightStroke: "rgba(220,220,220,1)",
          backgroundColor:'#4A90E2',
          data: monthDataTwo_TsTwoOne
        }
      ]
    };
    var chartTsTwoOne = new Chart(ctxTsTwoOne, {
        type: 'roundedBar',
        data: dataTsTwoOne,
        options: {
            barRoundness: 1,
            scales: {
              xAxes: [{
                categoryPercentage: 1,
                barPercentage: 0.7,
                gridLines: {
                  display: false,
                  drawBorder: true
                }
              }],
              yAxes: [{
                ticks: {
                  stepSize: stepSizeMonthly_TsTwoOne,
                  callback: numberSuffixK
                },
                gridLines: {
                  display: false,
                  drawBorder: true
                }
            }]
            },
            legend: {
              display:false
            }
        }
    });
    
    $( "select#totalStatisticsTwoOneSelect" )
    .change(function() {
      // Monthly
      $( "select option#monthlyTsTwoOne:selected" ).each(function() {
        chartTsTwoOne.data.labels = monthLabel_TsTwoOne;
        chartTsTwoOne.data.datasets[0].data = monthDataOne_TsTwoOne;
        chartTsTwoOne.data.datasets[1].data = monthDataTwo_TsTwoOne;
        chartTsTwoOne.options.scales.yAxes[0].ticks.stepSize = stepSizeMonthly_TsTwoOne;        
        chartTsTwoOne.update();      
      });
    
      // yearly
      $( "select option#yearlyTsTwoOne:selected" ).each(function() {
        chartTsTwoOne.data.labels = yearLabel_TsTwoOne;
        chartTsTwoOne.data.datasets[0].data = yearDataOne_TsTwoOne;
        chartTsTwoOne.data.datasets[1].data = yearDataTwo_TsTwoOne;
        chartTsTwoOne.options.scales.yAxes[0].ticks.stepSize = stepSizeYearly_TsTwoOne;
        chartTsTwoOne.update();
      });
      // weekly
      $( "select option#weeklyTsTwoOne:selected" ).each(function() {
        chartTsTwoOne.data.labels = weekLabel_TsTwoOne;
        chartTsTwoOne.data.datasets[0].data = weekDataOne_TsTwoOne;
        chartTsTwoOne.data.datasets[1].data = weekDataTwo_TsTwoOne;
        chartTsTwoOne.options.scales.yAxes[0].ticks.stepSize = stepSizeWeekly_TsTwoOne;
        chartTsTwoOne.update();
      });
      // Daily
      $( "select option#dailyTsTwoOne:selected" ).each(function() {
        chartTsTwoOne.data.labels = dailyLabel_TsTwoOne;
        chartTsTwoOne.data.datasets[0].data = dailyDataOne_TsTwoOne;
        chartTsTwoOne.data.datasets[1].data = dailyDataTwo_TsTwoOne;
        chartTsTwoOne.options.scales.yAxes[0].ticks.stepSize = stepSizeDaily_TsTwoOne;
        chartTsTwoOne.update();
      });
    })
    .trigger( "change" );
  }
  /*-----X--===End of Total Statistics Two 1st bar chart===---X--- */
  /*-------===Total Statistics Two Line chart====------ */
  if( $('#totalStatistics').find('#tStatisticTwoTwo').length) {
    // Monthly values
    var monthLabel_TsTwoTwo = ["Jan", "Feb", "Mar", "Apr", "May"];
    var monthDataOne_TsTwoTwo = [0, 65, 60,80,35];
    var monthDataTwo_TsTwoTwo = [52, 30, 90, 22,75];
    // Yearly values
    var yearLabel_TsTwoTwo = [2020,2021,2022,2023,2024,2025];
    var yearDataOne_TsTwoTwo = [1000,1500,5000,6500,9000,3000];
    var yearDataTwo_TsTwoTwo = [5000,7700,5200,6500,7000,2000];
    // Weekly values
    var weekLabel_TsTwoTwo = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var weekDataOne_TsTwoTwo = [15,8,25,23,50,13,15];
    var weekDataTwo_TsTwoTwo =  [5,42,35,24,17,9,30];
    // Daily values
    var dailyLabel_TsTwoTwo = [01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
    var dailyDataOne_TsTwoTwo = [10,20,15,50,45,65,90,10,75,25,53,91,32,45,43,20,83,50,49,67,82,64,71,38,29,86,23,58,55,30,42];
    var dailyDataTwo_TsTwoTwo = [20,10,35,20,35,45,70,30,65,35,93,81,22,35,33,10,73,80,39,57,72,54,61,28,79,76,43,48,45,20,32];
    // Step Size yAxis
    var stepSizeMonthly_TsTwoTwo = 20;
    var stepSizeYearly_TsTwoTwo = 1000;
    var stepSizeWeekly_TsTwoTwo = 20;
    var stepSizeDaily_TsTwoTwo = 10;
    // Connect with canvas ID
    var ctxTsTwoTwo = document.getElementById("tStatisticTwoTwo").getContext('2d');
    var dataTsTwoTwo = {
        labels: monthLabel_TsTwoTwo,
        datasets: [{
            label: "My First dataset",
            borderColor: 'rgb(165, 173, 226)',
            pointBackgroundColor: "rgb(165, 173, 226)",
            backgroundColor:'transparent',
            data: monthDataOne_TsTwoTwo
        },
        {
          label: "My First dataset",
          
          borderColor: 'rgb(232, 212, 32)',
          pointBackgroundColor: 'rgb(232, 212, 32)',
          backgroundColor:'transparent',
          data: monthDataTwo_TsTwoTwo
        }
      ]
    };
    var chartTsTwoTwo = new Chart(ctxTsTwoTwo, {
        type: 'line',
        data: dataTsTwoTwo,
        options: {
            scales: {
              xAxes: [{
                gridLines: {
                  display: true,
                  drawBorder: true,
                  // offsetGridLines: true
                }
              }],
              yAxes: [{
                ticks: {
                  stepSize: stepSizeMonthly_TsTwoTwo,
                  callback: numberSuffixK,
                  min:0
                },
                gridLines: {
                  display: true,
                  drawBorder: true
                }
            }]
            },
            legend: {
              display:false
            }
        }
    });
    
    $( "select#totalStatisticsTwoTwoSelect" )
    .change(function() {
      // Monthly
      $( "select option#monthlyTsTwoTwo:selected" ).each(function() {
        chartTsTwoTwo.data.labels = monthLabel_TsTwoTwo;
        chartTsTwoTwo.data.datasets[0].data = monthDataOne_TsTwoTwo;
        chartTsTwoTwo.data.datasets[1].data = monthDataTwo_TsTwoTwo;
        chartTsTwoTwo.options.scales.yAxes[0].ticks.stepSize = stepSizeMonthly_TsTwoTwo;        
        chartTsTwoTwo.update();      
      });
    
      // yearly
      $( "select option#yearlyTsTwoTwo:selected" ).each(function() {
        chartTsTwoTwo.data.labels = yearLabel_TsTwoTwo;
        chartTsTwoTwo.data.datasets[0].data = yearDataOne_TsTwoTwo;
        chartTsTwoTwo.data.datasets[1].data = yearDataTwo_TsTwoTwo;
        chartTsTwoTwo.options.scales.yAxes[0].ticks.stepSize = stepSizeYearly_TsTwoTwo;
        chartTsTwoTwo.update();
      });
      // weekly
      $( "select option#weeklyTsTwoTwo:selected" ).each(function() {
        chartTsTwoTwo.data.labels = weekLabel_TsTwoTwo;
        chartTsTwoTwo.data.datasets[0].data = weekDataOne_TsTwoTwo;
        chartTsTwoTwo.data.datasets[1].data = weekDataTwo_TsTwoTwo;
        chartTsTwoTwo.options.scales.yAxes[0].ticks.stepSize = stepSizeWeekly_TsTwoTwo;
        chartTsTwoTwo.update();
      });
      // Daily
      $( "select option#dailyTsTwoTwo:selected" ).each(function() {
        chartTsTwoTwo.data.labels = dailyLabel_TsTwoTwo;
        chartTsTwoTwo.data.datasets[0].data = dailyDataOne_TsTwoTwo;
        chartTsTwoTwo.data.datasets[1].data = dailyDataTwo_TsTwoTwo;
        chartTsTwoTwo.options.scales.yAxes[0].ticks.stepSize = stepSizeDaily_TsTwoTwo;
        chartTsTwoTwo.update();
      });
    })
    .trigger( "change" );
  }
  /*-----X--===End of Total Statistics Two Line chart===---X--- */
}
/* =======X======= End of Total Statistics code started Chart.js ====X=====  */
