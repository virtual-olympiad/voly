import { auth } from '$lib/firebase';
import { user } from '$lib/sessionStore';
import { onAuthStateChanged } from 'firebase/auth';
import { get } from 'svelte/store';
export const load = async (event) => {
    onAuthStateChanged(auth, (currentUser) => {
        user.set({
            ...get(user),
            pending: false,
            user: currentUser
        });
    });
};
//# sourceMappingURL=+layout.js.map