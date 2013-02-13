jQuery.fn.expandableText = function() {

  var  $el  = $(this)
      ,$div = $('<div class="expandable-text-area"></div>')
      ,content = null;

  $el.css({
    "resize"  : "none",
    "overflow": "hidden",
  })

  $div.css({
    "display"      : "none",
    "font-family"  : $el.css("font-family"),
    "font-size"    : $el.css("font-size"),
    "line-height"  : $el.css("line-height"),
    "min-height"   : $el.css("height"),
    "width"        : $el.width(),
    "border"       : "1px solid",
    "white-space"  : "pre-wrap",
    "word-wrap"    : "break-word",
    "overflow-wrap": "break-word"
  })

  $div.insertAfter($el);

  $el.on('keyup', function () {
    var txt  = $(this).val(),
        div = $(this).next(".expandable-text-area");

    txt = txt.replace(/\n/g, '<br>');
    $div.html(txt + '<br/>');
    $(this).css('height', div.height());
  });

  return this;
};