<script lang="ts">
    let { title, color, bg, class: className, borderColor } = $props()
</script>

<div class="general-title">
    <div style={`clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);border-color: ${borderColor};`} class={`${className} border-[.5vw] text-nowrap opacity-0`} >
        <div style={`background-color: ${bg};`} class="pb-5 md:px-14 px-3 md:pt-0 pt-3">
            <h2 style={`color: ${color};`} class="">{title}</h2>
        </div>
    </div>
</div>

<style>
    
</style>
