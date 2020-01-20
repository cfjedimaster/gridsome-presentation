// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require('axios');
const slugify = require('slugify');

module.exports = function (api) {
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  })

  api.createPages(async ({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/

    const { data } = await axios.get('https://swapi.co/api/films');

    for (const item of data.results) {

      createPage({
        path:'/film/' + slugify(item.title, { lower:true }),
        component:'./src/templates/Film.vue',
        context: {
          id: item.episode_id,
          title: item.title,
          content: item.opening_crawl,
          release_date: item.release_date,
          director: item.director,
          producer: item.producer  
        }
      });
    }

  })
}
