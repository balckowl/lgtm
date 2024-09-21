<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	const { contents } = data;

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
	}
</script>

<div class="flex justify-center min-h-[calc(100vh-80px-60px)] items-center">
	<div class="w-[70%]">
		<div class="grid grid-cols-5 grid-rows-5 gap-1">
			<button class="row-span-3 col-start-4 row-start-3 overflow-hidden" on:click={() => copyToClipBoard(contents[0]?.imageUrl.url)}>
				<img src={contents[0]?.imageUrl.url} alt="" class="w-full h-full object-cover hover:scale-[105%] transition" />
            </button>
			<button class="col-span-2 row-span-3 col-start-1 row-start-1 overflow-hidden" on:click={() => copyToClipBoard(contents[1]?.imageUrl.url)}>
				<img
					src={contents[1]?.imageUrl.url}
					alt=""
					class="w-full h-full object-cover hover:scale-[105%] transition"
				/>
            </button>
			<button class="row-span-2 col-start-1 row-start-4 overflow-hidden" on:click={() => copyToClipBoard(contents[2]?.imageUrl.url)}>
				<img
					src={contents[2]?.imageUrl.url}
					alt=""
					class="w-full h-full object-cover hover:scale-[105%] transition"
				/>
            </button>
			<button class="col-span-2 row-span-2 col-start-4 row-start-1 overflow-hidden" on:click={() => copyToClipBoard(contents[3]?.imageUrl.url)}>
				<img
					src={contents[3]?.imageUrl.url}
					alt=""
					class="w-full h-full object-cover hover:scale-[105%] transition"
				/>
            </button>
			<button class="col-span-2 row-span-2 col-start-2 row-start-4 overflow-hidden" on:click={() => copyToClipBoard(contents[4]?.imageUrl.url)}>
				<img
					src={contents[4]?.imageUrl.url}
					alt=""
					class="w-full h-full object-cover hover:scale-[105%] transition"
				/>
            </button>
			<button class="row-span-3 col-start-3 row-start-1 overflow-hidden" on:click={() => copyToClipBoard(contents[5]?.imageUrl.url)}>
				<img
					src={contents[5]?.imageUrl.url}
					alt=""
					class="w-full h-full object-cover hover:scale-[105%] transition"
				/>
            </button>
			<button class="row-span-2 col-start-5 row-start-3 overflow-hidden" on:click={() => copyToClipBoard(contents[6]?.imageUrl.url)}>
				<img
					src={contents[6]?.imageUrl.url}
					alt=""
					class="w-full h-full object-cover hover:scale-[105%] transition"
				/>
            </button>
			<button class="col-start-5 row-start-5 overflow-hidden" on:click={() => copyToClipBoard(contents[7]?.imageUrl.url)}>
				<img
					src={contents[7]?.imageUrl.url}
					alt=""
					class="w-full h-full object-cover hover:scale-[105%] transition"
				/>
            </button>
		</div>
	</div>
</div>
