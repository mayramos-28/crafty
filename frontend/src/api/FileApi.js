import { CRAFTY_BASE_URL } from "./craftyApi";

export const craftyFileUrl = (fileId) => {
    return `${CRAFTY_BASE_URL}/file/show/${fileId}`;
}

export const craftyFileProductUrl = (fileId) => {
    return `${CRAFTY_BASE_URL}/product-file/show/${fileId}`;
}