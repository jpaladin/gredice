'use server';

import { getEntitiesFormatted } from "@gredice/storage";
import { BlockData } from "../../@types/BlockData";

export async function loadBlockData() {
    return await getEntitiesFormatted('block') as unknown as BlockData[];
}