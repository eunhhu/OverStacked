<script lang="ts">
    import { VStack } from "@overstacked/ui/svelte";
    import { treaty } from "@elysiajs/eden";

    const client = treaty("localhost:8000")
</script>

<VStack gap="lg" ph="lg" m="xl" r="lg" bgColor="surface" borderColor="outline">
    <h1>Hello World</h1>
    <h2>Hello World</h2>
    <h3>Hello World</h3>
    <h4>Hello World</h4>
    <h5>Hello World</h5>
    <h6>Hello World</h6>
</VStack>

<style>
</style>