//var functionBasedDelay = anime({
//  targets: '.menu_item',
//  translateY: -50,
//  delay: function(el, i, l) {
//    return i * 100;
//  }
//});

var animationsTimeline = anime.timeline();

animationsTimeline
.add({
    targets: '.menu_item',
    translateY: -50,
    easing: 'linear',
	delay: function(el, i, l) {
	    return i * 100;
	}
});