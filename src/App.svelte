<script>
  import Sidebar from "./components/Sidebar.svelte";
  import Navbar from "./components/Navbar.svelte";
  import Content from "./components/Content.svelte";
</script>

<main class="text-gray-600 font-body">
  <div class="grid md:grid-cols-3">
    <div class="md:col-span-1 ">
      <Sidebar />
    </div>
    <div class="md:col-span-2 bg-slate-50">
      <Navbar />
      <Content />
    </div>
  </div>
</main>

<style>
</style>
