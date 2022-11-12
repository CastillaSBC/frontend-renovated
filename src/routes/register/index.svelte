<script>
  import { url } from "./../../stores/url";
  
  import {
    Dialog,
    DialogOverlay,
    DialogTitle,
    DialogDescription,
  } from "@rgossiaux/svelte-headlessui";

  let username = "";
  let password = "";
  let visible = false;

  let title = "";
  let body = "";

  const handleSubmit = (/** @type {{ preventDefault: () => void; }} */ e) => {
    console.log("Logging...");
    e.preventDefault();
    if (username.length > 0 && password.length > 0) {
      fetch(`${url}/user/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      }).then((res) => res.json())
      .then((data) => {
        title = "Attention!";
        body = data.message;
        visible = true
      })
    }
  };
</script>

<div class="fixed flex items-center justify-center w-screen h-screen">
  <div class="w-2/4">
    <div class="text-2xl ">REGISTER on</div>
    <div class="text-lg">Username</div>
    <input
      bind:value={username}
      type="text"
      placeholder="jake293, RickAstley20..."
      class="px-2 py-0.5 outline-none bg-transparent border w-2/4"
    />
    <div class="mt-2 text-lg">Password</div>
    <input
      bind:value={password}
      type="password"
      placeholder=""
      class="px-2 py-0.5 outline-none bg-transparent border w-2/4"
    />
    <div class="flex items-center gap-2">
      <div
        class=" mt-2 border w-max px-2 py-0.5 cursor-pointer"
        on:click={handleSubmit}
      >
        Register
      </div>
      <a href="/login/" class=" mt-2  w-max  py-0.5 cursor-pointer"
        >Already have an account?</a
      >
    </div>
  </div>
</div>

<Dialog translate="yes" open={visible} on:close={() => (visible = false)}>
  <DialogOverlay
    class="text-white font-sans flex items-center justify-center h-screen w-screen fixed bg-black bg-opacity-70"
  >
    <div>
      <DialogTitle class="mb-5 text-2xl font-bold">{title}</DialogTitle>
      <DialogDescription class="mb-5">
        {body}
      </DialogDescription>

      <button class="p-2 bg-white text-black" on:click={() => (visible = false)}>Okay!</button>
    </div>
  </DialogOverlay>
</Dialog>
