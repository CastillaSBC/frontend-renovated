<script>
  import { user } from "./../stores/user";
  import "../app.css";
</script>

<div class="flex items-center justify-between p-4">
  <div class="flex items-center gap-2">
    <div class="mr-5 text-xl">ANOMIA</div>
    <a href="/"> <div class="">Homepage</div> </a>

    <a href="/news"> <div class="">News</div> </a>

    <a href="/forums"> <div class="">Forums</div> </a>

    <a href="/sandboxes"> <div class="">Sandboxes</div> </a>
    <a href="https://discord.gg/JVpFdV8Knp" target="_blank">
      <div class="">Discord Server</div>
    </a>
  </div>
  {#if $user.id != 0}
    <div class="flex items-center gap-2">
      <div class="mr-5 ">
        Welcome, <a href="/profile/me" class="font-bold">{$user.username}</a>
      </div>
      <div class="cursor-pointer hover:underline">Logout</div>
    </div>
  {:else}
    <div class="flex items-center gap-2">
      <a href="/login"> <div class="">Login</div> </a>
      <a href="/register"> <div class="">Register</div> </a>
    </div>
  {/if}
</div>

<slot />
