const body = document.body;

const chromaticAbberation = () => {
  body.style.setProperty(
    "--chromatic-abberation", 
    `${Math.round(Math.random() * 300) / 100}px`
  );
};

if (body) setInterval(chromaticAbberation, 100); 

