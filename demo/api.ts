/**
 * Swagger Petstore
 * 1.0.0
 * DO NOT MODIFY - This file has been generated using oazapfts.
 * See https://www.npmjs.com/package/oazapfts
 */
import * as Oazapfts from "oazapfts/runtime";
import * as QS from "oazapfts/runtime/query";
export const defaults: Oazapfts.RequestOpts = {
    baseUrl: "https://petstore.swagger.io/v2",
};
const oazapfts = Oazapfts.runtime(defaults);
export const servers = {
    server1: "https://petstore.swagger.io/v2",
    server2: "http://petstore.swagger.io/v2"
};
export type Category = {
    id?: number;
    name?: string;
};
export type Tag = {
    id?: number;
    name?: string;
};
export type Pet = {
    id?: number;
    category?: Category;
    name: string;
    photoUrls: string[];
    tags?: Tag[];
    status?: "available" | "pending" | "sold";
};
export type ApiResponse = {
    code?: number;
    "type"?: string;
    message?: string;
};
export type Order = {
    id?: number;
    petId?: number;
    quantity?: number;
    shipDate?: string;
    status?: "placed" | "approved" | "delivered";
    complete?: boolean;
};
export type User = {
    id?: number;
    username?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    phone?: string;
    userStatus?: number;
};
/**
 * Update an existing pet
 */
export async function updatePet(pet: Pet, opts?: Oazapfts.RequestOpts) {
    return await oazapfts.fetchText("/pet", oazapfts.json({
        ...opts,
        method: "PUT",
        body: pet
    }));
}
/**
 * Add a new pet to the store
 */
export async function addPet(pet: Pet, opts?: Oazapfts.RequestOpts) {
    return await oazapfts.fetchText("/pet", oazapfts.json({
        ...opts,
        method: "POST",
        body: pet
    }));
}
/**
 * Finds Pets by status
 */
export async function findPetsByStatus(status: ("available" | "pending" | "sold")[], opts?: Oazapfts.RequestOpts) {
    return await oazapfts.fetchJson<{
        status: 200;
        data: Pet[];
    } | {
        status: 400;
        data: string;
    }>(`/pet/findByStatus${QS.query(QS.explode({
        status
    }))}`, {
        ...opts
    });
}
/**
 * Finds Pets by tags
 */
export async function findPetsByTags(tags: string[], opts?: Oazapfts.RequestOpts) {
    return await oazapfts.fetchJson<{
        status: 200;
        data: Pet[];
    } | {
        status: 400;
        data: string;
    }>(`/pet/findByTags${QS.query(QS.explode({
        tags
    }))}`, {
        ...opts
    });
}
/**
 * Find pet by ID
 */
export async function getPetById(petId: number, opts?: Oazapfts.RequestOpts) {
    return await oazapfts.fetchJson<{
        status: 200;
        data: Pet;
    } | {
        status: 400;
        data: string;
    } | {
        status: 404;
        data: string;
    }>(`/pet/${petId}`, {
        ...opts
    });
}
/**
 * Updates a pet in the store with form data
 */
export async function updatePetWithForm(petId: number, body: {
    name?: string;
    status?: string;
}, opts?: Oazapfts.RequestOpts) {
    return await oazapfts.fetchText(`/pet/${petId}`, oazapfts.form({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * Deletes a pet
 */
export async function deletePet(petId: number, { apiKey }: {
    apiKey?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return await oazapfts.fetchText(`/pet/${petId}`, {
        ...opts,
        method: "DELETE",
        headers: {
            ...opts && opts.headers,
            api_key: apiKey
        }
    });
}
/**
 * uploads an image
 */
export async function uploadFile(petId: number, body: {
    additionalMetadata?: string;
    file?: Blob;
}, opts?: Oazapfts.RequestOpts) {
    return await oazapfts.fetchJson<{
        status: 200;
        data: ApiResponse;
    }>(`/pet/${petId}/uploadImage`, oazapfts.multipart({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * Returns pet inventories by status
 */
export async function getInventory(opts?: Oazapfts.RequestOpts) {
    return await oazapfts.fetchJson<{
        status: 200;
        data: {
            [key: string]: number;
        };
    }>("/store/inventory", {
        ...opts
    });
}
/**
 * Place an order for a pet
 */
export async function placeOrder(order: Order, opts?: Oazapfts.RequestOpts) {
    return await oazapfts.fetchJson<{
        status: 200;
        data: Order;
    } | {
        status: 400;
        data: string;
    }>("/store/order", oazapfts.json({
        ...opts,
        method: "POST",
        body: order
    }));
}
/**
 * Find purchase order by ID
 */
export async function getOrderById(orderId: number, opts?: Oazapfts.RequestOpts) {
    return await oazapfts.fetchJson<{
        status: 200;
        data: Order;
    } | {
        status: 400;
        data: string;
    } | {
        status: 404;
        data: string;
    }>(`/store/order/${orderId}`, {
        ...opts
    });
}
/**
 * Delete purchase order by ID
 */
export async function deleteOrder(orderId: number, opts?: Oazapfts.RequestOpts) {
    return await oazapfts.fetchText(`/store/order/${orderId}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * Create user
 */
export async function createUser(user: User, opts?: Oazapfts.RequestOpts) {
    return await oazapfts.fetchText("/user", oazapfts.json({
        ...opts,
        method: "POST",
        body: user
    }));
}
/**
 * Creates list of users with given input array
 */
export async function createUsersWithArrayInput(body: User[], opts?: Oazapfts.RequestOpts) {
    return await oazapfts.fetchText("/user/createWithArray", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * Creates list of users with given input array
 */
export async function createUsersWithListInput(body: User[], opts?: Oazapfts.RequestOpts) {
    return await oazapfts.fetchText("/user/createWithList", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * Logs user into the system
 */
export async function loginUser(username: string, password: string, opts?: Oazapfts.RequestOpts) {
    return await oazapfts.fetchJson<{
        status: 200;
        data: string;
    } | {
        status: 400;
        data: string;
    }>(`/user/login${QS.query(QS.form({
        username,
        password
    }))}`, {
        ...opts
    });
}
/**
 * Logs out current logged in user session
 */
export async function logoutUser(opts?: Oazapfts.RequestOpts) {
    return await oazapfts.fetchText("/user/logout", {
        ...opts
    });
}
/**
 * Get user by user name
 */
export async function getUserByName(username: string, opts?: Oazapfts.RequestOpts) {
    return await oazapfts.fetchJson<{
        status: 200;
        data: User;
    } | {
        status: 400;
        data: string;
    } | {
        status: 404;
        data: string;
    }>(`/user/${username}`, {
        ...opts
    });
}
/**
 * Updated user
 */
export async function updateUser(username: string, user: User, opts?: Oazapfts.RequestOpts) {
    return await oazapfts.fetchText(`/user/${username}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: user
    }));
}
/**
 * Delete user
 */
export async function deleteUser(username: string, opts?: Oazapfts.RequestOpts) {
    return await oazapfts.fetchText(`/user/${username}`, {
        ...opts,
        method: "DELETE"
    });
}
export async function customizePet({ furColor, color, xColorOptions }: {
    furColor?: string;
    color?: string;
    xColorOptions?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return await oazapfts.fetchText(`/pet/customize${QS.query(QS.form({
        "fur.color": furColor,
        color
    }))}`, {
        ...opts,
        method: "POST",
        headers: {
            ...opts && opts.headers,
            "x-color-options": xColorOptions
        }
    });
}