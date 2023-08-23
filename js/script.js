document.addEventListener('click', documentClick);
let iconMenu = document.querySelector("#iconMenu");
function documentClick(e){
    const targetItem = e.target;
    if(targetItem.closest('.icon.menu') || targetItem == iconMenu){
        document.documentElement.classList.toggle('menu-open');
    }
}