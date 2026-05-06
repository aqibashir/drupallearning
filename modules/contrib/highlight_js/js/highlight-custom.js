/**
 * @file
 * Enables syntax highlighting via HighlightJs on the HTML code tag.
 */

(function ($, Drupal, drupalSettings, once) {
  'use strict';

  Drupal.behaviors.highlight_js = {
    attach: function (context, settings) {
      once('highlight_js', 'code', context).forEach(function (element) {

        if (typeof hljs !== 'undefined') {
          hljs.highlightAll();
        }

        var copy_enable = settings.button_data.copy_enable;
        var copy_bg_transparent = settings.button_data.copy_bg_transparent;
        var copy_bg_color = settings.button_data.copy_bg_color;
        var copy_txt_color = settings.button_data.copy_txt_color;
        var copy_btn_text = settings.button_data.copy_btn_text;
        var copy_success_text = settings.button_data.copy_success_text;
        var success_txt_color = settings.button_data.success_txt_color;

        // Add copy button to each code block
        $('code').each(function (i, block) {
          // Wrap the code block with a container
          $(block).wrap('<div class="code-container"></div>');

          if (copy_enable && $(this).attr('copy-disabled') === undefined) {
            if(copy_bg_transparent) {
              copy_bg_color = 'transparent';
            }
            var button_style = 'style="background-color: ' + copy_bg_color + '; color: ' + copy_txt_color + ';"'
            var success_msg_style = 'style="color: ' + success_txt_color + ';"'
            // Add copy button
            var copyBtn = $('<button ' + button_style + ' class="copy-btn" data-clipboard-target="#code-' + i + '">' + copy_btn_text + '</button><div ' + success_msg_style + ' class="copy-message" id="copy-message"></div>');
            $(block).before(copyBtn);
          }

          // Add an ID to the code block for Clipboard.js to target
          $(block).attr('id', 'code-' + i);
        });

        // Initialize Clipboard.js
        var clipboard = new ClipboardJS('.copy-btn');

        clipboard.on('success', function (e) {
          // This triggers the deselection of the content text
          e.clearSelection();
          if (copy_success_text !== '') {
            showCopiedMessage(copy_success_text, e.trigger);
          }
        });

        function showCopiedMessage(copy_success_text, buttonElement) {
          var copyMessage = $(buttonElement).siblings('.copy-message');
          copyMessage.text(copy_success_text);
          setTimeout(function () {
            copyMessage.text('');
          }, 2000);
        }

        context.querySelectorAll('pre code').forEach(element => {
          element.style.overflowX = 'auto';
        });
      });
    }
  };
})(jQuery, Drupal, drupalSettings, once);
