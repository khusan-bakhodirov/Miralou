document.getElementById("sort-select").addEventListener("change", function () {
  var selectedOption = this.value;
  var urlParams = new URLSearchParams(window.location.search);
  urlParams.set("sort_by", selectedOption);
  window.location.href = window.location.pathname + "?" + urlParams.toString();
});

const detailsElements = document.querySelectorAll('.filter-details');
let openDetail = null;

detailsElements.forEach(detail => {
  detail.addEventListener('click', function(event) {
    if (openDetail && openDetail !== detail) {
      openDetail.removeAttribute('open');
    }
    openDetail = detail.hasAttribute('open') ? null : detail;
  });
});

document.addEventListener('click', function(event) {
  if (!event.target.closest('.filter-details')) {
    if (openDetail) {
      openDetail.removeAttribute('open');
      openDetail = null;
    }
  }
});
