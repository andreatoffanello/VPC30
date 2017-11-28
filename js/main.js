var menuTimeline = anime.timeline({
	autoplay: false,
	direction: 'reverse'
});

menuTimeline
.add({
    targets: '.fullmenu .column.is-half',
    width: '50%',
    padding: '0.75rem',
    easing: 'easeOutQuart',
    delay: function(el, i, l) {
	    return i * 300;
	}
})
.add({
    targets: '.menu_item',
    translateY: {
    	duration: 1000,
    	value: [100, 0]
    },
    opacity: 1,
    easing: 'easeOutQuart',
    offset: '-=600',
	delay: function(el, i, l) {
	    return i * 200;
	}
})
.add({
    targets: '.menu_title',
    left: '0',
    opacity: '0.05',
    easing: 'easeOutQuart',
    duration: 600,
    offset: '-=1600'
})

.add({
    targets: '.menu_title',
    left: '50px',
    easing: 'easeOutQuart',
    duration: 30000,
    loop: true,
    direction: 'alternate',
    offset: '-=900'
});

document.querySelector('.menu_toggle a').onclick = function() {
  menuTimeline.play();
  menuTimeline.reverse();
};