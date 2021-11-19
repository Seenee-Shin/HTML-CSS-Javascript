$('.content').hide()

$(".tab").on('click',function(){
  $('.tab').removeClass('tab-click')
  $(this).addClass('tab-click')

  $('.content').hide()
  $('.content').eq($(this).index()).show()
})

