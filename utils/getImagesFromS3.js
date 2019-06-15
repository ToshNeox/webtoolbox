const fs = require('fs');
const request = require('request');
const path = require('path');
const async = require('async');

const baseUrl = 'https://thetoolbox.s3.amazonaws.com/wp-content/uploads/';
const images = ["2012/10/jsoneditor.png","2012/10/browsersize.png","2012/10/xicon.png","2012/10/zbugz.png","2012/08/modulargrid.png","2012/08/csscomb.png","2012/08/js2coffee.png","2012/07/brandcolors.png","2012/07/noise.png","2012/07/147colors.png","2012/07/requestbin.png","2012/07/ipsumme.png","2012/07/uicloud.png","2012/07/moqups.png","2012/07/browserling.png","2012/07/mergely.png","2012/07/jquerin.png","2012/07/clickchart.png","2012/07/iconsguide.png","2012/07/webpagetest.png","2012/07/color-ramp.png","2012/07/tinypng.png","2012/06/cdnjs.png","2012/06/htaccess_redirect.png","2012/06/iconmonstr.png","2012/06/cssgradient.png","2012/06/refiddle.png","2012/06/dirty-markup.png","2012/06/hurl.png","2012/06/qrhacker.png","2012/06/codepen.png","2012/06/rubyfiddle.png","2012/06/css3me.png","2012/06/responsinator.png","2012/06/croppme.png","2012/06/fontsquirrel.png","2012/06/piknik.png","2012/06/gtmetrics.png","2012/06/xmlplayground.png","2012/06/kuler21.png","2012/06/degrees.png","2012/06/csspainter.png","2012/06/testico.png","2012/05/browsercover.png","2012/05/pixabay.jpg","2012/05/typography-calculator.png","2012/05/jsbeautifier.png","2012/05/jsbin.png","2012/05/cssdeck.png","2012/05/easings.png","2012/05/pixelator.png","2012/05/cssplease.png","2012/05/numerics.png","2012/05/time_is.png","2012/05/anim-gifs.png","2012/05/HTML5_snippets.png","2012/05/oneqstn.png","2012/05/freepik.png","2012/05/pingdom.png","2012/05/colorschemedesigner.png","2012/05/bear-css.png","2012/05/colorhexa.png","2012/05/csswarp.png","2012/05/initializr.png","2012/05/snipt.png","2012/05/fontello.png","2012/05/wordmark.png","2012/05/screenqueries.png","2012/05/gridulator.png","2012/05/minutebill.png","2012/05/iconfinder.png","2012/05/worldtimebuddy.png","2012/05/caniuse.png","2012/05/regexr.png","2012/05/nice-entity.png","2012/05/regexpal.png","2012/05/css3generator.png","2012/05/patternizer.png","2012/05/lorempixel.png","2012/05/jpegmini.jpg","2012/05/punypng.png","2012/05/androidux.png","2012/05/spritepad.png","2012/05/icomoon.png","2012/05/pttrns.png","2012/05/scriptsrc.png","2012/05/rubular.png","2012/05/mobile-patterns.png","2012/05/html5.png","2012/05/ajaxload.png","2012/05/colllor.png","2012/05/ceaser.png","2012/05/noun.png","2012/05/css-selectors.png","2012/05/shapecatcher.png","2012/05/placeholdit.png","2012/05/strftime1.png","2012/05/pictaculous.png","2012/05/spritecow.png","2012/05/everytime.png","2012/05/supportdetails.png","2012/05/guideguide1.png","2012/05/patterntap.png","2012/05/mockups.png","2012/05/dochub.png","2012/05/0to255.png","2012/05/blisscontrol.png","2012/05/builtwith.png","2012/05/isitold.png","2012/05/regexp.png","2012/05/sqlfiddle.png","2012/05/subtle.png","2012/05/responsive1.png","2012/05/downfor.png","2012/05/favicon.png","2012/05/ribbon.png","2012/05/monster.png","2012/05/ffffallback.png","2012/05/cubic-bezier.png","2012/05/gradient.png","2012/05/markupio.png","2012/05/browserui.png","2012/05/spaceipsum.png","2012/05/whatfont.png","2012/05/gridpak.png","2012/05/layerstyles.png","2012/05/jshint.png","2012/05/dabblet.png","2012/05/dropmocks.png","2012/05/readability.png","2012/05/jsfiddle.png","2012/05/patternify.png","2012/05/noisepng.png","2012/05/fontfriend.png","2012/05/procssor.png","2012/05/copypaste.png","2012/05/snippi.png","2012/05/pears.png","2012/05/css-arrow.png","2012/05/type-a-file.png"];


let iteratee = function(val, key, callback) {
    const url = baseUrl + val;
    const fileName = val.split('/')[2];
    const fileLoc = path.join(__dirname, '../images', fileName)

    console.log('Making request for', url);

    // Make request
    request(url).pipe(fs.createWriteStream(fileLoc)).on('close', callback);
}

async.eachOfLimit(images, 5, iteratee, (e) => {
    console.log('Done! e:', e);
})