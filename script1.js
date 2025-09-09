const categoryContainer = document.getElementById('category_container')
const newsContiner = document.getElementById('news_container')
const bookmarkContainer = document.getElementById('your_cart')
let bookmakrs = []


const loadCategory = () => {
  fetch('https://openapi.programming-hero.com/api/categories')
    .then(res => res.json())
    .then(data => {
      const categories = data.categories
      showCategory(categories)

     
      if (categories.length > 0) {
        const firstId = categories[0].id
        loadNEwsByCategory(firstId)
      }
    })
    .catch(err => console.log(err))
}


const showCategory = (categories) => {
  categoryContainer.innerHTML = ''
  categories.forEach(cat => {
    categoryContainer.innerHTML += `
      <li id="${cat.id}" 
        class="hover:border-b-4 hover:border-red-600 border-green-500 cursor-pointer">
        ${cat.category_name}
      </li>
    `
  })

  categoryContainer.addEventListener('click', (e) => {
    const allLi = document.querySelectorAll('#category_container li')
    allLi.forEach(li => li.classList.remove('border-b-4'))

    if (e.target.localName === 'li') {
      e.target.classList.add('border-b-4')
      loadNEwsByCategory(e.target.id)
    }
  })
}


const loadNEwsByCategory = (newsId) => {
  fetch(`https://openapi.programming-hero.com/api/category/${newsId}`)
    .then(res => res.json())
    .then(data => {
      showNewsByCategory(data.plants)
    })
    .catch(err => console.log(err))
}


const showNewsByCategory = (plants) => {
  newsContiner.innerHTML = ''
  plants.forEach(plant => {
    newsContiner.innerHTML += `
      <div class="border border-gray-200 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition bg-white p-2">
        
        <!-- Image -->
        <div class="w-full h-48 overflow-hidden">
          <img src="${plant.image}" alt="${plant.name}" 
               class="w-full h-full rounded-xl object-cover hover:scale-105 transition duration-300"/>
        </div>
        
        <!-- Content -->
        <div class="p-4">
          <h2 class="text-lg font-bold text-gray-800">${plant.name}</h2>
          <p class="text-gray-600 text-sm line-clamp-3">${plant.description}</p>
        </div>
        
        <!-- Footer -->
        <div class="flex justify-between items-center px-4 py-3 text-sm font-medium">
          <span class="text-green-600">${plant.category}</span>
          <span class="text-yellow-600 font-semibold">$${plant.price}</span>
        </div>

        <button 
          data-id="${plant.id}" 
          data-name="${plant.name}" 
          data-price="${plant.price}" 
          class="add-btn bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-full transition">
          Add to Cart
        </button>
      </div>
    `
  })
}


newsContiner.addEventListener('click', (e) => {
  if (e.target.classList.contains('add-btn')) {
    const plantId = e.target.getAttribute('data-id')
    const plantName = e.target.getAttribute('data-name')
    const plantPrice = parseFloat(e.target.getAttribute('data-price'))


    const exists = bookmakrs.find(b => b.id === plantId)
    if (!exists) {
      bookmakrs.push({ id: plantId, plant: plantName, price: plantPrice })
    }

    showBookMarks(bookmakrs)
  }
})


const showBookMarks = (bookmakrs) => {
  bookmarkContainer.innerHTML = ''
  let total = 0

  bookmakrs.forEach(bookmark => {
    total += bookmark.price
    bookmarkContainer.innerHTML += `
      <div class="border my-2 p-2 flex justify-between items-center"> 
        <h1>${bookmark.plant} - ৳ ${bookmark.price}</h1>
        <button onclick="handleDeleteBookmark('${bookmark.id}')" 
          class=" text-white bg-red-500 px-2 py-1 rounded">❌</button>
      </div>
    `
  })

 
  bookmarkContainer.innerHTML += `
    <div class="border-t mt-2 pt-2 text-right font-bold flex justify-between">
    <h2>Total: </h2>
    <p>৳ ${total.toFixed(2)} </p>
      
    </div>
  `
}


const handleDeleteBookmark = (bookmakrId) => {
  const filteredBookmarks = bookmakrs.filter(bookmark => bookmark.id !== bookmakrId)
  bookmakrs = filteredBookmarks
  showBookMarks(bookmakrs)
}


loadCategory()
