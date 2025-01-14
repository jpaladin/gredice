import 'server-only';
import { eq } from "drizzle-orm";
import { storage } from "..";
import { accounts, accountUsers, userLogins, users } from "../schema";
import { randomUUID } from 'node:crypto';
import { createGarden } from "./gardensRepo";

export function getUsers() {
    return storage.query.users.findMany();
}

export function getUser(userId: string) {
    return storage.query.users.findFirst({
        where: eq(users.id, userId),
        with: {
            accounts: {
                with: {
                    account: true
                }
            }
        }
    });
}

export function getUserWithLogins(userName: string) {
    return storage.query.users.findFirst({
        where: eq(users.userName, userName),
        with: {
            usersLogins: true
        }
    });
}

export async function createUserWithPassword(userName: string, passwordHash: string, salt: string) {
    // Create account
    const account = storage
        .insert(accounts)
        .values({
            id: randomUUID(),
        })
        .returning({ id: accounts.id });
    const accountId = (await account)[0].id;
    if (!accountId) {
        throw new Error('Failed to create account');
    }

    // Create default garden
    await createGarden({
        accountId,
        name: 'Vrt od ' + userName
    });

    // Create user
    const createdUsers = await storage
        .insert(users)
        .values({
            id: randomUUID(),
            userName,
            role: 'user'
        })
        .returning({ id: users.id });
    const userId = createdUsers[0].id;
    if (!userId) {
        throw new Error('Failed to create user');
    }

    // Link user to account
    await storage.insert(accountUsers).values({
        accountId,
        userId
    });

    // Insert the password login
    await storage.insert(userLogins).values({
        userId,
        loginType: 'password',
        loginId: userName,
        loginData: JSON.stringify({ salt, password: passwordHash })
    });

    return userId;
}

export async function updateUserRole(userId: string, newRole: string) {
    await storage.update(users).set({ role: newRole }).where(eq(users.id, userId));
}
