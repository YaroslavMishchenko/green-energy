// Load your images on page-load
function preloader() {
    const imagesList = [
        "./img/img-1.jpg",
        "./img/img-2.jpg",
        "./img/img-3.jpg"
    ];
    const images = [];
    for (let i = 0; i < imagesList.length; i++) {
        images[i] = new Image();
        images[i].src = imagesList[i];
    }

    // Images ready to be used:
    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};
window.addEventListener("load", preloader);



// reference to active HTML elements
const resources = {
    btns: document.querySelectorAll('.controls ul li button'),
    dc: document.querySelector('.dynamic-content')
};


// database
const contents = {
    c1: {
        heading: 'Wind energy',
        bodyText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at nulla at felis pellentesque dignissim in at neque. Aenean ut ipsum arcu. Sed vel est ac sapien congue condimentum. Donec ante mauris, iaculis eget ex a, lacinia sagittis justo. Sed tincidunt, nibh id convallis faucibus, felis magna pretium lorem, vel vehicula sapien dui eu purus. Maecenas lacinia pellentesque turpis, in euismod felis mattis in. Nam non nisl eget enim tempor dignissim. Fusce vehicula pulvinar erat, a gravida lacus. Praesent at lacus non nibh viverra sagittis quis non lectus.',
        imageUrl: './img/img-1.jpg',
        imageAlt: 'Wind energy img'
    },
    c2: {
        heading: 'Solar energy',
        bodyText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at nulla at felis pellentesque dignissim in at neque. Aenean ut ipsum arcu. Sed vel est ac sapien congue condimentum. Donec ante mauris, iaculis eget ex a, lacinia sagittis justo. Sed tincidunt, nibh id convallis faucibus, felis magna pretium lorem, vel vehicula sapien dui eu purus. Maecenas lacinia pellentesque turpis, in euismod felis mattis in. Nam non nisl eget enim tempor dignissim. Fusce vehicula pulvinar erat, a gravida lacus. Praesent at lacus non nibh viverra sagittis quis non lectus.',
        imageUrl: './img/img-2.jpg',
        imageAlt: 'Solar energy img'
    },
    c3: {
        heading: 'Thermal energy',
        bodyText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at nulla at felis pellentesque dignissim in at neque. Aenean ut ipsum arcu. Sed vel est ac sapien congue condimentum. Donec ante mauris, iaculis eget ex a, lacinia sagittis justo. Sed tincidunt, nibh id convallis faucibus, felis magna pretium lorem, vel vehicula sapien dui eu purus. Maecenas lacinia pellentesque turpis, in euismod felis mattis in. Nam non nisl eget enim tempor dignissim. Fusce vehicula pulvinar erat, a gravida lacus. Praesent at lacus non nibh viverra sagittis quis non lectus.',
        imageUrl: './img/img-3.jpg',
        imageAlt: 'Thermal energy img'
    }
};

// loading initial content (on the page load)
resources.dc.innerHTML = `<h2>${contents.c1.heading}</h2>
                         <figure>
                         <img src="${contents.c1.imageUrl}" alt="${contents.c1.imageAlt}" />
                         </figure>
                         <p>${contents.c1.bodyText}</p>
                         `;


// updating content based on the button click
let handleClick = e => {
    // fetch the reference to the current button
    let currentButton = e.target;
    // extract the value of data attribute
    let currentContent = currentButton.dataset.btn;

    // update the content
    resources.dc.innerHTML = `<h2>${contents[currentContent].heading}</h2>
                            <figure>
                            <img src="${contents[currentContent].imageUrl}" alt="${contents[currentContent].imageAlt}" />
                            </figure>
                            <p>${contents[currentContent].bodyText}</p>
                            `;
}

// register all 3 buttons 
for (let btn of resources.btns) {
    btn.addEventListener('click', handleClick);
}