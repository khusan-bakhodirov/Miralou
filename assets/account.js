document.querySelectorAll('.account_sidebar-btn[data-key]').forEach((btn) => {
    btn.addEventListener('click', () => {   
       document.querySelectorAll('.account_sidebar-btn[data-key]').forEach((el) => {
           el.classList.remove('active')
       })
       btn.classList.add('active')
       document.querySelectorAll('.account_main > div').forEach((el, index) => {
            if (btn.getAttribute('data-key') == index) {
                el.classList.remove('hidden')
            } else {
                
                el.classList.add('hidden')
            }
        })
    })
})
