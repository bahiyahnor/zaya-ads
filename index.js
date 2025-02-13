export default {
    async fetch(request) {
        let url = new URL(request.url);

        if (url.pathname === "/app-ads.txt") {
            return new Response("google.com, pub-4229164680371447, DIRECT, f08c47fec0942fa0", {
                headers: { "Content-Type": "text/plain" }
            });
        }

        // Forward all other requests to Google Sites
        return fetch(request);
    }
};
