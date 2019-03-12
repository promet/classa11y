#### _Drupal Theme: Classa11y
The _Classa11y_ base theme is meant to help assist its child-themes. It
includes Bootstrap 4 and standard templates but moves most of the classes into its
preprocesses to allow them to be more-easily removed later by the child
preprocess. The two more-important factors of the subtheme are:
 - Automatic Drupal library attachment – Classa11y automatically attaches
 child-theme libraries to their related entities as long as they follow
 a naming convention:
   - theme-name/entity-id
   - theme-name/entity-id--view-mode
   - theme-name/entity-id--view-mode--bundle

   This not only helps your project stay organized, but it allows
 front-end developers to attach their libraries to components without
 needing to touch PHP.

   Note: notice the _entity-id--view-mode--bundle_ is different than
 Drupal's default theme-name convention of _entity-id--bundle--view-mode_.
 This was done purposely, because typically all bundles of a certain
 view-mode will share a library versus all view-modes sharing a library
 of a certain bundle. This allows a universal library to be included for
 view-modes and then more-specific implementations that are
 bundle-specific also be included .
 - Automatic attribute-variable conversion – Classa11y automatically converts
 specified arrays to attribute variables in a "postprocess" function
 that are listed in the preprocess's
 `$variables['#attribute_variables']` array. IE:
   - `$variables['#attribute_variables'][] = 'figcaption_attributes';`
   - `$variables['#attribute_variables'][] = 'wrapper_attributes';`
   - `$variables['#attribute_variables'][] = 'figcaption_attributes';`
   - `$variables['#attribute_variables'][] = 'image_attributes';`
 - Semantic, Accessible HTML – Classa11y tries to start you off on the right
 foot for success in implementing a fully accessible site.
