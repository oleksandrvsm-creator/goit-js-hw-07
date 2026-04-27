const categoriesList = document.querySelector('#categories');
const categoriesItems = categoriesList.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesList.children.length}`);
categoriesItems.forEach(item => {
    console.log(`Category: ${item.children[0].textContent}`)
    console.log(`Elements: ${item.children[1].children.length}`)
})