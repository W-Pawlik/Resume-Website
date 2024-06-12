'use strict';
import { navObserver } from "./components/stickyNav.js";
import { mobileNav } from "./components/mobileNav.js";
import { scrollBehaviour } from "./components/scrollBehaviour.js";
import { popUps } from "./components/popUps.js";
import { hideAnimations } from "./components/hideAnimations.js";

mobileNav()

scrollBehaviour()

popUps()

hideAnimations()

// STICKY NAV
const sectionPrimeEl = document.querySelector('.section-prime');

navObserver.observe(sectionPrimeEl);

