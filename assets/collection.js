document.getElementById('sort-select').addEventListener('change', function() {
    var selectedOption = this.value;
    var urlParams = new URLSearchParams(window.location.search);
    urlParams.set('sort_by', selectedOption);
    window.location.href = window.location.pathname + '?' + urlParams.toString();
  });