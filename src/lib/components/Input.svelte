<script>
  import { twMerge } from "tailwind-merge"
</script>

<input
  type="text"
  name=""
  id=""
  {...$$restProps}
  class={twMerge("rounded-lg px-2.5 py-1 border-neutral-300 text-base placeholder-neutral-400", $$restProps.class)}
/>
