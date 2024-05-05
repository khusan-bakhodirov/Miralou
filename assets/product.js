const description_btn = document.querySelector('.btn_description');
const product_description = document.querySelector('.product_description');
const btn_icon = document.querySelector('.product_btn-icon');
const modal = document.querySelector('.product_modal')
const images = document.querySelectorAll('.product_img');
const overlay = document.querySelector('.overlay');
const close_btn = document.querySelector('.close');
const product_variants = document.querySelectorAll('.product_variant');



description_btn.addEventListener('click', () => {
    product_description.classList.toggle('active');
    btn_icon.classList.toggle('active');
})


images.forEach(image => {
    image.addEventListener('click', () => {
        modal.classList.add('active');
        overlay.classList.add('active');
        modal.src = image.src
    })
})

close_btn.addEventListener('click', () => {
    modal.classList.remove('active');
    overlay.classList.remove('active');
})

overlay.addEventListener('click', () => {
    modal.classList.remove('active');
    overlay.classList.remove('active');
})


product_variants.forEach((variant, index) => {
    if(index == 0) {
        variant.querySelector('input').setAttribute('name', 'id')
        variant.classList.add('selected_variant')
    }else{
        variant.querySelector('input').removeAttribute('name')
    }
})
product_variants.forEach(variant => {
    variant.addEventListener('click', () => {
        product_variants.forEach(item => {
            item.querySelector('input').setAttribute('name', '');
            item.classList.remove('selected_variant')
        })
        variant.querySelector('input').setAttribute('name', 'id');
        variant.classList.add('selected_variant')

    })
})

