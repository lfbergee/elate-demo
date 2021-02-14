<script>
    import { Router, Route } from "svelte-routing";
    import Consultant from "./pages/Consultant.svelte";
    import Home from "./pages/Home.svelte";
    import Sales from "./pages/Sales.svelte";
    import Us from "./pages/us.svelte";

    export let url = "";
</script>

<Router {url}>
    <Route path="konsulent" component={Consultant} />
    <Route path="salg" component={Sales} />
    <Route path="oss" component={Us} />
    <Route path="/">
        <Home />
    </Route>
</Router>
