var controller;
$(function() {
    controller = new ScrollMagic.Controller();
    //untuk pin letter
    var FadeIn1 = new ScrollMagic.Scene({triggerElement: '#pinning-letter-1',triggerHook: 0.7,duration: '300%',})
                                        .on("enter",(e)=>{
                                            $('#img-letter-1').fadeIn('slow')
                                        })
                                        .on("leave",(e)=>{
                                            $('#img-letter-1').fadeOut('slow')
                                        })
                                        //.addIndicators()
                                        .addTo(controller)

    var Pinning = new ScrollMagic.Scene({triggerElement: '#pinning-letter-1',triggerHook: 'onLeave',duration: '200%',})
                                        .setPin('#pinning-letter-1', {pushFollowers: false})
                                        //.addIndicators()
                                        .addTo(controller)

    var Images1 = new ScrollMagic.Scene({triggerElement: '#letter-1',triggerHook: 0.5,duration: '100%',})
                                        .on("enter",(e)=>{
                                            changeImg('img-letter-1','images/SBY 1.png')
                                        })
                                        //.addIndicators()
                                        .addTo(controller)

    var Images2 = new ScrollMagic.Scene({triggerElement: '#letter-2',triggerHook: 0.5,duration: '100%',})
                                        .on("enter",(e)=>{
                                            changeImg('img-letter-1','images/SBY 2.png')
                                        })
                                        //.addIndicators()
                                        .addTo(controller)
    var FadeIn1 = new ScrollMagic.Scene({triggerElement: '#pinning-letter-2',triggerHook: 0.7,duration: '300%',})
                                        .on("enter",(e)=>{
                                            $('#img-letter-2').fadeIn('slow')
                                        })
                                        .on("leave",(e)=>{
                                            $('#img-letter-2').fadeOut('slow')
                                        })
                                        //.addIndicators()
                                        .addTo(controller)

    var Pinning = new ScrollMagic.Scene({triggerElement: '#pinning-letter-2',triggerHook: 'onLeave',duration: '200%',})
                                        .setPin('#pinning-letter-2', {pushFollowers: false})
                                        //.addIndicators()
                                        .addTo(controller)

    var Images1 = new ScrollMagic.Scene({triggerElement: '#letter-3',triggerHook: 0.5,duration: '100%',})
                                        .on("enter",(e)=>{
                                            changeImg('img-letter-2','images/Jokowi 3.png')
                                        })
                                        //.addIndicators()
                                        .addTo(controller)

    var Images2 = new ScrollMagic.Scene({triggerElement: '#letter-4',triggerHook: 0.5,duration: '100%',})
                                        .on("enter",(e)=>{
                                            changeImg('img-letter-2','images/Jokowi 4.png')
                                        })
                                        //.addIndicators()
                                        .addTo(controller)
    if ($(window).width() >= 551) {
    var FadeIn3 = new ScrollMagic.Scene({triggerElement: '#right-content-trigger',triggerHook: 0.5,duration: '50%',})
                                        .on("enter",(e)=>{
                                            $('.right-content').fadeIn('slow')
                                        })
                                        .on("leave",(e)=>{
                                            $('.right-content').fadeOut('slow')
                                            $('.right-content').attr('class','right-content hide');
                                        })
                                        // .addIndicators()
                                        .addTo(controller)
    }
})
function changeImg(id,img) {
    $('#'+id).attr('src',img)
}
function showWordCloud(e) {
    var id  =  $(e).data('attribute')
    $('.word').css('fill','#000')
    $(e).css('fill','#a39a8d')
    $('.word-cloud-content').hide()
    $('#'+id).show()
    $('.right-content').attr('class','right-content visible');
}

function closeWordCloud() {
    $('.word').css('fill','#000')
    $('.right-content').attr('class','right-content hide');
    $('.word-cloud-content').hide()
}
