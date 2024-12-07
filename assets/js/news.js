
// NAV ANIMATION
function newsNavAnimation() {
    // Staggering the words in sub menu
    
    var header = document.querySelector('header');
    
    header.addEventListener('mouseenter', function() {
    
        let tl = gsap.timeline();
        
        tl.to('.header-bottom', {
            height: '28vh'
        });
        tl.to('.bottom-links h5', {
            display: 'block'
            // visibility: 'visible'
        });
        tl.to('.bottom-links h5 span',{
            y: 0,
            stagger: {
                amount: 0.3
            }
        });
    });
    
    header.addEventListener('mouseleave', function() {
    
        let tl = gsap.timeline();
        
        tl.to('.bottom-links h5 span',{
            y: 25,
            stagger: {
                amount: 0.6
            }
        });
        tl.to('.bottom-links h5', {
            display: 'none',
            // duratin: 0.1
        });    
        tl.to('.header-bottom', {
            height: 0,
            // duration: 0.2
        })
    });
    
};
    
// News Page title Text animation
function NewsSPlittedText() {
    
    var prlxH2 = document.querySelector('.newsPageTitle h2');
    var prlxH2TexxtContent = prlxH2.textContent;
    var prlxH2SplittedText = prlxH2TexxtContent.split('');

    // empty array to store every letter
    var clutter = ''
    prlxH2SplittedText.forEach( function(elem) {
        clutter += `<span>${elem}</span>`;
        // clutter += elem;
        // console.log(elem)
    })

    prlxH2.innerHTML = clutter;

    gsap.from('.newsPageTitle span', {
        y: 150,
        stagger: 0.02,
        duration: 0.8,
        // scrub: true,
        // scrollTrigger: {
        //     trigger: '.newsPageTitle span',
        //     scroller: 'body',
        //     // markers: true,
        //     start: 'top 100%',
        //     end: 'top 0%'
        // }
    })

}





NewsSPlittedText();
newsNavAnimation();