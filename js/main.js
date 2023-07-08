const elUrlShortener = document.querySelector('.url-shortener');
const elUrlShortenerForm = document.querySelector('.js-url-shortener-form');
const elUrlShortenerResults = document.querySelector('.url-shortener__results');

if(elUrlShortenerForm){
    elUrlShortenerForm.addEventListener('submit', function(evt) {
        evt.preventDefault();
    
        elUrlShortenerResults.classList.add('url-shortener__results--open');
    });
    
}

if(elUrlShortener){
    elUrlShortener.addEventListener('click', function(evt){
        if (evt.target.matches('.js-copy-short-link-button')){
            // change button text
            evt.target.textContent = 'Copied';
            // change button bg color
            evt.target.classList.add('url-shortener__copy-button--copied');
            // copy short link
            navigator.clipboard.writeText(evt.target.previousElementSibling.textContent);
            // reset 1 sec
            setTimeout(function(){
                evt.target.textContent = 'Copy';
                evt.target.classList.remove('url-shortener__copy-button--copied')
            }, 1000);
        }
    });
}