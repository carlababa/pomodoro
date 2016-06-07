function addSpinClass(element) {
  element.classList.add('fa-spin', 'fa-fw');
}

function removeSpinClass(element) {
  element.classList.remove('fa-spin', 'fa-fw');
}

function showHideForm(formId) {
  var _form = document.getElementById(formId);
  _form.style.display = (_form.style.display != "block") ? "block" : "none";
  return false;
}

function hideShow(element1, element2) {
  document.getElementById(element1).classList.remove('show');
  document.getElementById(element1).classList.add('hide');
  document.getElementById(element2).classList.remove('hide');
  document.getElementById(element2).classList.add('show');
}
