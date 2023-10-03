import { reactive } from "vue";
import router from "./router/index";
import { io, Socket } from "socket.io-client";

class User {
    public login: string = "none";
    public token: string | null = null;
    public socket: Socket | null = null;
    public socketId: string | null = "";

    async auth(result: string): Promise<boolean> {
        const response = await this.validateTokenWithParam(result);

        if (response.status != 200) {
            this.logout();
            return false;
        }

        localStorage.setItem("token", result);
        this.token = result;

        await this.getUserData();

        if (!this.socket) {
            this.socket = io("http://localhost:3000/", {
                auth: {
                    token: this.token
                }
            });
        }

        return true;
    }

    isLoggedIn(): boolean {
        return this.token != null;
    }

    logout() {
        localStorage.removeItem("token");
        this.socketId = null;
        this.socket?.disconnect();
        this.token = null;
        this.login = "none";

        router.push({ path: "/" })
    }

    async getUserData(): Promise<any> {
        const response = await fetch(`http://localhost:3000/users/${this.id}`);

        if (response.status != 200) {
            this.logout();
            return;
        }

        const { login } = await response.json();

        this.login = login;
    }

    async validateTokenWithParam(token: string) {
        return await fetch("http://localhost:3000/auth/validate", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
    }

    async validateToken() {
        return await this.validateTokenWithParam(this.token as string);
    }
};

export const user: User = reactive<User>(new User());