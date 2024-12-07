// NAV ANIMATION
function projectNavAnimation() {
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
    

// cursor follow on video, when click on it the showreel will be open
function projectVideoCursor() {

    var videoContainer = document.querySelector('.projectBanner');
    var circle = document.querySelector('.circle-follow');

    videoContainer.addEventListener('mouseenter', function() {
    
        gsap.to(circle, {
            scale: 1,
            opacity: 1
        });
    
    });   
    videoContainer.addEventListener('mousemove', function(details) {
    
        gsap.to(circle, {
            x: details.x - videoContainer.getBoundingClientRect().x -75,
            y: details.y - videoContainer.getBoundingClientRect().y - 75
        });
    }); 
    videoContainer.addEventListener('mouseleave', function() {
    
        gsap.to(circle, {
            scale: 0,
            opacity: 0
        });
    });
    

    // when you click on cursor
    
    var video2 = document.querySelector('.projectBanner video');

    // var circle = document.querySelector('.circle-follow');
    circle.addEventListener('click', function() {
        video2.play()
        gsap.to(video2, {
            height: '100%',
            width: '100%',
            opacity:1,
            scaleX:1,
            scaleY:1,
            position: 'fixed',
            duration: 1,
            top: 0
        });

        gsap.to(circle, {
            display: 'none'
        })
        
        });
    video2.addEventListener('click', function() {
        video2.pause()
        gsap.to(video2, {
            opacity:0,
            scaleX: 0.7,
            scaleY:0
        });
        gsap.to(circle, {
            display: 'flex'
        })
        
    });

}


// cursor follow on video and transform arrow and pencil svgs
function ProjectActionCursor() {

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


// Project Page 1 Title Text animation
function projectTitleAnimation() {
    
    var prlxH2 = document.querySelector('.projectTitle h2');
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

    gsap.from('.projectTitle h2 span', {
        y: 170,
        stagger: 0.03,
        duration: 1,
    })

}






projectTitleAnimation();
ProjectActionCursor();
projectVideoCursor();
projectNavAnimation();