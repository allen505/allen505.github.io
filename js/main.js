(function() {
    "use strict";

    // 1. Full Height
    const setFullHeight = () => {
        const elements = document.querySelectorAll('.js-fullheight');
        const height = window.innerHeight;
        elements.forEach(el => el.style.height = `${height}px`);
    };
    setFullHeight();
    window.addEventListener('resize', setFullHeight);

    // 2. Loader
    setTimeout(() => {
        const loader = document.getElementById('ftco-loader');
        if (loader) {
            loader.classList.remove('show');
        }
    }, 1);

    // 3. Burger Menu
    const navToggles = document.querySelectorAll('.js-fh5co-nav-toggle');
    navToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            const nav = document.getElementById('ftco-nav');
            if (nav.classList.contains('show')) { // Bootstrap 5 collapse class is 'show'
                toggle.classList.remove('active');
            } else {
                toggle.classList.add('active');
            }
        });
    });

    // 4. Smooth Scroll for Navbar Links
    const navLinks = document.querySelectorAll('#ftco-nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetEl = document.getElementById(targetId);
            if (targetEl) {
                window.scrollTo({
                    top: targetEl.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
            // Close navbar on mobile
            if (typeof bootstrap !== 'undefined') {
                const navElement = document.getElementById('ftco-nav');
                if (navElement.classList.contains('show')) {
                    const bsCollapse = bootstrap.Collapse.getInstance(navElement) || new bootstrap.Collapse(navElement, {toggle: false});
                    bsCollapse.hide();
                    navToggles.forEach(t => t.classList.remove('active'));
                }
            }
        });
    });

    // 5. Scroll Window (Navbar sticky/color change)
    const scrollWindow = () => {
        const navbar = document.querySelector('.ftco_navbar');
        if (!navbar) return;
        
        window.addEventListener('scroll', () => {
            const st = window.scrollY;
            if (st > 150) {
                if (!navbar.classList.contains('scrolled')) {
                    navbar.classList.add('scrolled');
                }
            } 
            if (st < 150) {
                if (navbar.classList.contains('scrolled')) {
                    navbar.classList.remove('scrolled', 'sleep');
                }
            } 
            if (st > 350) {
                if (!navbar.classList.contains('awake')) {
                    navbar.classList.add('awake');
                }
            }
            if (st < 350) {
                if (navbar.classList.contains('awake')) {
                    navbar.classList.remove('awake');
                    navbar.classList.add('sleep');
                }
            }
        });
    };
    scrollWindow();

    // 6. Intersection Observer for fade-in animations (.ftco-animate)
    const animateElements = document.querySelectorAll('.ftco-animate');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('ftco-animated')) {
                const el = entry.target;
                el.classList.add('item-animate');
                
                setTimeout(() => {
                    const effect = el.getAttribute('data-animate-effect');
                    if (effect === 'fadeIn') {
                        el.classList.add('fadeIn', 'ftco-animated');
                    } else if (effect === 'fadeInLeft') {
                        el.classList.add('fadeInLeft', 'ftco-animated');
                    } else if (effect === 'fadeInRight') {
                        el.classList.add('fadeInRight', 'ftco-animated');
                    } else {
                        el.classList.add('fadeInUp', 'ftco-animated');
                    }
                    el.classList.remove('item-animate');
                }, 50); 
                
                observer.unobserve(el);
            }
        });
    }, {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.1
    });

    animateElements.forEach(el => observer.observe(el));

    // 7. Mouse Icon Click
    const mouseIcon = document.querySelector('.mouse-icon');
    if (mouseIcon) {
        mouseIcon.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector('.goto-here');
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 82,
                    behavior: 'smooth'
                });
            }
        });
    }

    // 8. Text Rotate
    var TxtRotate = function(el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = '';
      this.tick();
      this.isDeleting = false;
    };

    TxtRotate.prototype.tick = function() {
      var i = this.loopNum % this.toRotate.length;
      var fullTxt = this.toRotate[i];
      var typingSpeed = 175;

      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

      var that = this;
      var delta = typingSpeed - Math.random() * 100;

      if (this.isDeleting) { delta /= 2; }

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }

      setTimeout(function() {
        that.tick();
      }, delta);
    };

    const initTxtRotate = () => {
      var elements = document.getElementsByClassName('txt-rotate');
      for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
      }
      var css = document.createElement("style");
      css.type = "text/css";
      css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
      document.body.appendChild(css);
    };
    document.addEventListener('DOMContentLoaded', initTxtRotate);

    // 9. Scrollspy for right sidebar (Resume section)
    const sections = Array.from(document.querySelectorAll('#navi a')).map(a => document.querySelector(a.getAttribute('href')));
    const navbara = document.querySelectorAll('#navi a');
    
    navbara.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                window.scrollTo({
                    top: target.offsetTop - 180,
                    behavior: 'smooth'
                });
                if (history.pushState) {
                    history.pushState(null, null, this.getAttribute('href'));
                } else {
                    location.hash = this.getAttribute('href');
                }
            }
        });
    });

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY + (window.innerHeight / 2);
        let currentId = false;
        
        sections.forEach(section => {
            if (section && scrollTop > section.offsetTop) {
                currentId = section.getAttribute('id');
            }
        });
        
        if (currentId) {
            navbara.forEach(link => link.classList.remove('current'));
            const activeLink = document.querySelector(`#navi a[href="#${currentId}"]`);
            if (activeLink) {
                activeLink.classList.add('current');
            }
        }
    });

})();
