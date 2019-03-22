((function ($, Drupal) {
  'use strict';

  Drupal.behaviors.accessibityAdditions = {
    attach: function (context, settings) {

      // Add aria-label to managed file elements based on the span modified in theme.preprocess.
      $('.form-type-managed-file').once('managedfiles').each(function( index ) {
        var text = $(this).find('span').text().trim();
        $(this).find('.js-form-managed-file .js-aria-label-add').attr('aria-label', text);
      });

      // Give selects a selected value, and update when changed.
      $('select').once('selectinit').each(function( index ) {
        var $selectedOptions = $(this).find("option:selected");
        console.log($selectedOptions);
        $selectedOptions.each(function( index ) {
          $(this).attr("selected",true);
        });
      });

      $(document).once('selectupdate').on("change","select",function(){
        console.log('changed');
        $(this).find('option[value="' + $(this).val() + '"]')
          .attr("selected", true).siblings()
          .removeAttr("selected")
      });
    }
  };
})(jQuery, Drupal));
