declare function getCommands(lines: string[]): ({
    exp: string;
    closeGroup?: boolean | undefined;
    openGroup?: boolean | undefined;
} | null)[];
export { getCommands };
