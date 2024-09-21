<script>
	import '../app.css';
	import { ModeWatcher } from "mode-watcher";
	import ModeToggle from '$lib/components/mode-toggle.svelte';
</script>

<header class="h-[80px] border-b">
	<div class="w-[70%] mx-auto flex justify-between h-full items-center">
		<a href="/" class="font-bold text-[25px]">
			<h1>LGTMagic</h1>
		</a>
		<ModeToggle />
	</div>
</header>

<ModeWatcher />
<slot />

<footer class="border-t h-[60px]">
	<div class="container mx-auto h-full flex items-center justify-center">
		<p class="text-[10px]">&copy; LGTMagic 2024</p>
	</div>
</footer>
