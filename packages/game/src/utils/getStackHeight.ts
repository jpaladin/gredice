import type { Block } from "../types/Block";
import type { Stack } from "../types/Stack";
import { useGameState } from "../useGameState";

function getBlockDataByName(name: string) {
    return useGameState.getState().data.blocks.find(entity => entity.information.name === name);
}

export function stackHeight(stack: Stack | undefined, stopBlock?: Block) {
    if (!stack || stack.blocks.length <= 0) {
        return 0;
    }

    let height = 0;
    for (const block of stack.blocks) {
        if (block === stopBlock) {
            return height;
        }
        height += getBlockDataByName(block.name)?.attributes.height ?? 0;
    }
    return height
}