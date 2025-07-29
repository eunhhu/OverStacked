<script lang="ts">
    import { Button, VStack, Input, Text, TextArea, HStack, Checkbox } from "@overstacked/ui/svelte";
    import { api } from "../lib/api";
    import { onMount } from "svelte";
    
    onMount(() => {
        api.get().then(res => console.log(res))
    })
</script>

<HStack p="xl" w="full" h="full">
    <VStack gap="lg" ph="lg" p="lg"r="lg" borderColor="outline" scrollable>
        <Text font="displayLarge">Hello World</Text>
        <Text font="displayMedium">Hello World</Text>
        <Text font="displaySmall">Hello World</Text>
        <Text font="headlineLarge">Hello World</Text>
        <Text font="headlineMedium">Hello World</Text>
        <Text font="headlineSmall">Hello World</Text>
        <Text font="titleLarge">Hello World</Text>
        <Text font="titleMedium">Hello World</Text>
        <Text font="titleSmall">Hello World</Text>
        <Text font="bodyLarge">Hello World</Text>
        <Text font="bodyMedium">Hello World</Text>
        <Text font="bodySmall">Hello World</Text>
        <Button variant="primary" p="md" r="md">Button</Button>
        <Button variant="secondary" p="md" r="md">Button</Button>
        <Button variant="outline" p="md" r="md">Button</Button>
        <Input placeholder="Search..." variant="fill" p="md" r="md"/>
        <Input placeholder="Search..." variant="outline" p="md" r="md"/>
        <Checkbox outlineColor="outline" fillColor="primary" r="sm"/>
        <TextArea placeholder="Search..." variant="outline" p="md" r="md" cols={50} rows={10}/>
    </VStack>
</HStack>

<style>
</style>