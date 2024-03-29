<script lang="ts">
	import {
		FluidForm,
		TextInput,
		PasswordInput,
		Tile,
		Button,
		Link,
		InlineNotification
	} from 'carbon-components-svelte';

	import Login from 'carbon-icons-svelte/lib/Login.svelte';

	const subtitleDetails = [
		'Back for more practice?',
		'Back on the grind?',
		`How's your day been?`,
		`VOLY greets you.`,
		`Back for more?`,
		`Math is fun, isn't it?`,
		`Don't mistype your password challenge (impossible)`
	];

	let subtitleDetail = '';

	import { auth } from '$lib/firebase';
	import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
	import { user } from '$lib/sessionStore';
	import { onMount } from 'svelte';

	onMount(async () => {
		subtitleDetail = subtitleDetails[Math.floor(subtitleDetails.length * Math.random())];
	});

	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';

	let loginEmail: string = '',
		loginPassword: string = '',
		loading = false;

	let invalidField = '';
	let invalidCredentials = '';

	const handleLogin = async () => {
		if (loading) {
			return;
		}

		try {
			invalidCredentials = '';
			loading = true;
			if (!loginPassword) {
				return (invalidCredentials = 'You must provide a password');
			}
			await signInWithEmailAndPassword(auth, loginEmail, loginPassword);

			goto('/');
		} catch ({ code, message }) {
			switch (code) {
				case 'auth/invalid-email':
				case 'auth/user-not-found':
					invalidField = 'email';
					invalidCredentials = 'Invalid Email';
					break;
				case 'auth/wrong-password':
					invalidField = 'password';
					invalidCredentials = 'Incorrect Password';
					break;
				case 'auth/too-many-requests':
					invalidField = 'password';
					invalidCredentials = 'Too many attempts. Please try again later.';
					break;
				default:
					invalidField = 'password';
					invalidCredentials = 'Something went wrong';
			}
			console.error(`Error ${code}: ${message}`);
		} finally {
			loading = false;
		}
	};

	let resetSent = false;
	const handleReset = async () => {
		if (loading) {
			return;
		}

		try {
			invalidCredentials = '';
			resetSent = false;
			loading = true;
			await sendPasswordResetEmail(auth, loginEmail);
			resetSent = true;
		} catch ({ code, message }) {
			switch (code) {
				case 'auth/invalid-email':
				case 'auth/user-not-found':
					invalidField = 'email';
					invalidCredentials = 'Invalid Email';
					break;
				case 'auth/missing-email':
					invalidField = 'email';
					invalidCredentials = 'Provide an email to reset your account.';
					break;
				case 'auth/too-many-requests':
					invalidField = 'email';
					invalidCredentials = 'Too many attempts. Please try again later.';
					break;
				default:
					invalidField = 'email';
					invalidCredentials = 'Something went wrong';
			}
			console.error(`Error ${code}: ${message}`);
		} finally {
			loading = false;
		}
	};
</script>

<section class="login-panel">
	<Tile>
		<h1 class="login-title" style="user-select: none;">Login</h1>
		<h6 class="login-subtitle" style="user-select: none;">{subtitleDetail}</h6>

		{#key resetSent}
			{#if resetSent}
				<InlineNotification
					lowContrast
					kind="success"
					title="We've emailed you a password reset link"
					subtitle="Wait for up to a minute, remember to check your spam folder"
					style="flex-shrink: 0; align-items: center;"
				/>
			{/if}
		{/key}

		<FluidForm>
			<TextInput
				bind:value={loginEmail}
				light
				labelText="Email"
				placeholder="Enter email..."
				required
				invalidText={invalidCredentials}
				invalid={!!invalidCredentials && invalidField == 'email'}
			/>
			<PasswordInput
				bind:value={loginPassword}
				required
				light
				type="password"
				labelText="Password"
				placeholder="Enter password..."
				invalidText={invalidCredentials}
				invalid={!!invalidCredentials && invalidField == 'password'}
			/>
		</FluidForm>
		<div style="margin-top: 1rem; user-select: none;">
			<Link href="/signup">Create an account</Link>
			│
			<Link on:click={handleReset}>Forgot password?</Link>
		</div>
		<span style="display: flex; justify-content: flex-end; margin-top: 1rem;">
			<Button on:click={handleLogin} type="submit" size="field" icon={Login} disabled={loading}
				>Log In</Button
			>
		</span>
	</Tile>
</section>

<style lang="scss">
	@import 'src/variables.scss';

	.login-panel {
		display: flex;
		justify-content: center;
		flex-direction: column;

		padding: 1rem;

		height: 100%;
		width: min(100%, 672px);
	}

	.login-title {
		text-align: left;
	}

	.login-subtitle {
		text-align: left;
		font-weight: 300;
		font-style: italic;

		margin-top: 0.5rem;
		margin-bottom: 1rem;
	}
</style>
