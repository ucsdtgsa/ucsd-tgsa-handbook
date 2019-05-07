require(["gitbook", "jQuery"], function(gitbook, $) {
  gitbook.events.bind('start', function (e, config) {
    var conf = config.downloadpdf
    var label = conf.label
    var base = conf.base
    var multilingual = conf.multilingual || false

    if (base.slice(-1) !== "/") {
      base += "/"
    }

    gitbook.toolbar.createButton({
      icon: 'fa fa-file-pdf-o',
      text: label,
      onClick: function() {
        var lang = multilingual && $('html').attr('lang') ? $('html').attr('lang') + '/' : ''
        
        window.open(base + lang)
      }
    })
  })
})