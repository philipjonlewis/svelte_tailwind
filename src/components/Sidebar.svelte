<script>
  let isMenuOpen = false;
  // your script goes here
  const menuHandler = () => {
    isMenuOpen = !isMenuOpen;
    console.log(isMenuOpen);
  };
</script>

<main class="bg-white md:flex md:justify-end">
  <nav class="text-right">
    <div class="border-b ">
      <h1 class="font-bold uppercase p-1 flex justify-between items-center">
        <a href="/" class="hover:text-red-500">Food Ninja</a>
        <div class="px-4 cursor-pointer md:hidden" on:click={menuHandler}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </h1>
    </div>
    <ul
      class="font-normal md:flex md:flex-col text-sm mt-6  "
      class:hidden={!isMenuOpen}
    >
      <li>
        <a href="/" class="link "
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg><span class="self-center">Home</span></a
        >
      </li>
      <li>
        <a href="/" class="link"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg><span>About</span></a
        >
      </li>
      <li>
        <a href="/" class="link"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg><span>Contact</span></a
        >
      </li>
    </ul>
  </nav>
</main>

<!-- markup (zero or more items) goes here -->
<style>
  .mobile-menu {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  /* your styles go here */
</style>
