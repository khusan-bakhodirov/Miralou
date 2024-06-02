function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}
const OnChange = async (e) => {
  document.querySelector(
    ".predictive_search-container"
  ).innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"><animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></path></svg>`;
  if (e.target.value == "") {
    document.querySelector(".predictive_search-container").innerHTML = "";
  } else {
    const res = await fetch(
      `${routes.predictive_search_url}?q=${encodeURIComponent(
        e.target.value
      )}&section_id=predictive-search`
    );
    const text = await res.text();
    const element = document.createElement("div");
    element.innerHTML = text;
    document.querySelector(".predictive_search-container").innerHTML =
      element.innerHTML;
  }
};
document.querySelector(".search_icon").addEventListener("click", function () {
  console.log("clicked");
});
document
  .querySelector(".search_input")
  .addEventListener("input", debounce((e) => OnChange(e)));
