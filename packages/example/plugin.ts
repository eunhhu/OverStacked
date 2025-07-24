import Elysia from "elysia";
import { ExampleService } from "./service";

interface ExamplePluginOptions {
    prefix?: string
}

export const examplePlugin = ({
    prefix = "example"
}: ExamplePluginOptions) => new Elysia({
    prefix
})
.decorate("exampleService", new ExampleService())
.onBeforeHandle(({ exampleService }) => {
    console.log(exampleService)
})