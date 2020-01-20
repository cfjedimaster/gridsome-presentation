<template>
  <Layout>

    <h2>Films</h2>
    
    <!-- show this 
    <p> {{ $page }} </p>
    -->
    <ul>
      <li v-for="film in $page.allFilm.edges" :key="film.node.path">
        <g-link :to="film.node.path">{{ film.node.title }}</g-link>
      </li>
    </ul>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Films'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>

<page-query>
  query {
    allFilm {
      edges {
        node {
          title
          path
        }
      }
    }
  }

</page-query>