import { writable } from 'svelte/store';
export const app = writable({
    theme: 'g90',
    notification: null
});
export const pushNotification = (kind = "error", title = "", subtitle = "", caption = new Date().toLocaleString(), fullWidth = false, timeout = 0) => {
    app.update(app => {
        app.notification = {
            kind, title, subtitle, caption, fullWidth, timeout
        };
        return app;
    });
};
export const user = writable({
    pending: true,
    user: null,
});
export const room = writable({
    roomId: '',
    roomData: {},
    isHost: false,
    gameState: 'none',
    problems: []
});
//# sourceMappingURL=sessionStore.js.map