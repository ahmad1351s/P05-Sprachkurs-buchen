/*!
 * jquery.typer.js 0.0.4 - https://github.com/yckart/jquery.typer.js
 * The typewriter effect
 *
 * Copyright (c) 2013 Yannick Albert (http://yckart.com)
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php).
 * 2013/03/24
*/
(function($){$.fn.typer=function(text,options){options=$.extend({},{char:'',delay:2000,duration:600,endless:!0,onType:$.noop,afterAll:$.noop,afterPhrase:$.noop},options||text);text=$.isPlainObject(text)?options.text:text;text=$.isArray(text)?text:text.split(" ");return this.each(function(){var elem=$(this),isVal={input:1,textarea:1}[this.tagName.toLowerCase()],isTag=!1,timer,c=0;(function typetext(i){var e=({string:1,number:1}[typeof text]?text:text[i])+'',char=e.substr(c++,1);if(char==='<'){isTag=!0}
if(char==='>'){isTag=!1}
elem[isVal?"val":"html"](e.substr(0,c)+($.isFunction(options.char)?options.char():options.char||' '));if(c<=e.length){if(isTag){typetext(i)}else{timer=setTimeout(function(){typetext(i)},options.duration/10)}
options.onType(timer)}else{c=0;i++;if(i===text.length&&!options.endless){return}else if(i===text.length){i=0}
timer=setTimeout(function(){typetext(i)},options.delay);if(i===text.length-1)options.afterAll(timer);options.afterPhrase(timer)}})(0)})}}(jQuery))