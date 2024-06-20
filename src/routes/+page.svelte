<script>
  import Button from "$lib/components/button.svelte"
</script>

<div class="flex flex-col p-16">
  <p class="text-3xl font-bold">My wordlists</p>
  <div class="py-1"></div>
  <div class="py-6 flex flex-row items-center gap-x-2">
    <Button
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="w-4 h-4 stroke-neutral-800"
        ><path d="m21 16-4 4-4-4" /><path d="M17 20V4" /><path d="m3 8 4-4 4 4" /><path
          d="M7 4v16"
        /></svg
      >Last praticed
    </Button>
  </div>
</div>
