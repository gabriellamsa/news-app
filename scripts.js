const apiKey = process.env.NEWS_API_KEY;
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

async function fetchNews() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayNews(data.articles); // começamos por aqui 
  } catch (error) {
    console.error('There was an error!', error);
  }
}

// função para exibir as notícias
function displayNews(articles) {
  const newsDiv = document.querySelector('#news');
  for (const article of articles) {
    const articleDiv = document.createElement('div');
    articleDiv.className = 'card mb-3'; // add bootstrap

   // cria e anexa uma "matéria" ao articleDiv 
   const title = document.createElement('h4');
   title.textContent = article.title;
   title.className = 'card-title'; // bootstrap
   articleDiv.appendChild(title);

   // cria e anexa uma descrição ao articleDiv
   const description = document.createElement('p');
   description.textContent = article.description;
   description.className = 'card-text'; // bootstrap
   articleDiv.appendChild(description);

   // cria e anexa uma imagem ao articleDiv
   const image = document.createElement('img');
   image.src = article.urlToImage;
   image.className = 'card-img-top'; // bootstrap
   articleDiv.appendChild(image);

   //cria e anexa um link para o artigo completo ao articleDiv
   const link = document.createElement('a');
   link.href = article.url;
   link.textContent = 'Read more';
   link.className = 'btn btn-primary'; // bootstrap
   articleDiv.appendChild(link);

   // anexa o articleDiv ao newsDiv
   newsDiv.appendChild(articleDiv);
  }
}

fetchNews();