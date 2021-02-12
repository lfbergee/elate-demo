<script>
    import { Router, Route } from "svelte-routing";
    import Consultant from "./pages/Consultant.svelte";
    import Home from "./pages/Home.svelte";
    import Sales from "./pages/Sales.svelte";

    export let url = "";
</script>

<Router {url}>
    <Route path="konsulent" component={Consultant} />
    <Route path="salg" component={Sales} />
    <Route path="/">
        <Home />
    </Route>
</Router>
