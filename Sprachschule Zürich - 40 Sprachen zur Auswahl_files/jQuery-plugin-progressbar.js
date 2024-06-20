(function($){$.fn.loading=function(){var DEFAULTS={backgroundColor:'#b3cef6',progressColor:'#4b86db',percent:75,duration:2000};$(this).each(function(){var $target=$(this);var opts={backgroundColor:$target.data('color')?$target.data('color').split(',')[0]:DEFAULTS.backgroundColor,progressColor:$target.data('color')?$target.data('color').split(',')[1]:DEFAULTS.progressColor,percent:$target.data('percent')?$target.data('percent'):DEFAULTS.percent,duration:$target.data('duration')?$target.data('duration'):DEFAULTS.duration};$target.append('<div class="background"></div><div class="rotate"></div><div class="left"></div><div class="right"></div><div><span>'+opts.percent+'%</span></div>');$target.find('.background').attr('style','background-color: '+opts.backgroundColor+' !important');$target.find('.left').attr('style','background-color: '+opts.backgroundColor+' !important');$target.find('.rotate').attr('style','background-color: '+opts.progressColor+' !important');$target.find('.right').attr('style','background-color: '+opts.progressColor+' !important');var $rotate=$target.find('.rotate');setTimeout(function(){$rotate.css({'transition':'transform '+opts.duration+'ms linear','transform':'rotate('+opts.percent*3.6+'deg)'})},1);if(opts.percent>50){var animationRight='toggle '+(opts.duration/opts.percent*50)+'ms step-end';var animationLeft='toggle '+(opts.duration/opts.percent*50)+'ms step-start';$target.find('.right').css({animation:animationRight,opacity:1});$target.find('.left').css({animation:animationLeft,opacity:0})}})}})(jQuery)