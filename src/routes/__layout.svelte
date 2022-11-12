<script>
  import { user } from "./../stores/user";
  import "../app.css";
  import { goto } from "$app/navigation";
  import { url } from "./../stores/url";
  async function logout() {
    const res = await fetch(`${url}/user/logout`, {
      method: "POST",
      credentials: "include",
      headers: {
        credentials: "same-origin",
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    user.set({
      id: 0,
      username: "",
      verified: false,
      isAdmin: false,
      isBanned: false,
      streak: 0,
    });
    goto("/");
  }
</script>

<svelte:head>
  <title>Anomia</title>
  <meta name="description" content="Anomia is the epicenter of the SBC." />
</svelte:head>

<div class="bg-black p-1">
  <div class="mx-20 text-white items-center p-1 text-sm flex justify-end">
    {#if $user.id != 0}
      <div class="flex items-center gap-2">
        <a href="/profile/me">
          <div class="">Welcome, {$user.username}</div>
        </a>
        <div on:click={() => logout()} class="cursor-pointer hover:underline">
          Logout
        </div>
      </div>
    {:else}
      <div class="flex items-center gap-2">
        <a href="/login"> <div class="">Login</div> </a>
        <a href="/register">
          <div class="bg-[#7ba60d] py-[3px] px-[8px]">Register</div>
        </a>
      </div>
    {/if}
  </div>
</div>
<div class="p-6 bg-gradient-to-t from-blue-900 to-blue-300 flex items-center gap-2">
  <div class="text-6xl font-serif font-bold">ANOMIA</div>
  <div class="w-[300px] font-bold text-lg whitespace-pre-line">
    The Sandbox Community Hub
    A Private den of programmers.
  </div>
</div>
<div class=" bg-blue-900">
  <div class="navbar">
    <a href="/"> <div class="">Homepage</div> </a>
    <a href="/news"> <div class="">News</div> </a>
    <a href="/forums"> <div class="">Forums</div> </a>
    <a href="/sandboxes"> <div class="">Sandboxes</div> </a>
    <a href="https://discord.gg/JVpFdV8Knp" target="_blank">
      <div class="">Discord Server</div>
    </a>
  </div>
</div>
<slot></slot>
<!--<div class="navbar">
  <div class="navbar-section">
    <div class="navbar-brand">ANOMIA</div>
    <a href="/"> <div class="">Homepage</div> </a>

    <a href="/news"> <div class="">News</div> </a>

    <a href="/forums"> <div class="">Forums</div> </a>

    <a href="/sandboxes"> <div class="">Sandboxes</div> </a>
    <a href="https://discord.gg/JVpFdV8Knp" target="_blank">
      <div class="">Discord Server</div>
    </a>
  </div>
  {#if $user.id != 0}
    <div class="navbar-section">
      <div class="mr-5 ">
        Welcome, <a href="/profile/me" class="font-bold">{$user.username}</a>
      </div>
      <div on:click={() => logout()} class="cursor-pointer hover:underline">
        Logout
      </div>
    </div>
  {:else}
    <div class="navbar-section">
      <a href="/login"> <div class="">Login</div> </a>
      <a href="/register"> <div class="bg-green-500 p-1">Register</div> </a>
    </div>
  {/if}
</div>

<slot />
-->
