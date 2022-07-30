searchFormBtn.addEventListener('click', () =>{
  location.hash = '#search=' + searchFormInput.value
})

trendingBtn.addEventListener('click', () =>{
  location.hash = '#trends'
})

arrowBtn.addEventListener('click', () =>{
  location.hash = '#home'
})

window.addEventListener('DOMContentLoaded', navigator, false)
window.addEventListener('hashchange', navigator, false)

function navigator() {
  

  if (location.hash.startsWith('#trends')){
    trendsPage()
  }else if (location.hash.startsWith('#search=')){
    searchPage()
  }else if (location.hash.startsWith('#movie=')){
    moviePage()
  }else if (location.hash.startsWith('#category=')){
    categoryPage()
  }else{
    homePage()
  }
  window.scrollTo(0,0)
}

function homePage(){
  console.log('Home')

  headerSection.classList.remove('header-container--long')
  headerSection.style.background = ''
  arrowBtn.classList.add('inactive')
  arrowBtn.classList.remove('header-arrow--white')
  headerCategoryTitle.classList.add('inactive')
  headerTitle.classList.remove('inactive')
  searchForm.classList.remove('inactive')

  trendingPreviewSection.classList.remove('inactive')
  categoriesPreviewSection.classList.remove('inactive')
  genericSection.classList.add('inactive')
  movieDetailSection.classList.add('inactive')

  getTrendingMoviesPreview()
  getCategoriesPreview()
}
function trendsPage(){
  console.log('trends')

  headerSection.classList.remove('header-container--long')
  headerSection.style.background = ''
  arrowBtn.classList.remove('inactive')
  arrowBtn.classList.remove('header-arrow--white')
  headerCategoryTitle.classList.remove('inactive')
  headerTitle.classList.add('inactive')
  searchForm.classList.add('inactive')

  trendingPreviewSection.classList.add('inactive')
  categoriesPreviewSection.classList.add('inactive')
  genericSection.classList.remove('inactive')
  movieDetailSection.classList.add('inactive')

  headerCategoryTitle.innerHTML = 'Tendencias'

  getMoviesPreview()
}
function searchPage(){
  console.log('Search')

  headerSection.classList.remove('header-container--long')
  headerSection.style.background = ''
  arrowBtn.classList.remove('inactive')
  arrowBtn.classList.remove('header-arrow--white')
  headerCategoryTitle.classList.add('inactive')
  headerTitle.classList.add('inactive')
  searchForm.classList.remove('inactive')

  trendingPreviewSection.classList.add('inactive')
  categoriesPreviewSection.classList.add('inactive')
  genericSection.classList.remove('inactive')
  movieDetailSection.classList.add('inactive')

  const [_, query] = location.hash.split('=') 
  getMoviesBySearch(query)
}
function moviePage(){
  console.log('Movie')

  headerSection.classList.add('header-container--long')
  // headerSection.style.background = ''
  arrowBtn.classList.remove('inactive')
  arrowBtn.classList.add('header-arrow--white')
  headerCategoryTitle.classList.add('inactive')
  headerTitle.classList.add('inactive')
  searchForm.classList.add('inactive')

  trendingPreviewSection.classList.add('inactive')
  categoriesPreviewSection.classList.add('inactive')
  genericSection.classList.add('inactive')
  movieDetailSection.classList.remove('inactive')
  // document.footer.classList.add('inactive')

  const [_, movieId] = location.hash.split('=') 
  getMoviesBySearch(movieId)

  getMovieById(movieId)
}
function categoryPage(){
  console.log('Category')

  headerSection.classList.remove('header-container--long')
  headerSection.style.background = ''
  arrowBtn.classList.remove('inactive')
  arrowBtn.classList.remove('header-arrow--white')
  headerCategoryTitle.classList.remove('inactive')
  headerTitle.classList.add('inactive')
  searchForm.classList.add('inactive')

  trendingPreviewSection.classList.add('inactive')
  categoriesPreviewSection.classList.add('inactive')
  genericSection.classList.remove('inactive')
  movieDetailSection.classList.add('inactive')

  const [_, categoryData] = location.hash.split('=') 
  const [categoryID, urlCategoryName] = categoryData.split('-')
  const categoryName = urlCategoryName.replace('%20', ' ')

  headerCategoryTitle.innerHTML = categoryName

  getMoviesByCategory(categoryID)
}