var allCoursesButton = document.querySelector('.all-courses');
var collectionsButton = document.querySelector('.collections');
var wishlistButton = document.querySelector('.wishlist');
var archivedButton = document.querySelector('.archived');
var allcourseSection = document.querySelector('.all-courses-section');
var collectionsSection = document.querySelector('.collections-section');
var wishlistSection = document.querySelector('.wishlist-section');
var archivedSection = document.querySelector('.archived-section');

allCoursesButton.addEventListener('click', changeAllCourse);
collectionsButton.addEventListener('click', changeCollections);
wishlistButton.addEventListener('click', changeWishlist);
archivedButton.addEventListener('click', changeArchived);

function changeAllCourse() {
  removeAllSection();
  allcourseSection.classList.remove('hide');
}

function changeCollections() {
  removeAllSection();
  collectionsSection.classList.remove('hide');
}

function changeWishlist() {
  removeAllSection();
  wishlistSection.classList.remove('hide');
}

function changeArchived() {
  removeAllSection();
  archivedSection.classList.remove('hide');
}

function removeAllSection() {
  allcourseSection.classList.add('hide');
  collectionsSection.classList.add('hide');
  wishlistSection.classList.add('hide');
  archivedSection.classList.add('hide');
}
