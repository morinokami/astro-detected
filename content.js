function generatedByAstro() {
  const generator = document.querySelector('meta[name="generator"][content^="Astro v"]');
  return generator !== null;
}

function hasAstroIsland() {
  const astroIslandElement = document.querySelector('astro-island');
  return astroIslandElement !== null;
}

function hasAstroClass() {
  const astroClassRegex = /astro-[A-Z0-9]{8}/;
  const allElements = document.querySelectorAll('*');

  for (const element of allElements) {
    const classes = element.classList;
    for (const className of classes) {
      if (astroClassRegex.test(className)) {
        return true;
      }
    }
  }

  return false;
}

function detectAstro() {
  return generatedByAstro() || hasAstroClass() || hasAstroIsland();
}

chrome.runtime.sendMessage({ detected: detectAstro() });
