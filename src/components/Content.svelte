<script>
  import Card from "../lib/Card.svelte";
  // your script goes here

  let recipe = [
    { id: 1, img: "curry", title: "The Best Curry Recipe" },
    {
      id: 2,
      img: "noodles",
      title: "Noodle? more like Yesdle!",
    },
    { id: 3, img: "stew", title: "Oh My My Stew!" },
  ];
</script>

<main class=" px-8 md:px-16">
  <div>
    <h4 class="font-bold text-xl mt-12 pb-1 border-b border-gray-200">
      Latest Recipes
    </h4>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
      {#each recipe as food (food.id)}
        <Card {food} />
      {/each}
    </div>

    <div class="flex justify-center">
      <div
        class="bg-secondary-100 text-secondary-200 button hover:shadow-inner transform hover:scale-125 transition ease-out hover:bg-opacity-50"
      >
        Load More
      </div>
    </div>
  </div>

  <h4 class="font-bold text-xl mt-12 pb-1 border-b border-gray-200">
    Most Popular Recipes
  </h4>
</main>

<!-- markup (zero or more items) goes here -->
<style>
  /* your styles go here */
</style>
