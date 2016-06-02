function addSpinClass(element) {
  element.classList.add('fa-spin', 'fa-fw');
}

function removeSpinClass(element) {
  element.classList.remove('fa-spin', 'fa-fw');
}

function showHideForm(formId){
  var _form = document.getElementById(formId);
  _form.style.display = (_form.style.display != "block") ? "block" : "none";
  return false;
}
