
// make sure that our global object "MYAPP" exists
window.MYAPP = window.MYAPP || {}

;(function () {
  // TODO: code for the header goes here

  // NOTE: this "foo" is trapped inside the anonymous function that wraps this entire file
  // it has no relation to any of the other "foo" functions
  const $ = window.jQuery
  function initQuote () {
    console.log('loading quote api')
    $(document).ready(function () {
      $.ajaxSetup({ cache: false })

      $.getJSON('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&callback=', function (data) {
        $('.quote').html(data[0].content + ' - ' + data[0].title)
      })
    })
  }

  // export the initHeader function so it may be called outside of this module
  window.MYAPP.initQuote = initQuote
})()
