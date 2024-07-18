<script lang="ts">
  import { twMerge } from "tailwind-merge"
</script>

<header class="fixed left-0 top-6 w-full flex flex-col items-center">
  <div class={twMerge("max-w-xl px-4 w-full flex flex-row items-center gap-x-3", $$props.class)}>
    <slot />
  </div>
</header>
