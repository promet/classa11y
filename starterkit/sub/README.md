<!-- @file Instructions for subtheming using the sub Starterkit. -->
# sub Starterkit
The sub Starterkit is rather simple to set up. You don't have to do anything
until you wish to override the default [Classa11y] base theme settings
or provide additional custom CSS, JS, Preprocessing, and templates.

## Initial Setup
1. Copy the "sub" folder and its contents into `PROJECT_ROOT/docroot/themes/custom`. **NOTE:** Your path may be 
`PROJECT_ROOT/web/themes/custom` depending on your application.
2. Rename the sub folder to the name of your theme. (all lowercase and _ in place of spaces)
3. Rename all instances of THEMENAME in the files to the same name you chose for a folder name
4. Rename YOURTHEME.starterkit.yml to YOURTHEME.info.yml
5. In YOURTHEME.info.yml, replace all instances of THEMENAME with your theme name. You may also change the desciption
if you feel the need.
4. Log into your site and visit /admin/appearance
5. Make sure the Classa11y theme in installed, and install and set as default your new theme.

## Styles
Global styles should be built to the `./THEMENAME/css/theme.css` from a themesrc directory located in the project root.
You should be building other css files for component based building to take full advantage of the base theme. More
information on the topic can be found in the README [Here]

## Scripts
Global scripts should be built to the `./THEMENAME/js/theme.js` from a themesrc directory located in the project root.
You should be building other js files for component based building to take full advantage of the base theme. More
information on the topic can be found in the README [Here]

## Adding Images
Images should be added in the themesrc directory and minified using a gulp
task before automatically being placed in the `./THEMENAME/img` folder

[Classa11y]: https://github.com/promet
[Here]: https://github.com/promet
