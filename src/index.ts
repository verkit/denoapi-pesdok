import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./routes/router.ts";
import { errorHandler } from "./exceptions/errorHandler.ts";

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());
app.use(errorHandler);

await app.listen({ port: 8000 });