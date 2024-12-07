
function inputFieldStyling() {
    var inputFields = document.querySelectorAll('.fields');
    let lastClickedField = null;
    
    
    inputFields.forEach( function(elements) {
        elements.addEventListener('click', function(event) {
    
            event.stopPropagation();
    
    
            if(lastClickedField && lastClickedField !== elements) {
    
                inputFields.forEach(function(elements) {
        
                    let label = elements.querySelector('label');
                    let input = elements.querySelector('input');
            
                    gsap.to(label, {
                        y: 0,
                        duration: 0.5,
                        ease: 'power.in',
                        fontSize: '1.1vw',
                        color: '#111111'
                    });
                    gsap.to(input, {
                        borderBottom: '1px solid rgb(182, 181, 181)',
                        ease: 'power.in',
                        duration: 0.5
                    });
                });
            }
    
    
            let label = this.querySelector('label');
            let input = this.querySelector('input');
    
            gsap.to(label, {
                y: -25,
                duration: 0.5,
                ease: 'power.out',
                fontSize: '1vw',
                color: '#0DA34E'
            });
            gsap.to(input, {
                borderBottom: '1px solid #0DA34E',
                ease: 'power.out',
                duration: 0.5
            });
    
            lastClickedField = elements
    
        });
    });
    
    document.addEventListener('click', function(event) {
    
        if(!event.target.closest('.fields')) {
    
            inputFields.forEach(function(elements) {
    
                let label = elements.querySelector('label');
                let input = elements.querySelector('input');
        
                gsap.to(label, {
                    y: 0,
                    duration: 0.5,
                    ease: 'power.in',
                    fontSize: '1.1vw',
                    color: '#111111'
                });
                gsap.to(input, {
                    borderBottom: '1px solid rgb(182, 181, 181)',
                    ease: 'power.in',
                    duration: 0.5
                });
            });
        }
    });
    
}


// NAV ANIMATION
function contactNavAnimation() {
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
    









// contactNavAnimation();
inputFieldStyling();