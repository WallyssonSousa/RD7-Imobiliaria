export interface User {
  username: string
  role: string
  token: string
}

export class AuthManager {
  private static readonly TOKEN_KEY = "auth_token"
  private static readonly USER_KEY = "auth_user"

  static saveAuth(user: User): void {
    if (typeof window !== "undefined") {
      localStorage.setItem(this.TOKEN_KEY, user.token)
      localStorage.setItem(
        this.USER_KEY,
        JSON.stringify({
          username: user.username,
          role: user.role,
        }),
      )
    }
  }

  static getToken(): string | null {
    if (typeof window !== "undefined") {
      return localStorage.getItem(this.TOKEN_KEY)
    }
    return null
  }

  static getUser(): Omit<User, "token"> | null {
    if (typeof window !== "undefined") {
      const userStr = localStorage.getItem(this.USER_KEY)
      return userStr ? JSON.parse(userStr) : null
    }
    return null
  }

  static clearAuth(): void {
    if (typeof window !== "undefined") {
      localStorage.removeItem(this.TOKEN_KEY)
      localStorage.removeItem(this.USER_KEY)
    }
  }

  static isAuthenticated(): boolean {
    return !!this.getToken()
  }

  static getRedirectPath(role: string): string {
    switch (role) {
      case "admin":
        return "/dashboard"
      default:
        return "/dashboard"
    }
  }
}
