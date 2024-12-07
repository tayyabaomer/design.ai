// Blue Parallax Splitted Text animation
function caseStudiesTitle() {
    
    var prlxH2 = document.querySelector('.cases-title h2');
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

    gsap.from('.cases-title h2 span', {
        y: 170,
        stagger: 0.03,
        duration: 1,
    })

}


// Image div animation
function caseStudiesAnimation() {
// Select all elements of the given class
var caseContents = document.querySelectorAll('.cases-img');

    caseContents.forEach(function (caseContent) {
        var caseContentImg = caseContent.querySelector('img');
        var contentPara = caseContent.querySelector('p');
        
        // Add event listeners to each .cases-content element
        caseContent.addEventListener('mouseenter', function () {
            gsap.to(caseContentImg, {
                // transform: 'translateY(0px)',
                y: 0,
                duration: 1,
                ease: 'power2.in'
            });
            gsap.to(contentPara, {
                opacity: 0,
                duration: 1
            });
        });

        caseContent.addEventListener('mouseleave', function () {
            gsap.to(caseContentImg, {
                // transform: 'translateY(150px)',
                y: '40%',
                duration: 1,
                ease: 'power2.out'
            });
            gsap.to(contentPara, {
                opacity: 1,
                duration: 1
            });
        });
    });


    var projectDiv = document.querySelectorAll('.cases-project');


projectDiv.forEach( function(elem) {

    elem.addEventListener('mouseenter', function () {
        
        console.log(elem.childNodes[5])

        gsap.to(elem.childNodes[1], {  
            height: '2px',
            backgroundColor: 'white',
            duration: 0.5,
            ease: 'power2.out'
        })

    });


    elem.addEventListener('mouseleave', function () {
        
        // console.log(elem.childNodes[1])

        gsap.to(elem.childNodes[1], {  
            height: '0.5px',
            backgroundColor: '#3d3d3d',
            duration: 0.5,
            ease: 'power2.in'
        })

    });

    
});


}



// cursor follow on video and transform arrow and pencil svgs
function caseActionCursor() {

    var actionContainer = document.querySelector('.action');
    var circle = document.querySelector('.action-button');

    actionContainer.addEventListener('mouseenter', function() {

        gsap.to(circle, {
            scale: 1,
            opacity: 1
        });

        gsap.to('.pencil', {
            scaleY: 1,
            opacity: 1,
            transformOrigin: 'top bottom'
        })

        gsap.to('.arrow', {
            scaleY: 0,
            opacity: 0,
            transformOrigin: 'bottom top'
        })

    });   
    actionContainer.addEventListener('mousemove', function(details) {

        gsap.to(circle, {
            x: details.x - actionContainer.getBoundingClientRect().x -75,
            y: details.y - actionContainer.getBoundingClientRect().y - 75
        });
    }); 
    actionContainer.addEventListener('mouseleave', function() {

        gsap.to(circle, {
            scale: 0,
            opacity: 0
        });

        gsap.to('.pencil', {
            scaleY: 0,
            opacity: 0,
            transformOrigin: 'top bottom'
        })

        gsap.to('.arrow', {
            scaleY: 1,
            opacity: 1, 
            transformOrigin: 'bottom top'
        })
    });


}


// NAV ANIMATION
function caseNavAnimation() {
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
    







caseStudiesTitle();
caseStudiesAnimation();
caseActionCursor();
caseNavAnimation();