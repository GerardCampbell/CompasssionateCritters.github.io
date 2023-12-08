const animals = [
    { name: 'Kaneki', type: 'cat', description: 'Very cuddly cat. Loves to curl up on your chest or lap. Not bothered by people or dogs!', imageUrl: 'https://www.catchat.org/images/page-pix/direct-cat-in-shelter.jpg' },
    { name: 'Bill', type: 'dog', description: 'An older dog but still very playful. Constantly wanting to chase a ball or other dogs', imageUrl: 'https://www.lastchanceanimalrescue.co.uk/images/thumb/dog_6762_194109_9368.jpg' },
    { name: 'Bart', type: 'dog', description: 'Curvey loveable dog. Bart loves to lay around and get spoiled. Seems to be house trained and knows a few tricks!', imageUrl: 'https://www.petplace.com/article/dogs/vet-qa-parent/vet-qa/media_17563fbaf9d9116a2cad251c080b8046c98b1c0a2.jpeg?width=1500&format=webply&optimize=low' },
    { name: 'Bullet', type: 'dog', description: 'A young grey hound who loves to run. Very active dog who would need an active family!', imageUrl: 'https://lirp.cdn-website.com/8e60881f/dms3rep/multi/opt/teagan+main-640w.jpg' },
    { name: 'Princess', type: 'cat', description: 'A beautiful feline. Dont understand how she could be left alone. After working with our team is ready to find a family to love again!', imageUrl: 'https://www.oasisanimalrescue.ca/wp-content/uploads/2020/08/spoutchi4.jpeg' },
    { name: 'Axel', type: 'cat', description: 'This old boy just wants a family to relax with. Looking for a chilled home for this one!', imageUrl: 'https://www.zooplus.co.uk/magazine/wp-content/uploads/2021/03/black-cat.jpeg' },
    { name: 'Dennis', type: 'other', description: 'This little rabbit has a out going personality. Rescued from an abandoned building, its clear that this one used to be party of a family with young children!', imageUrl:'https://service.sheltermanager.com/asmservice?account=fb0343&method=animal_image&animalid=2820'},
    { name: 'Lola', type: 'other', description: 'Lola was a shy bird when we first took her in. An older lady owned her but was unable to take care of her any longer.', imageUrl:'https://www.parrotsanctuary.ca/img/index/sammy.jpg'}
];

function generateAnimalProfiles(animalTypeFilter) {
    const animalContainer = document.getElementById("animal-container");
    animalContainer.innerHTML = '';

    animals.filter(animal => animalTypeFilter === 'all' || animal.type === animalTypeFilter)
        .forEach(animal => {
            const profileDiv = document.createElement("div");
            profileDiv.classList.add("animal-profile");

            const image = document.createElement("img");
            image.src = animal.imageUrl;
            image.alt = animal.name;
            image.classList.add("animal-image");

            const name = document.createElement("h2");
            name.textContent = animal.name;
            name.classList.add("animal-name");

            const description = document.createElement("p");
            description.textContent = animal.description;
            description.classList.add("animal-description");

            const adoptButton = document.createElement("button");
            adoptButton.textContent = "Adopt Me!";
            adoptButton.onclick = function () {
                window.location.href = "CompassionateCrittersAdoptionForm.html";
            };

            profileDiv.appendChild(image);
            profileDiv.appendChild(name);
            profileDiv.appendChild(description);
            profileDiv.appendChild(adoptButton);

            animalContainer.appendChild(profileDiv);
        });
}

function applyFilter() {
    const filterSelect = document.getElementById("filter");
    const selectedFilter = filterSelect.value;
    generateAnimalProfiles(selectedFilter);
}

window.onload = function () {
    generateAnimalProfiles('all');
};


var newsArticles = [
    {
        title: "Animal Charities to share in funding Pot!",
        link: "https://www.independent.ie/regionals/donegal/news/three-donegal-animal-charities-to-share-in-funding-pot-of-115000/a565106627.html",
        image: "https://s.yimg.com/fz/api/res/1.2/t7lAEINJq4GonruEwfW9vg--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD0zODQ7cT04MDt3PTUxMg--/https://s.yimg.com/am/60d/62025981884dc1da61a822a1215d8481",
        content: "Three Donegal animal charities have been awarded funding as animal welfare charities throughout the country receive the highest level of funding ever."
    },
    {
        title: "Dog left tied to gates of Newport RSPCA centre.",
        link: "https://www.bbc.co.uk/news/uk-wales-67637111",
        image: "https://ichef.bbci.co.uk/news/976/cpsprodpb/4635/production/_131937971_newportabandonmentdec23.jpg.webp",
        content: "A young dog was left tied to the gates of an RSPCA centre after it was abandoned in the middle of the night."
    },
    {
        title: "Deaf Dog who learnt Sign language still needs a Forever home!",
        link: "https://news.sky.com/story/deaf-dog-learning-to-understand-sign-language-seeks-forever-home-13024852",
        image: "https://e3.365dm.com/23/12/1600x900/skynews-dog-scottish-spca_6385317.jpg?20231207112839",
        content: "Gromit, a deaf dog who has learnt to understand sign language is still looking for a home. He has been in the care of the Scotish SPCA for 142 days."
    },
    {
        title: "Sign up for our yearly fundraising Fun walk!",
        link: "CompassionateCrittersFunWalkForm.html",
        image: "https://bestfundraisingideas.com/wp-content/uploads/Best-Fundraising-Ideas_Dog-Walk-Fundraiser_Feature.jpg",
        content: "Please sign up for our yearly Fun walk! All dogs welcome! All proceeds will help with rehoming and rehabilitating dogs and cats!"
    }

];

var newsList = document.getElementById("newsList");
newsArticles.forEach(function (article) {
    var listItem = document.createElement("li");
    listItem.innerHTML = `
        <h3><a href="${article.link}" target="_blank">${article.title}</a></h3>
        <img src="${article.image}" alt="${article.title}">
        <p>${article.content}</p>
    `;
    newsList.appendChild(listItem);
});
