

// NAV ANIMATION
function navAnimation() {
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


// image follow cursor on hover
function imageCursor() {
    var rightElements = document.querySelectorAll('.page2-heading');

    rightElements.forEach(function(elements) {

        // For image follow
        elements.addEventListener('mouseenter', function() {
            // For hover effect
            gsap.to(elements, {
                borderTop: '2px solid #dcdcdc'
            })
    
            gsap.to(elements.childNodes[1], {
                opacity: 1,
                scale: 1
            });
        });
        elements.addEventListener('mouseleave', function() {
            // For hover effect
            gsap.to(elements, {
                borderTop: '2px solid #3d3d3d'
            })
    
            gsap.to(elements.childNodes[1], {
                opacity: 0,
                scale: 0
            });
            
        });
        elements.addEventListener('mousemove', function(details) {
            gsap.to(elements.childNodes[1], {
                x: details.x - elements.getBoundingClientRect().x - 75,
                y: details.y - elements.getBoundingClientRect().y - 75
            });
        });
    });
}


// video animation
function videoAnimation() {

    let animateVideo = document.querySelector('.video-container');
    var video = animateVideo.querySelector('.video');

    gsap.from(animateVideo, {
        top: 0,
        width: 0,
        duration: 1.5,
        ease: 'power2.out'
    });

    if(video.paused || video.ended) {
        video.play()
    }
}


// cursor follow on video
function videoCursor() {

    var videoContainer = document.querySelector('.video-container');
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
    
    var video2 = document.querySelector('#page1 #video-collapse');

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
        
        });
    video2.addEventListener('click', function() {
        video2.pause()
        gsap.to(video2, {
            opacity:0,
            scaleX: 0.7,
            scaleY:0
        });
        
    });

}


// services overlay on hover
function page4overlayAnimation() {
    var serviceList = document.querySelectorAll('.services-list');
    var overlay = document.querySelectorAll('.services-list .services-overlay');
    var svg = document.querySelectorAll('.services-list svg');
    var h5s = document.querySelectorAll('.services-list h5');
    
    
    serviceList.forEach( function(element, index) {
    
        var overlayopen = overlay[index];
        var serviceListItem = serviceList[index];
        var svgItem = svg[index];
        var h5sItem = h5s[index];
    
        element.addEventListener('mouseenter', function() {
            
            gsap.to(serviceListItem, {
                duration: 0.5,
                borderTop: '1.5px solid white'
            });
            gsap.to(overlayopen, {
                duration: 0.5,
                y: '0%'
            });
            gsap.to(svgItem, {
                duration: 0.2,
                paddingRight: '1.5vw'
            })
            gsap.to(h5sItem, {
                duration: 0.2,
                paddingLeft: '1.5vw'
            })
        });
    
        element.addEventListener('mouseleave', function() {      
            
             
            gsap.to(serviceListItem, {
                duration: 0.5,
                borderTop: '1.5px solid var(--border-dark-gray)'
            });
            gsap.to(overlayopen, {
                duration: 0.5,
                y: '100%'
            });    
            gsap.to(svgItem, {
                duration: 0.1,
                paddingRight: '0vw'
            })
            gsap.to(h5sItem, {
                duration: 0.1,
                paddingLeft: '0vw'
            })
        
        });
    
        overlayopen.style.transform = 'translateY(-100%)'; 
    
        // if(overlayopen) {
        //     gsap.to(overlayopen, {
        //         y: '-100%'
        //     })
        // }
    
    });
};


// Scrolltrigger for element push in x-axis

// can not work with query selector all
function h4ElementsAnimation() {
    gsap.from('.bttm-elements h4', {
        x: 0,
        duartion: 0.3,
        scrollTrigger: {
            trigger: '.bttm-elements',
            scroller: 'body',
            // markers: true,
            start: 'top 100%',
            end: 'top 0%',
            scrub: true
        }
    });

    gsap.from(".bttm-elements .line", {
        scrollTrigger: {
          trigger: ".bttm-elements",
          scroller: "body",
          scrub: true,
          start: 'top 90%',
          end: 'top 10%',
        //   start: "top bottom",
        //   end: "top top"
        },
        scaleY: 0,
        height: '0%',
        transformOrigin: "left top",
        // transformOrigin: "left center",
        ease: 'none'
    });

}



// title animated while pin on main div
function page6TitleAnimation() {

    var h2 = document.querySelector('.page6 .page6Title h2');
    
    // translate X
    gsap.from(h2, {
        transform: 'translateX(50%)',
        duration: 5,
        scrollTrigger: {
            trigger: '.page6',
            scroller: 'body',
            // markers: true,
            start: 'top 0%',
            end: 'top -100%',
            scrub: 3,
            pin: true
        }
    });


}


function page61ImgTilt(){
    var imgContainer = document.querySelectorAll('.container .img');

    imgContainer.forEach( function(elem) {
        elem.addEventListener('mouseenter', function() {
            gsap.to(elem, {
                duration: 0.5, // Add duration for smooth transition
                rotationY: 0, // Apply 10-degree Y-axis rotation
                rotationX: 0,  // Apply 5-degree X-axis rotation
                transformOrigin: 'center center', // Center the transform effect
                ease: 'power2.out', // Ease for smoothness
            })
        })
        elem.addEventListener('mouseleave', function() {
            gsap.to(elem, {
                duration: 0.5, // Add duration for smooth transition
                rotationY: 15, // Apply 10-degree Y-axis rotation
                rotationX: 8,  // Apply 5-degree X-axis rotation
                transformOrigin: 'center center', // Center the transform effect
                ease: 'power2.out', // Ease for smoothness
            })
        })
    })
}


// cursor follow on video and transform arrow and pencil svgs
function actionCursor() {

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


// page5 btn animation
function btnAnimation() {

    // get first btn
    var aBtn = document.querySelector('.design');

    aBtn.addEventListener('mouseenter', function() {
        gsap.to('#btn2', {
            scaleY: 1,  
            rotateX: '20deg', 
            translateZ: '50px',
            transformOrigin: 'bottom top',
            duration: 0.6, 
            ease: 'power2.out' 
        });
    });

    aBtn.addEventListener('mouseleave', function() {
        gsap.to('#btn2', {
            scaleY: 0,  
            rotateX: '0deg',  
            translateZ: '0px', 
            transformOrigin: 'top bottom', 
            duration: 0.6,  
            ease: 'power2.in' 
        });
    });

}



// scrolling about svg
function aboutSVG(){
    
    // var aboutSvg = document.querySelector('.circleSvg svg');

    // window.addEventListener('wheel', function(details) {
    //     // console.log(details)
    //     // if (details.deltaY > 0) {
    //         gsap.to(aboutSvg, {
    //             rotate: '360deg',
    //             // repeat: -1,
    //             scrollTrigger: {
    //                 scroller: 'body',
    //                 trigger: '.about-section',
    //                 scrub: 3,
    //                 start: 'top 100%',
    //                 end: 'top 0%'
    //             }
    //         })
    //     }
    //     else {
    //         gsap.to(aboutSvg, {
    //             rotate: '-360deg',
    //             // repeat: -1,
    //             scrollTrigger: {
    //                 scroller: 'body',
    //                 trigger: '.about-section',
    //                 scrub: 3,
    //                 start: 'top 100%',
    //                 end: 'top 0%'
    //             }
    //         })
    //     }
    // });

    window.addEventListener('wheel', function(details) {
        // Create a flag to determine direction of scrolling
        let rotateDegree = details.deltaY >= 1 ? 360 : -360;
        var aboutSvg = document.querySelector('.circleSvg svg');
        // Apply rotation animation with ScrollTrigger
        gsap.to(aboutSvg, {
            rotate: rotateDegree + 'deg',
            duration: 1,
            scrollTrigger: {
                scroller: 'body',
                trigger: aboutSvg,
                scrub: true,
                start: 'top 100%',
                end: 'top 0%',
                invalidateOnRefresh: true, // Ensure the trigger refreshes on window resize
            }
        });
    });
    

}



// Page8 img increas on scroll
function imgIncreases() {

window.addEventListener('wheel', function(details) {
    // Create a flag to determine direction of scrolling
    let scaleImg = details.deltaY > 0 ? 1.2 : 1;
    var aboutImg = document.querySelector('.about-figure img');
    // Apply rotation animation with ScrollTrigger
    gsap.to(aboutImg, {
        scale: scaleImg,
        duration: 1,
        scrollTrigger: {
            scroller: 'body',
            trigger: aboutImg,
            scrub: true,
            start: 'top 100%',
            end: 'top 0%',
            invalidateOnRefresh: true, // Ensure the trigger refreshes on window resize
        }
    });
});

}


// footer btn animation
function footerBtnAnimation() {

    var footerHeadingContainer = document.querySelector('.footer-right-top');
    var circle = document.querySelector('.footer-button');

    footerHeadingContainer.addEventListener('mouseenter', function() {
    
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
    footerHeadingContainer.addEventListener('mousemove', function(details) {
    
        gsap.to(circle, {
            x: details.x - footerHeadingContainer.getBoundingClientRect().x + 30,
            y: details.y - footerHeadingContainer.getBoundingClientRect().y - 15
        });
    }); 
    footerHeadingContainer.addEventListener('mouseleave', function() {
    
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


// Nav Button will changes its sizes
function navBtnAnimating() {
    var navBtnbg = document.querySelector('.btn-div');

    navBtnbg.addEventListener('mouseenter', function() {
        gsap.to('.btn-background', {
            width: '3rem',
            duration: 0.5,
            ease: 'power.out'
        })
        gsap.to('.btn-nav span', {
            paddingRight: '2.5rem',
            color: '#0DA34E'
        })
    })
    navBtnbg.addEventListener('mouseleave', function() {
        gsap.to('.btn-background', {
            width: '9rem',
            duration: 0.5,
            ease: 'power.in'
        })
        gsap.to('.btn-nav span', {
            paddingRight: '1rem',
            color: '#ffffff'
        })
    })
    
}


// Project video animation play when hover
// cursor follow on video in project section when hover it will play
function projectCursor() {
   
    var videoContainer = document.querySelectorAll('.pro-video-container');
    var circles = document.querySelectorAll('.project-button');


    videoContainer.forEach( function(elem, index) {

        var circle = circles[index]
        // console.log(elem.childNodes[5]);
        elem.addEventListener('mouseenter', function() {
    
            gsap.to(circle, {
                scale: 1,
                opacity: 1
            });
        
        }); 

        elem.addEventListener('mousemove', function(details) {
        
            gsap.to(circle, {
                x: details.x - elem.getBoundingClientRect().x -75,
                y: details.y - elem.getBoundingClientRect().y - 75
            });
        }); 

        elem.addEventListener('mouseleave', function() {

            gsap.to(circle, {
                scale: 0,
                opacity: 0
            });
        });


        elem.addEventListener('mouseenter', function() {  

                    // play video while leaving
                    elem.childNodes[3].style.opacity = 0
                    elem.childNodes[5].currentTime = 0
                    elem.childNodes[5].play();
         });
        elem.addEventListener('mouseleave', function() {  

                    // pause video while leaving
                    elem.childNodes[3].style.opacity = 1
                    elem.childNodes[5].pause();
         });

        //  console.log(elem.childNodes)

    });

}


// Navigation for Mobile And Tablet View
function navLinksForMobile() {

    var navBtn = document.querySelector('.menu');
    var navBlock = document.querySelector('.toggleNavbar');
    var navOverlay = document.querySelector('.menu-overlay');

    flag = 0
    navBtn.addEventListener('click', function() {

        if (flag == 0) {
            gsap.to(navBlock, {
                duration: 0.5,
                x: 0
            })
            gsap.to(navOverlay, {
                duration: 1,
                x: 0
            })

            flag = 1
        }
        else {
            gsap.to(navBlock, {
                duration: 0.5,
                x: '100%'
            })
            gsap.to(navOverlay, {
                duration: 1,
                x: '100%'
            })

            flag = 0
        }

    })

}





navLinksForMobile();
projectCursor();
//////////////
navBtnAnimating();
footerBtnAnimation();
imgIncreases();
aboutSVG();
btnAnimation();
actionCursor();
// Last Update
page6TitleAnimation();
page61ImgTilt();
/////////////////
h4ElementsAnimation();
page4overlayAnimation();
videoCursor();
videoAnimation();
imageCursor();
navAnimation();



