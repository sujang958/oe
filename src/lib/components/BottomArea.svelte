<script>

    import { twMerge } from "tailwind-merge"

</script>
<section class="fixed left-0 bottom-4 w-full flex flex-col items-center">
  <div class={twMerge("max-w-xl px-4 w-full flex flex-row items-center gap-x-3", $$props.class)}>
    <slot />
  </div>
</section>