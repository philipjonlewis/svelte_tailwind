<script>
  export let food;
  // your script goes here
</script>

<main>
  <div class="card">
    <img
      src="{food.img}.jpeg"
      alt="stew"
      class="w-full h-32 sm:h-48 object-cover"
    />

    <div class="m-1">
      <span class="font-bold">{food.title}</span>
      <span class="block text-gray-500 text-sm">Recipe by mario</span>
    </div>

    <div class="badge">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span class="self-center ml-0.5">25 mins</span>
    </div>
  </div>
</main>

<!-- markup (zero or more items) goes here -->
<style>
  /* your styles go here */
</style>
