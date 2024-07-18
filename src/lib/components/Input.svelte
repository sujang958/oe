<script>
  import { twMerge } from "tailwind-merge"

  export let value = ""
</script>

<input
  on:change
  type="text"
  name=""
  id=""
  {...$$restProps}
  bind:value={value}
  class={twMerge("rounded-lg px-2.5 py-1 border-neutral-300 text-base placeholder-neutral-400", $$restProps.class)}
/>
