const changeTextDir = (block, align) =>
  [...block.getElementsByClassName("notranslate")].forEach(
    (x) => x.style.textAlign !== "" && (x.style.textAlign = align)
  );

function containsHebrew(text) {
  const hebrewRegex = /[\u0590-\u05FF]/;
  return hebrewRegex.test(text);
}

setInterval(() => {
  if (document.getElementsByClassName("layout")[0] === undefined) return;

	const h1 = document.querySelector("h1");
	if (containsHebrew(h1.textContent)){
	  document.getElementsByClassName("layout")[0].dir = "rtl";

	  document.getElementsByClassName("layout")[0]?.dir &&
		changeTextDir(document.getElementsByClassName("layout")[0], "right");

	  [...document.getElementsByClassName("notion-code-block")].forEach((block) => {
		block.dir = "ltr";
		changeTextDir(block, "left");
	  });
	}
}, 500);
