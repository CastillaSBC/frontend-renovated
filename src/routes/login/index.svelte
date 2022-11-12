<script>
  // Normal Data
  let username = "";
  let password = "";


  let body = "";

  // Import stuff!
  import { url } from "./../../stores/url";
  import { user } from "./../../stores/user";
  import { goto } from "$app/navigation";

  // Handle Submit
  const handleSubmit = (/** @type {{ preventDefault: () => void; }} */ e) => {
    console.log("Logging...");
    e.preventDefault();
    if (username.length > 0 && password.length > 0) {
      fetch(url + "/user/login", {
        method: "POST",
        credentials: "include",
        headers: {
          credentials: "same-origin",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      }).then((res) => res.json())
      .then((data) => {
  
        user.set(data.user);
        body = "Welcome back, " + data.user.username + "!";
        
        goto('/profile/me')
      })
    }
  };
</script>

<div class="fixed flex items-center justify-center text-black w-screen h-screen ">
  <div class="border-2  w-[10cm] p-5 bg-white ">
    <div class="text-2xl text-center ">LOGIN</div>
    <div class="text-lg">Username</div>
    <input
      bind:value={username}
      type="text"
      placeholder="jake293, RickAstley20..."
      class="px-2 py-0.5 w-full outline-none bg-transparent border "
    />
    <div class="mt-2 text-lg">Password</div>
    <input
      bind:value={password}
      type="password"
      placeholder=""
      class="px-2 py-0.5 outline-none bg-transparent border w-full"
    />
    <div class="flex items-center gap-2">
      <div
        class=" mt-2 border w-max px-2 py-0.5 cursor-pointer"
        on:click={handleSubmit}
      >
        Login
      </div>
      <div
        class=" mt-2 border w-max px-2 py-0.5 cursor-pointer"
        on:click={() => goto("/register")}
      >
        Register
      </div>
    </div>
  </div>
</div>


