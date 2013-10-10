$.register({
  rule: 'http://www.bilder-space.de/*.htm',
  ready: function () {
    'use strict';

    $.removeNodes('iframe');

    var img = $('img.picture');
    $.openImage(img.src);
  },
});

// vim: ts=2 sts=2 sw=2 et
// sublime: tab_size 2; translate_tabs_to_spaces true; detect_indentation false; use_tab_stops true;
// kate: space-indent on; indent-width 2;
