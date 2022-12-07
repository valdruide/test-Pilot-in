let img = document.getElementsByClassName('parallaxShape')
new simpleParallax(img, {
    orientation: 'up',
    delay: .6
});

let img2 = document.getElementsByClassName('parallaxShape2')
new simpleParallax(img2, {
    orientation: 'down',
    delay: .6,
    scale: 1.5,
});