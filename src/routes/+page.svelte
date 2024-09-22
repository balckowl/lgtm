<script lang="ts">
	import type { LGTM } from '$lib/microcms/client';
	import type { PageData } from './$types';
	export let data: PageData;
	let { contents } = data;

	function getRandomElements(arr: LGTM[], count: number) {
		const shuffled = arr.sort(() => 0.5 - Math.random());
		return shuffled.slice(0, count);
	}

    contents = getRandomElements(contents, 8);

	const copyToClipBoard = (imageUrl: string) => {
		const copyText = `![](${imageUrl})`;

		navigator.clipboard
			.writeText(copyText)
			.then(() => {
				alert('マークダウンがコピーされました！');
			})
			.catch((err) => {
				console.error('マークダウンのコピーに失敗しました。: ', err);
			});
	};
</script>

<svelte:head>
	<title>LGTMagic</title>
	<meta name="description" content="LGTM画像を掲載するサイト" />
	<meta property="og:url" content="https://lgtmagic.vercel.app" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="LGTMagic" />
	<meta property="og:description" content="LGTM画像を掲載するサイト" />
	<meta property="og:site_name" content="LGTMagic" />
	<meta property="og:image" content="https://lgtmagic.vercel.app/ogp.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="LGTMagic" />
	<meta name="twitter:description" content="LGTM画像を掲載するサイト" />
	<meta name="twitter:image" content="https://lgtmagic.vercel.app/ogp.png" />
</svelte:head>

<div class="flex justify-center min-h-[calc(100vh-80px-60px)] items-center">
	<div class="w-[70%]">
		<div class="grid grid-cols-5 grid-rows-5 gap-1">
			<button
				class="row-span-3 col-start-4 row-start-3 overflow-hidden"
				on:click={() => copyToClipBoard(contents[0]?.imageUrl.url)}
			>
				<img
					src={contents[0]?.imageUrl.url}
					alt=""
					class="w-full h-full object-cover hover:scale-[105%] transition"
				/>
			</button>
			<button
				class="col-span-2 row-span-3 col-start-1 row-start-1 overflow-hidden"
				on:click={() => copyToClipBoard(contents[1]?.imageUrl.url)}
			>
				<img
					src={contents[1]?.imageUrl.url}
					alt=""
					class="w-full h-full object-cover hover:scale-[105%] transition"
				/>
			</button>
			<button
				class="row-span-2 col-start-1 row-start-4 overflow-hidden"
				on:click={() => copyToClipBoard(contents[2]?.imageUrl.url)}
			>
				<img
					src={contents[2]?.imageUrl.url}
					alt=""
					class="w-full h-full object-cover hover:scale-[105%] transition"
				/>
			</button>
			<button
				class="col-span-2 row-span-2 col-start-4 row-start-1 overflow-hidden"
				on:click={() => copyToClipBoard(contents[3]?.imageUrl.url)}
			>
				<img
					src={contents[3]?.imageUrl.url}
					alt=""
					class="w-full h-full object-cover hover:scale-[105%] transition"
				/>
			</button>
			<button
				class="col-span-2 row-span-2 col-start-2 row-start-4 overflow-hidden"
				on:click={() => copyToClipBoard(contents[4]?.imageUrl.url)}
			>
				<img
					src={contents[4]?.imageUrl.url}
					alt=""
					class="w-full h-full object-cover hover:scale-[105%] transition"
				/>
			</button>
			<button
				class="row-span-3 col-start-3 row-start-1 overflow-hidden"
				on:click={() => copyToClipBoard(contents[5]?.imageUrl.url)}
			>
				<img
					src={contents[5]?.imageUrl.url}
					alt=""
					class="w-full h-full object-cover hover:scale-[105%] transition"
				/>
			</button>
			<button
				class="row-span-2 col-start-5 row-start-3 overflow-hidden"
				on:click={() => copyToClipBoard(contents[6]?.imageUrl.url)}
			>
				<img
					src={contents[6]?.imageUrl.url}
					alt=""
					class="w-full h-full object-cover hover:scale-[105%] transition"
				/>
			</button>
			<button
				class="col-start-5 row-start-5 overflow-hidden"
				on:click={() => copyToClipBoard(contents[7]?.imageUrl.url)}
			>
				<img
					src={contents[7]?.imageUrl.url}
					alt=""
					class="w-full h-full object-cover hover:scale-[105%] transition"
				/>
			</button>
		</div>
	</div>
</div>
