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
  allCoursesButton.style.borderBottom = '2px solid red';
}

function changeCollections() {
  removeAllSection();
  collectionsSection.classList.remove('hide');
  collectionsButton.style.borderBottom = '2px solid red';
}

function changeWishlist() {
  removeAllSection();
  wishlistSection.classList.remove('hide');
  wishlistButton.style.borderBottom = '2px solid red';
}

function changeArchived() {
  removeAllSection();
  archivedSection.classList.remove('hide');
  archivedButton.style.borderBottom = '2px solid red';
}

function removeAllSection() {
  allcourseSection.classList.add('hide');
  collectionsSection.classList.add('hide');
  wishlistSection.classList.add('hide');
  archivedSection.classList.add('hide');
  allCoursesButton.style.borderBottom = 'none';
  collectionsButton.style.borderBottom = 'none';
  wishlistButton.style.borderBottom = 'none';
  archivedButton.style.borderBottom = 'none';
}
