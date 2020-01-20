<template>
	<Layout>

		<!--
			Ray, while here, show folks what happens on errors, like $page.filme.node.title, etc
			white screen of death
		-->
		<h2>{{ $page.film.title }}</h2>
		<p>
			<b>Released: {{ $page.film.release_date }}</b>
		</p>

		<p>
			{{ $page.film.content }}
		</p>

	</Layout>
</template>

<script>
export default {
	name: 'Film'
}
</script>

<page-query>
query ($id: ID!) {
  film(id: $id) {
  	id
    title
    content
	release_date
  }
}
</page-query>

