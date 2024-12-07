
// Blue Parallax Splitted Text animation
function parallaxSPlittedText() {
    
    var prlxH2 = document.querySelector('#para-title h2');
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

    gsap.from('#para-title h2 span', {
        y: 100,
        stagger: 0.02,
        duration: 0.8,
        scrub: true,
        scrollTrigger: {
            trigger: '#para-title h2 span',
            scroller: 'body',
            // markers: true,
            start: 'top 100%',
            end: 'top 0%'
        }
    })

}


// first heading Parallax Splitted Text animation
function page1SplittedText() {
    
    var prlxH2 = document.querySelector('.page1H1 h1');
    var prlxH2TexxtContent = prlxH2.textContent;
    var prlxH2SplittedText = prlxH2TexxtContent.split('');

    // empty array to store every letter
    var clutter = ''
    prlxH2SplittedText.forEach( function(elem) {
        clutter += `<span class='spn'>${elem}</span>`;
        // clutter += elem;
        // console.log(elem)
    })

    prlxH2.innerHTML = clutter;

    gsap.from('.page1H1 h1 .spn', {
        y: 100,
        stagger: 0.04,
        duration: 1,
        scrub: true,
        // scrollTrigger: {
        //     trigger: '.page1H1 h1 .spn',
        //     scroller: 'body',
        //     // markers: true,
        //     // start: 'top 100%',
        //     // end: 'top 0%'
        // }
    })

}


// second heading Parallax Splitted Text animation
function page1SecondHeadingSPlittedText() {
    
    var prlxH2 = document.querySelector('.page1H2 h1');
    var prlxH2TexxtContent = prlxH2.textContent;
    var prlxH2SplittedText = prlxH2TexxtContent.split('');

    // empty array to store every letter
    var clutter = ''
    prlxH2SplittedText.forEach( function(elem, index) {
        clutter += `<span>${elem}</span>`;
        // clutter += elem;
        // console.log(elem[10])
    })

    prlxH2.innerHTML = clutter;

    gsap.from('.page1H2 h1 span', {
        y: 100,
        stagger: 0.04,
        duration: 1,
        scrub: true,
        // scrollTrigger: {
        //     trigger: '.page1H2 h1 span',
        //     scroller: 'body',
        //     // markers: true,
        //     start: 'top 100%',
        //     end: 'top 0%'
        // }
    })

}



// page1 subtext1 Parallax Splitted Text animation
function page1SplittedSubContent1() {
    
    var prlxH2 = document.querySelector('.page1-subText1 p');
    
    var prlxH2TexxtContent = prlxH2.textContent;
    // console.log(prlxH2TexxtContent)
    var prlxH2SplittedText = prlxH2TexxtContent.split('');
    // console.log(prlxH2SplittedText)
    // empty array to store every letter
    var clutter = ''
    prlxH2SplittedText.forEach( function(elem) {
        clutter += `<span>${elem}</span>`;
        // clutter += elem;
        // console.log(elem)
        // console.log(clutter)
        

    })
    // console.log(clutter)

    prlxH2.innerHTML = clutter;

    gsap.from( '.page1-subText1 p span', {
        y: 100,
        stagger: 0.01,
        duration: 1,
        // delay: 0.5,
        scrub: true,
        // scrollTrigger: {
        //     trigger: '.page1-subText1 p',
        //     scroller: 'body',
        //     // markers: true,
        //     start: 'top 100%',
        //     end: 'top 0%'
        // }
    })

}


// page1 subtext2 Parallax Splitted Text animation
function page1SplittedSubContent2() {
    
    var prlxH2 = document.querySelector('.page1-subText2 p');
    
    var prlxH2TexxtContent = prlxH2.textContent;
    // console.log(prlxH2TexxtContent)
    var prlxH2SplittedText = prlxH2TexxtContent.split('');
    // console.log(prlxH2SplittedText)
    // empty array to store every letter
    var clutter = ''
    prlxH2SplittedText.forEach( function(elem) {
        clutter += `<span>${elem}</span>`;
        // clutter += elem;
        // console.log(elem)
        // console.log(clutter)
        

    })
    // console.log(clutter)

    prlxH2.innerHTML = clutter;

    gsap.from( '.page1-subText2 p span', {
        y: 100,
        stagger: 0.01,
        duration: 1,
        // delay: 0.4,
        scrub: true,
        // scrollTrigger: {
        //     trigger: '.page1-subText2 p',
        //     scroller: 'body',
        //     // markers: true,
        //     start: 'top 100%',
        //     end: 'top 0%'
        // }
    })

}


// Last btn heading page1 Parallax Splitted Text animation
function page1BtnSplitted() {

    gsap.from('.head-span span', {
        y: 100,
        stagger: 0.1,
        duration: 1,
        delay: 1,
        // scrollTrigger: {
        //     trigger: '.head-span span',
        //     scroller: 'body',
        //     // markers: true,
        //     start: 'top 0%',
        //     end: 'top 100%'
        // }
    })

}


// animated logos Parallax Splitted Text animation
function movingLogos() {

    gsap.from('#moving-logos', {

        width: '0%',
        duration: 1,
        delay: 0.9,
        scrub: true,
        scrollTrigger: {
            trigger: '#moving-logos',
            scroller: 'body',
            // markers: true,
            start: 'top 100%',
            end: 'top 0%'
        }
    })

}


// Services title animations
function servicesTitleAnimation1() {

    
    var prlxH2 = document.querySelector('.servicesHeadOne h4');
    
    var prlxH2TexxtContent = prlxH2.textContent;
    // console.log(prlxH2TexxtContent)
    var prlxH2SplittedText = prlxH2TexxtContent.split('');
    // console.log(prlxH2SplittedText)
    // empty array to store every letter
    var clutter = ''
    prlxH2SplittedText.forEach( function(elem) {
        clutter += `<span>${elem}</span>`;
        // clutter += elem;
        // console.log(elem)
        // console.log(clutter)         
    })
    // console.log(clutter)

    prlxH2.innerHTML = clutter;

    gsap.from( '.servicesHeadOne h4 span', {
        y: 100,
        stagger: 0.01,
        duration: 1,
        // delay: 1,
        scrollTrigger: {
            trigger: '.servicesHeadOne h4',
            scroller: 'body',
            // markers: true,
            start: 'top 100%',
            end: 'top 0%'
        }
    })
    
}


// Services title animations
function servicesTitleAnimation2() {

    
    var prlxH2 = document.querySelector('.servicesHeadTwo h4');
    
    var prlxH2TexxtContent = prlxH2.textContent;
    // console.log(prlxH2TexxtContent)
    var prlxH2SplittedText = prlxH2TexxtContent.split('');
    // console.log(prlxH2SplittedText)
    // empty array to store every letter
    var clutter = ''
    prlxH2SplittedText.forEach( function(elem) {
        clutter += `<span>${elem}</span>`;
        // clutter += elem;
        // console.log(elem)
        // console.log(clutter)         
    })
    // console.log(clutter)

    prlxH2.innerHTML = clutter;

    gsap.from( '.servicesHeadTwo h4 span', {
        y: 100,
        stagger: 0.01,
        duration: 1,
        // delay: 0.5,
        scrollTrigger: {
            trigger: '.servicesHeadTwo h4',
            scroller: 'body',
            // markers: true,
            start: 'top 100%',
            end: 'top 0%'
        }
    })
    
}


// Services title animations
function servicesTitleAnimation3() {

    
    var prlxH2 = document.querySelector('.servicesHeadThree h4');
    
    var prlxH2TexxtContent = prlxH2.textContent;
    // console.log(prlxH2TexxtContent)
    var prlxH2SplittedText = prlxH2TexxtContent.split('');
    // console.log(prlxH2SplittedText)
    // empty array to store every letter
    var clutter = ''
    prlxH2SplittedText.forEach( function(elem) {
        clutter += `<span>${elem}</span>`;
        // clutter += elem;
        // console.log(elem)
        // console.log(clutter)         
    })
    // console.log(clutter)

    prlxH2.innerHTML = clutter;

    gsap.from( '.servicesHeadThree h4 span', {
        y: 100,
        stagger: 0.01,
        duration: 1,
        scrollTrigger: {
            trigger: '.servicesHeadThree h4',
            scroller: 'body',
            // markers: true,
            start: 'top 100%',
            end: 'top 0%'
        }
    })
    
}


// Services Sub title animations 1
function servicesSubTitleOne() {
    
    var prlxH2 = document.querySelector('.subTitle .subTitleContent');
    
    var prlxH2TexxtContent = prlxH2.textContent;
    // console.log(prlxH2TexxtContent)
    var prlxH2SplittedText = prlxH2TexxtContent.split('');
    // console.log(prlxH2SplittedText)
    // empty array to store every letter
    var clutter = ''
    prlxH2SplittedText.forEach( function(elem) {
        clutter += `<span>${elem}</span>`;
        // clutter += elem;
        // console.log(elem)
        // console.log(clutter)         
    })
    // console.log(clutter)

    prlxH2.innerHTML = clutter;

    gsap.from( '.subTitleContent span', {
        y: 100,
        stagger: 0.02,
        duration: 1,
        scrollTrigger: {
            trigger: '.services-head',
            scroller: 'body',
            // markers: true,
            start: 'top 100%',
            end: 'top 0%'
        }
    })
    
}


// Services Sub title animations 2
function servicesSubTitleTwo() {
    
    var prlxH2 = document.querySelector('.subTitle-2 .subTitleContent-2');
    
    var prlxH2TexxtContent = prlxH2.textContent;
    // console.log(prlxH2TexxtContent)
    var prlxH2SplittedText = prlxH2TexxtContent.split('');
    // console.log(prlxH2SplittedText)
    // empty array to store every letter
    var clutter = ''
    prlxH2SplittedText.forEach( function(elem) {
        clutter += `<span>${elem}</span>`;
        // clutter += elem;
        // console.log(elem)
        // console.log(clutter)         
    })
    // console.log(clutter)

    prlxH2.innerHTML = clutter;

    gsap.from( '.subTitleContent-2 span', {
        y: 100,
        stagger: 0.02,
        duration: 1,
        scrollTrigger: {
            trigger: '.subTitleContent-2',
            scroller: 'body',
            // markers: true,
            start: 'top 100%',
            end: 'top 0%'
        }
    })
    
}


// Design Process title animations 1
function designProcessAni1() {
    
    var prlxH2 = document.querySelector('.h2Wrapper h2');
    
    var prlxH2TexxtContent = prlxH2.textContent;
    // console.log(prlxH2TexxtContent)
    var prlxH2SplittedText = prlxH2TexxtContent.split('');
    // console.log(prlxH2SplittedText)
    // empty array to store every letter
    var clutter = ''
    prlxH2SplittedText.forEach( function(elem) {
        clutter += `<span>${elem}</span>`;
        // clutter += elem;
        // console.log(elem)
        // console.log(clutter)         
    })
    // console.log(clutter)

    prlxH2.innerHTML = clutter;

    gsap.from( '.h2Wrapper h2 span', {
        y: 100,
        stagger: 0.02,
        duration: 1,
        // delay: 0.9,
        scrollTrigger: {
            trigger: '.h2Wrapper h2',
            scroller: 'body',
            // markers: true,
            start: 'top 100%',
            end: 'top 0%'
        }
    })
    
}


// Design Process title animations 2
function designProcessAni2() {
    
    var prlxH2 = document.querySelector('.h2Wrapper2 h2');
    
    var prlxH2TexxtContent = prlxH2.textContent;
    // console.log(prlxH2TexxtContent)
    var prlxH2SplittedText = prlxH2TexxtContent.split('');
    // console.log(prlxH2SplittedText)
    // empty array to store every letter
    var clutter = ''
    prlxH2SplittedText.forEach( function(elem) {
        clutter += `<span>${elem}</span>`;
        // clutter += elem;
        // console.log(elem)
        // console.log(clutter)         
    })
    // console.log(clutter)

    prlxH2.innerHTML = clutter;

    gsap.from( '.h2Wrapper2 h2 span', {
        y: 100,
        stagger: 0.01,
        duration: 1,
        scrollTrigger: {
            trigger: '.h2Wrapper2 h2',
            scroller: 'body',
            // markers: true,
            start: 'top 100%',
            end: 'top 0%'
        }
    })
    
    
}



// Design About Home page title animations 
function aboutHomeTitleAnimations1() {
    
    // for first part of heading
    var prlxH2 = document.querySelector('.aboutHeadOne h4');
    var prlxH2TexxtContent = prlxH2.textContent;
    var prlxH2SplittedText = prlxH2TexxtContent.split('');

    var clutter = ''
    prlxH2SplittedText.forEach( function(elem) {
        clutter += `<span>${elem}</span>`;
   
    })

    prlxH2.innerHTML = clutter;

    gsap.from( '.aboutHeadOne h4 span', {
        y: 100,
        stagger: 0.01,
        duration: 1,
        scrollTrigger: {
            trigger: '.aboutHeadOne h4',
            scroller: 'body',
            // markers: true,
            start: 'top 100%',
            end: 'top 0%'
        }
    })

}


function aboutHomeTitleAnimations2() {

    
    // for second part of heading
    var prlxH2 = document.querySelector('.aboutHeadTwo h4');
    var prlxH2TexxtContent = prlxH2.textContent;
    var prlxH2SplittedText = prlxH2TexxtContent.split('');

    var clutter = ''
    prlxH2SplittedText.forEach( function(elem) {
        clutter += `<span>${elem}</span>`;
   
    })

    prlxH2.innerHTML = clutter;

    gsap.from('.aboutHeadTwo h4 span', {
        y: 100,
        stagger: 0.01,
        duration: 1,
        scrollTrigger: {
            trigger: '.aboutHeadTwo h4',
            scroller: 'body',
            // markers: true,
            start: 'top 100%',
            end: 'top 0%'
        }
    })

}



function aboutHomeTitleAnimations3() {

    // for third part of heading
    var prlxH2 = document.querySelector('.aboutHeadThree h4');
    var prlxH2TexxtContent = prlxH2.textContent;
    var prlxH2SplittedText = prlxH2TexxtContent.split('');

    var clutter = ''
    prlxH2SplittedText.forEach( function(elem) {
        clutter += `<span>${elem}</span>`;
   
    })

    prlxH2.innerHTML = clutter;

    gsap.from( '.aboutHeadThree h4 span', {
        y: 100,
        stagger: 0.01,
        duration: 1,
        scrollTrigger: {
            trigger: '.aboutHeadThree h4',
            scroller: 'body',
            // markers: true,
            start: 'top 100%',
            end: 'top 0%'
        }
    })

}


// success stories section title animation 
function storiesTitle1() {
   
    // for second part of heading
    var prlxH2 = document.querySelector('.stories-head1 h2');
    var prlxH2TexxtContent = prlxH2.textContent;
    var prlxH2SplittedText = prlxH2TexxtContent.split('');

    var clutter = ''
    prlxH2SplittedText.forEach( function(elem) {
        clutter += `<span>${elem}</span>`;
   
    })

    prlxH2.innerHTML = clutter;

    gsap.from('.stories-head1 h2 span', {
        y: 100,
        stagger: 0.01,
        duration: 1,
        scrollTrigger: {
            trigger: '.stories-head1 h2',
            scroller: 'body',
            // markers: true,
            start: 'top 100%',
            end: 'top 0%'
        }
    })

}


function storiesTitle2() {
   
    // for second part of heading
    var prlxH2 = document.querySelector('.stories-head2 h2');
    var prlxH2TexxtContent = prlxH2.textContent;
    var prlxH2SplittedText = prlxH2TexxtContent.split('');

    var clutter = ''
    prlxH2SplittedText.forEach( function(elem) {
        clutter += `<span>${elem}</span>`;
   
    })

    prlxH2.innerHTML = clutter;

    gsap.from('.stories-head2 h2 span', {
        y: 100,
        stagger: 0.01,
        duration: 1,
        delay: 0.2,
        scrollTrigger: {
            trigger: '.stories-head2 h2',
            scroller: 'body',
            // markers: true,
            start: 'top 100%',
            end: 'top 0%'
        }
    })

}


function storiesTitle3() {
   
    // for second part of heading
    var prlxH2 = document.querySelector('.stories-head3 h2');
    var prlxH2TexxtContent = prlxH2.textContent;
    var prlxH2SplittedText = prlxH2TexxtContent.split('');

    var clutter = ''
    prlxH2SplittedText.forEach( function(elem) {
        clutter += `<span>${elem}</span>`;
   
    })

    prlxH2.innerHTML = clutter;

    gsap.from('.stories-head3 h2 span', {
        y: 100,
        stagger: 0.01,
        duration: 1,
        delay: 0.4,
        scrollTrigger: {
            trigger: '.stories-head3 h2',
            scroller: 'body',
            // markers: true,
            start: 'top 100%',
            end: 'top 0%'
        }
    })

}


function storiesTitle4() {
   
    // for second part of heading
    var prlxH2 = document.querySelector('.stories-head4 h2');
    var prlxH2TexxtContent = prlxH2.textContent;
    var prlxH2SplittedText = prlxH2TexxtContent.split('');

    var clutter = ''
    prlxH2SplittedText.forEach( function(elem) {
        clutter += `<span>${elem}</span>`;
   
    })

    prlxH2.innerHTML = clutter;

    gsap.from('.stories-head4 h2 span', {
        y: 100,
        stagger: 0.01,
        duration: 1,
        delay: 0.6,
        scrollTrigger: {
            trigger: '.stories-head4 h2',
            scroller: 'body',
            // markers: true,
            start: 'top 100%',
            end: 'top 0%'
        }
    })

}



// Starts Project Title Animations Here
function projectTitle1() {
   
    // for second part of heading
    var prlxH2 = document.querySelector('.projectsTitle1 h5');
    var prlxH2TexxtContent = prlxH2.textContent;
    var prlxH2SplittedText = prlxH2TexxtContent.split('');

    var clutter = ''
    prlxH2SplittedText.forEach( function(elem) {
        clutter += `<span>${elem}</span>`;
   
    })

    prlxH2.innerHTML = clutter;

    gsap.from('.projectsTitle1 h5 span', {
        y: 100,
        stagger: 0.01,
        duration: 1,
        scrollTrigger: {
            trigger: '.projectsTitle1 h5',
            scroller: 'body',
            // markers: true,
            start: 'top 100%',
            end: 'top 0%'
        }
    })

}


function projectTitle2() {
   
    // for second part of heading
    var prlxH2 = document.querySelector('.projectsTitle2 h5');
    var prlxH2TexxtContent = prlxH2.textContent;
    var prlxH2SplittedText = prlxH2TexxtContent.split('');

    var clutter = ''
    prlxH2SplittedText.forEach( function(elem) {
        clutter += `<span>${elem}</span>`;
   
    })

    prlxH2.innerHTML = clutter;

    gsap.from('.projectsTitle2 h5 span', {
        y: 100,
        stagger: 0.01,
        duration: 1,
        scrollTrigger: {
            trigger: '.projectsTitle2 h5',
            scroller: 'body',
            // markers: true,
            start: 'top 100%',
            end: 'top 0%'
        }
    })

}


function projectTitle3() {
   
    // for second part of heading
    var prlxH2 = document.querySelector('.projectsTitle3 h5');
    var prlxH2TexxtContent = prlxH2.textContent;
    var prlxH2SplittedText = prlxH2TexxtContent.split('');

    var clutter = ''
    prlxH2SplittedText.forEach( function(elem) {
        clutter += `<span>${elem}</span>`;
   
    })

    prlxH2.innerHTML = clutter;

    gsap.from('.projectsTitle3 h5 span', {
        y: 100,
        stagger: 0.01,
        duration: 1,
        scrollTrigger: {
            trigger: '.projectsTitle3 h5',
            scroller: 'body',
            // markers: true,
            start: 'top 100%',
            end: 'top 0%'
        }
    })

}









projectTitle1();
projectTitle2();
projectTitle3();
/////////
storiesTitle1();
storiesTitle2();
storiesTitle3();
storiesTitle4();
//////////
aboutHomeTitleAnimations1();
aboutHomeTitleAnimations2();
aboutHomeTitleAnimations3();
// Friday work
servicesTitleAnimation1();
servicesTitleAnimation2();
servicesTitleAnimation3();
servicesSubTitleOne();
servicesSubTitleTwo();
designProcessAni1();
designProcessAni2();
///////////////////////
page1BtnSplitted();
movingLogos();
page1SplittedSubContent1();
page1SplittedSubContent2();
page1SplittedText();
page1SecondHeadingSPlittedText();
parallaxSPlittedText();

