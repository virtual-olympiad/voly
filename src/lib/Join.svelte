<script lang="ts">
	import type { RoomAbstract } from 'src/app';
	import { socket } from '$lib/socket';
	import { onDestroy, onMount } from 'svelte';

	import {
		DataTable,
		Toolbar,
		ToolbarContent,
		ToolbarSearch,
		ToolbarMenu,
		ToolbarMenuItem,
		Button,
		Pagination,
		TextInput,
		Loading
	} from 'carbon-components-svelte';

	import Renew from 'carbon-icons-svelte/lib/Renew.svelte';
	import CaretRight from 'carbon-icons-svelte/lib/CaretRight.svelte';

	import type { DataTableHeader } from 'carbon-components-svelte/types/DataTable/DataTable.svelte';

	import { child, equalTo, get, onValue, orderByChild, query, ref } from 'firebase/database';
	import { rtdb } from './firebase';
	import { app, user, room } from '$lib/sessionStore';
	import { goto } from '$app/navigation';

	let roomHeaders: DataTableHeader[] = [
		{ key: 'name', value: 'Room Name' },
		{ key: 'description', value: 'Description', sort: false },
		{ key: 'mode', value: 'Mode' },
		{ key: 'players', value: 'Players' },
		{ key: 'teamsEnabled', value: 'Teams' },
		{ key: 'join', empty: true }
	];

	let rooms: RoomAbstract[] = [];

	const parseMode = (mode: string) => {
		switch (mode) {
			case 'classic':
				return 'Classic';
			case 'relay':
				return 'Relay';
			case 'deathmatch':
				return 'Deathmatch';
			default:
				return 'Classic';
		}
	};
	
	const publicRoomsListener = onValue(query(ref(rtdb, 'rooms'), orderByChild('roomPublic'), equalTo(true)), async (snapshot) => {		
		rooms = [];
		if (!snapshot.exists()) {
			return;
		}

		snapshot.forEach(childSnap => {
			const childKey = childSnap.key;
    		const room = childSnap.val();

			rooms.push({
				...room,
				id: childKey,
				join: childKey,
				mode: parseMode(room.mode),
				players: (Object.keys(room.users).length ?? '0') + '/' + room.maxUsers,
				teamsEnabled: room.teamsEnabled ? 'Enabled' : 'Disabled'
			});
		});
	});

	onDestroy(publicRoomsListener);

	let pageSize = 5;
	let page = 1;

	let roomCode: string = '';

	let loadingJoin = false;

	const joinRoom = async (code = roomCode) => {
		loadingJoin = true;

		if (code == $room.roomId){
			await goto('/live');
			loadingJoin = false;
			return;
		}

		try {
			const idToken = await $user.user.getIdToken(true);
			socket.emit('join-room', {
				idToken,
				data: {
					code
				}
			});
		} catch (error) {
			console.error(error);
		}
		loadingJoin = false;
	};
</script>

<section class="join-room-panel">
	<article class="roomcode-wrapper">
		<TextInput
			light
			bind:value={roomCode}
			labelText="Join with Code"
			placeholder="Enter room code..."
		/>
		<Button
			disabled={loadingJoin}
			on:click={() => joinRoom()}
			kind="ghost"
			icon={CaretRight}
			style="margin-left: .5rem;"
		>
			Join
		</Button>
	</article>

	<section class="room-listing">
		<div style={`outline: 1px solid #${($app.theme == "g90" ? "ffffff":"000000")}`}>
			<DataTable
				sortable
				zebra
				title="Public Rooms"
				description={rooms.length + ' public rooms open'}
				headers={roomHeaders}
				rows={rooms}
			>
				<Toolbar>
					<ToolbarContent>
						<ToolbarSearch persistent shouldFilterRows />
					</ToolbarContent>
				</Toolbar>
				<svelte:fragment slot="cell" let:cell>
					{#if cell.key === 'join'}
						<Button
							disabled={loadingJoin}
							on:click={() => joinRoom(cell.value)}
							style="float: right;"
							kind="ghost"
							iconDescription="Join"
							icon={CaretRight}
							href="#"
						/>
					{:else}{cell.value}{/if}
				</svelte:fragment>
			</DataTable>
			<Pagination bind:pageSize bind:page totalItems={rooms.length} pageSizeInputDisabled />
		</div>
	</section>
</section>

<style lang="scss">
	.join-room-panel {
		display: flex;
		flex-direction: column;
		align-items: center;

		padding: 1rem;

		width: 100%;
		height: 100%;

		text-align: left;

		.roomcode-wrapper {
			display: flex;
			align-items: center;
			margin-bottom: 2rem;
		}

		.room-listing {
			width: fit-content;
			max-width: min(100%, 1056px);

			padding-bottom: 1rem;
		}
	}
</style>
